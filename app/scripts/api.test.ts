import test from 'node:test'
import assert from 'node:assert/strict'
import { articleSchema } from '../src/content/schema'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Extend globalThis for our mock
declare global {
  var mockEnv: Record<string, string | undefined>;
}

test('api tests', async () => {
  const codePath = path.resolve(__dirname, '../src/content/api.ts');
  const code = fs.readFileSync(codePath, 'utf8');
  const patchedCode = code.replace(/import\.meta\.env/g, '(globalThis.mockEnv || {})');

  const tmpPath = path.resolve(__dirname, `../src/content/api.test-tmp-${process.pid}.ts`);
  fs.writeFileSync(tmpPath, patchedCode);

  try {
    const { pushArticleToCrm, buildCrmSyncPayload } = await import(pathToFileURL(tmpPath).href);

    const sampleArticle = articleSchema.parse({
      schemaVersion: '2.0.0',
      id: '01',
      slug: 'thema-01',
      legacy: {
        sourceFormat: 'authoring-v1',
        sourcePath: 'sample',
      },
      meta: {
        title: 'Beispielartikel',
        subtitle: 'API Sync Test',
        discipline: 'Biologische Psychologie',
        difficulty: 'Erstsemester-Komplexitaetsgrad',
        tabColor: '#abc123',
        tabNumber: 1,
        estimatedReadMinutes: 3,
        leadTeaser: 'Kurzbeschreibung',
      },
      taxonomy: {
        categoryId: 'biological-psychology',
        keywords: ['beispiel'],
        audience: ['studierende'],
      },
      crm: {
        system: 'content-hub',
        externalId: 'thema-01',
        recordType: 'knowledge-article',
        pipelineStage: 'published',
        cacheTags: ['thema-01', 'biological-psychology'],
        syncEnabled: true,
        metadata: {
          taxonomyPath: ['Biologische Psychologie'],
          audience: ['studierende'],
          keywords: ['beispiel'],
        },
      },
      sections: [
        {
          id: '01-lead',
          type: 'lead',
          entries: [
            {
              kind: 'paragraph',
              content: {
                text: 'Ein kurzer Beispieltext.',
                annotations: [],
              },
            },
          ],
        },
      ],
      sources: [
        {
          id: 'source-1',
          kind: 'other',
          shortCitation: 'Quelle (2024)',
          apaCitation: 'Quelle. (2024). Beispiel.',
          verification: {
            status: 'pending-review',
            checkedAgainst: ['test'],
          },
        },
      ],
      relatedResources: [],
    });

    await test('pushArticleToCrm skips when endpoint is not configured', async () => {
      globalThis.mockEnv = { VITE_CONTENT_CRM_ENDPOINT: undefined };

      const result = await pushArticleToCrm(sampleArticle)
      assert.equal(result.status, 'skipped')
      assert.equal(result.reason, 'CRM endpoint not configured or sync disabled for static deployment.')
    });

    await test('pushArticleToCrm skips when sync is disabled', async () => {
      globalThis.mockEnv = { VITE_CONTENT_CRM_ENDPOINT: 'https://crm.example.com/api/sync' };

      const articleWithSyncDisabled = { ...sampleArticle, crm: { ...sampleArticle.crm, syncEnabled: false } }

      const result = await pushArticleToCrm(articleWithSyncDisabled)
      assert.equal(result.status, 'skipped')
      assert.equal(result.reason, 'CRM endpoint not configured or sync disabled for static deployment.')
    });

    await test('pushArticleToCrm calls fetch and returns synced on success', async () => {
      globalThis.mockEnv = { VITE_CONTENT_CRM_ENDPOINT: 'https://crm.example.com/api/sync' };

      const originalFetch = globalThis.fetch

      let fetchCalledWith: { input: RequestInfo | URL, init?: RequestInit } | null = null;

      globalThis.fetch = async (input, init) => {
        fetchCalledWith = { input, init }
        return new Response(null, { status: 200 });
      }

      try {
        const result = await pushArticleToCrm(sampleArticle)
        assert.equal(result.status, 'synced')
        assert.equal(fetchCalledWith?.input, 'https://crm.example.com/api/sync')
        assert.equal(fetchCalledWith?.init?.method, 'POST')

        const headers = fetchCalledWith?.init?.headers as Record<string, string>;
        assert.equal(headers['Content-Type'], 'application/json')
        assert.equal(fetchCalledWith?.init?.body, JSON.stringify(buildCrmSyncPayload(sampleArticle)))
      } finally {
        globalThis.fetch = originalFetch
      }
    });

    await test('pushArticleToCrm throws an error when fetch fails', async () => {
      globalThis.mockEnv = { VITE_CONTENT_CRM_ENDPOINT: 'https://crm.example.com/api/sync' };

      const originalFetch = globalThis.fetch
      globalThis.fetch = async () => {
        return new Response(null, { status: 500 });
      }

      try {
        await assert.rejects(
          () => pushArticleToCrm(sampleArticle),
          /CRM sync failed with status 500/
        )
      } finally {
        globalThis.fetch = originalFetch
      }
    });
  } finally {
    if (fs.existsSync(tmpPath)) {
      fs.unlinkSync(tmpPath);
    }
  }
});
