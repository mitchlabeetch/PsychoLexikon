import test from 'node:test'
import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { articleSchema, type Annotation, type ArticleDocument, type ArticleSection, type SectionEntry } from '../src/content/schema'
import { transformLegacyArticle, type LegacySubjectDocument } from '../src/content/transformers'
import { getTaxonomyNode, listCategories } from '../src/content/taxonomy'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const articlesDir = path.resolve(__dirname, '..', 'src', 'content', 'articles')

async function readArticles() {
  const fileNames = (await readdir(articlesDir)).filter((fileName) => fileName.endsWith('.json')).sort()
  const articles = await Promise.all(
    fileNames.map(async (fileName) => {
      const rawContent = await readFile(path.join(articlesDir, fileName), 'utf8')
      return articleSchema.parse(JSON.parse(rawContent)) as ArticleDocument
    }),
  )

  return { fileNames, articles }
}

function collectAnnotations(section: ArticleSection): Annotation[] {
  if (section.type === 'visual') {
    return []
  }

  return section.entries.flatMap((entry) => {
    if (entry.kind === 'paragraph') {
      return entry.content.annotations
    }

    if (entry.kind === 'bullet_list') {
      return entry.items.flatMap((item) => item.annotations)
    }

    return []
  })
}

function entryContainsAnnotationText(entry: SectionEntry, annotationText: string) {
  const normalize = (value: string) => value.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim().toLocaleLowerCase()
  const normalizedAnnotation = normalize(annotationText)

  if (entry.kind === 'paragraph') {
    return normalize(entry.content.text).includes(normalizedAnnotation)
  }

  if (entry.kind === 'bullet_list') {
    return entry.items.some((item) => normalize(item.text).includes(normalizedAnnotation))
  }

  return false
}

test('all generated articles validate against the canonical schema', async () => {
  const { articles } = await readArticles()
  assert.equal(articles.length, 12)
})

test('taxonomy references resolve to known categories', async () => {
  const { articles } = await readArticles()

  for (const article of articles) {
    assert.ok(getTaxonomyNode(article.taxonomy.categoryId), `${article.slug} missing category`)
  }
})

test('category navigation registry stays within the intended 6 to 8 tab range', () => {
  const categories = listCategories()
  assert.ok(categories.length >= 6, 'expected at least 6 navigation categories')
  assert.ok(categories.length <= 8, 'expected at most 8 navigation categories')
})

test('every article resolves to exactly one canonical navigation category', async () => {
  const { articles } = await readArticles()

  for (const article of articles) {
    assert.ok(article.taxonomy.categoryId, `${article.slug} missing categoryId`)
    assert.ok(getTaxonomyNode(article.taxonomy.categoryId), `${article.slug} canonical category node missing`)
    assert.equal(article.crm.metadata.taxonomyPath.length, 1, `${article.slug} should expose a single canonical taxonomy label`)
  }
})

test('citation annotations reference valid sources and all annotation terms are present in text', async () => {
  const { articles } = await readArticles()

  for (const article of articles) {
    const sourceIds = new Set(article.sources.map((source) => source.id))

    for (const section of article.sections) {
      if (section.type === 'visual') {
        continue
      }

      for (const annotation of collectAnnotations(section)) {
        assert.ok(
          annotation.kind === 'citation' || section.entries.some((entry) => entryContainsAnnotationText(entry, annotation.text)),
          `${article.slug} annotation text "${annotation.text}" missing from section ${section.id}`,
        )

        if (annotation.kind === 'citation') {
          for (const sourceId of annotation.sourceIds) {
            assert.ok(sourceIds.has(sourceId), `${article.slug} citation ${annotation.id} references unknown source ${sourceId}`)
          }
        }
      }
    }
  }
})

test('crm cache tags and external ids are unique and stable', async () => {
  const { articles } = await readArticles()
  const externalIds = new Set<string>()

  for (const article of articles) {
    assert.ok(article.crm.cacheTags.includes(article.slug), `${article.slug} missing slug cache tag`)
    assert.ok(article.crm.cacheTags.includes(article.taxonomy.categoryId), `${article.slug} missing category cache tag`)
    assert.equal(article.crm.cacheTags.length, 2, `${article.slug} should have exactly slug + category cache tags`)
    assert.ok(!externalIds.has(article.crm.externalId), `duplicate CRM external id ${article.crm.externalId}`)
    externalIds.add(article.crm.externalId)
  }
})

test('legacy standards sources normalize to canonical standard kind', () => {
  const legacyDocument: LegacySubjectDocument = {
    id: '12',
    subject_meta: {
      title: 'Testartikel',
      discipline: 'Methoden',
      difficulty: 'Erstsemester-Komplexitätsgrad',
      tab_color: '#d4a8a8',
      tab_number: 12,
    },
    content_blocks: [
      {
        type: 'lead',
        text: 'Ein kurzer Testtext.',
      },
    ],
    sources: [
      {
        apa_citation: 'Standards Board. (2024). Standardisierte Richtlinie. https://example.org/standard',
        type: 'standards',
      },
    ],
    further_exploration: [],
  }

  const article = transformLegacyArticle(legacyDocument, 'content/thema-12.yml')
  assert.equal(article.taxonomy.categoryId, 'motivation-and-emotion')
  assert.equal(article.sources[0]?.kind, 'standard')
})
