import { runSync } from './sync-neon-content'
import test from 'node:test'
import assert from 'node:assert/strict'
import { articleSchema } from '../src/content/schema'
import { buildNeonArticleRecord, parseNeonArticleRow } from '../src/content/neonContent'

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
    subtitle: 'Neon Sync Test',
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
    syncEnabled: false,
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
})

test('buildNeonArticleRecord mirrors canonical article metadata', () => {
  const record = buildNeonArticleRecord(sampleArticle)

  assert.equal(record.id, sampleArticle.id)
  assert.equal(record.slug, sampleArticle.slug)
  assert.equal(record.categoryId, sampleArticle.taxonomy.categoryId)
  assert.equal(record.title, sampleArticle.meta.title)
  assert.equal(record.tabNumber, sampleArticle.meta.tabNumber)
  assert.deepEqual(record.document, sampleArticle)
})

test('parseNeonArticleRow validates Neon rows against canonical article metadata', () => {
  const row = {
    id: '01',
    slug: 'thema-01',
    category_id: 'biological-psychology',
    title: 'Beispielartikel',
    tab_number: 1,
    document: sampleArticle,
  }

  const record = parseNeonArticleRow(row)
  assert.equal(record.slug, 'thema-01')
  assert.equal(record.document.meta.title, 'Beispielartikel')
})

test('parseNeonArticleRow rejects mismatched Neon metadata', () => {
  assert.throws(
    () =>
      parseNeonArticleRow({
        id: '01',
        slug: 'thema-01',
        category_id: 'wrong-category',
        title: 'Beispielartikel',
        tab_number: 1,
        document: sampleArticle,
      }),
    /mismatched category metadata/i,
  )
})

test('sync-neon-content pull mode throws error when CONTENT_DATABASE_URL is missing', async () => {
  await assert.rejects(
    runSync('pull', null),
    { message: 'CONTENT_DATABASE_URL is required for Neon content sync' }
  )
})
