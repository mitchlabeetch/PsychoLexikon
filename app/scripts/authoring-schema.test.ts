import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { authoringDraftCollectionSchema } from '../src/content/authoringSchema'
import { articleSchema, ARTICLE_SCHEMA_VERSION } from '../src/content/schema'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const recoveredDir = path.resolve(__dirname, '..', 'src', 'content', 'recovered')

test('analzy authoring drafts validate against the GUI-oriented authoring sublanguage', async () => {
  const raw = await readFile(path.join(recoveredDir, 'analzy-authoring-drafts.json'), 'utf8')
  const collection = authoringDraftCollectionSchema.parse(JSON.parse(raw))

  assert.equal(collection.schemaVersion, '1.0.0')
  assert.equal(collection.drafts.length, 26)

  const draftsWithAssets = collection.drafts.filter((draft) => draft.assets.length > 0)
  const draftsWithoutAssets = collection.drafts.filter((draft) => draft.assets.length === 0)

  for (const draft of collection.drafts) {
    assert.equal(draft.pageType, 'knowledge-article-draft')
    assert.ok(draft.sections.length >= 2, `${draft.identity.slug} should expose multiple GUI sections`)
    assert.ok(draft.sources.length >= 1, `${draft.identity.slug} should expose sources`)
  }

  assert.equal(draftsWithAssets.length, 12)
  assert.equal(draftsWithoutAssets.length, 14)
})

test('runtime article schema accepts subtitle, image assets, and internal related targets', () => {
  const article = articleSchema.parse({
    schemaVersion: ARTICLE_SCHEMA_VERSION,
    id: '99',
    slug: 'thema-99',
    legacy: {
      sourceFormat: 'yaml-v1',
      sourcePath: 'content/thema-99.yml',
    },
    meta: {
      title: 'Beispielartikel',
      subtitle: 'Mit internen Links und Bilddatei',
      discipline: 'Testdisziplin',
      difficulty: 'Erstsemester-Komplexitaetsgrad',
      tabColor: '#98d4bb',
      tabNumber: 99,
      estimatedReadMinutes: 3,
      leadTeaser: 'Kurzer Einstieg.',
    },
    taxonomy: {
      categoryId: 'biological-psychology',
      keywords: ['beispiel', 'intern', 'bild'],
      audience: ['erstsemester'],
    },
    crm: {
      system: 'content-hub',
      externalId: 'thema-99',
      recordType: 'knowledge-article',
      pipelineStage: 'draft',
      cacheTags: ['thema-99', 'biological-psychology'],
      syncEnabled: false,
      metadata: {
        taxonomyPath: ['Biologische Psychologie'],
        audience: ['erstsemester'],
        keywords: ['beispiel', 'intern', 'bild'],
      },
    },
    sections: [
      {
        id: '99-lead-1',
        type: 'lead',
        entries: [
          {
            kind: 'paragraph',
            content: {
              text: 'Ein kurzer Auftakt.',
              annotations: [],
            },
          },
        ],
      },
      {
        id: '99-visual-1',
        type: 'visual',
        asset: {
          kind: 'image-file',
          src: '/recovered/analzy/illu-neuron.png',
          alt: 'Beispielbild',
          description: 'Ein Testbild fuer die Authoring-Sprache.',
          credit: 'Recovered analzy asset',
        },
        caption: 'Beispielhafte Bildunterschrift.',
      },
    ],
    sources: [
      {
        id: '99-source-1',
        kind: 'other',
        shortCitation: 'Test (2026)',
        apaCitation: 'Test, T. (2026). Beispielquelle.',
        verification: {
          status: 'pending-review',
          checkedAgainst: [],
        },
      },
    ],
    relatedResources: [
      {
        id: '99-resource-1',
        category: 'Verknuepfung',
        title: 'Zur Kategorie',
        relevance: 'Interner Kategorieeinstieg.',
        target: {
          kind: 'internal-category',
          categoryId: 'biological-psychology',
        },
      },
      {
        id: '99-resource-2',
        category: 'Verknuepfung',
        title: 'Externe Quelle',
        relevance: 'Externer Nachweis.',
        target: {
          kind: 'external-url',
          url: 'https://example.org/resource',
        },
      },
    ],
  })

  assert.equal(article.meta.subtitle, 'Mit internen Links und Bilddatei')
  assert.equal(article.sections[1]?.type, 'visual')
})
