import test from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'
import { articleSchema } from '../src/content/schema'
import { authoringDraftCollectionSchema } from '../src/content/authoringSchema'
import { compileAuthoringDraftCollection } from '../src/content/authoringCompiler'
import { transformLegacyArticle, type LegacySubjectDocument } from '../src/content/transformers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(appRoot, '..')
const legacyContentDir = path.join(repoRoot, 'content')
const canonicalArticlesDir = path.join(appRoot, 'src', 'content', 'articles')
const authoringDraftsPath = path.join(appRoot, 'src', 'content', 'recovered', 'analzy-authoring-drafts.json')

function normalizeSerializableShape<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

async function getLegacyFilePaths() {
  const entries = await readdir(legacyContentDir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && /^thema-\d{2}\.yml$/i.test(entry.name))
    .map((entry) => path.join(legacyContentDir, entry.name))
    .sort()
}

test('legacy YAML migration lane remains readable and schema-valid for all 12 legacy files', async () => {
  const legacyFilePaths = await getLegacyFilePaths()
  assert.equal(legacyFilePaths.length, 12, 'expected the canonical legacy content set to contain 12 YAML files')

  for (const filePath of legacyFilePaths) {
    const rawLegacy = await readFile(filePath, 'utf8')
    const parsedLegacy = yaml.load(rawLegacy) as LegacySubjectDocument
    const migrated = transformLegacyArticle(parsedLegacy, path.relative(repoRoot, filePath).replace(/\\/g, '/'))
    assert.equal(articleSchema.parse(migrated).slug, migrated.slug)
  }
})

test('authoring draft compilation stays byte-for-byte aligned with canonical article JSON', async () => {
  const rawDrafts = await readFile(authoringDraftsPath, 'utf8')
  const collection = authoringDraftCollectionSchema.parse(JSON.parse(rawDrafts))
  const compiledArticles = compileAuthoringDraftCollection(collection)

  for (const compiledArticle of compiledArticles) {
    const canonicalPath = path.join(canonicalArticlesDir, `${compiledArticle.slug}.json`)
    const rawCanonical = await readFile(canonicalPath, 'utf8')
    const canonical = articleSchema.parse(JSON.parse(rawCanonical))

    assert.deepEqual(
      normalizeSerializableShape(compiledArticle),
      normalizeSerializableShape(canonical),
      `${compiledArticle.slug} drifted from the authoring compiler; canonical JSON should be reproducible from authoring drafts`,
    )
  }
})
