import test from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'
import { articleSchema } from '../src/content/schema'
import { transformLegacyArticle, type LegacySubjectDocument } from '../src/content/transformers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(appRoot, '..')
const legacyContentDir = path.join(repoRoot, 'content')
const canonicalArticlesDir = path.join(appRoot, 'src', 'content', 'articles')

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

test('legacy YAML migration output stays byte-for-byte aligned with canonical article JSON', async () => {
  const legacyFilePaths = await getLegacyFilePaths()
  assert.equal(legacyFilePaths.length, 12, 'expected the canonical legacy content set to contain 12 YAML files')

  for (const filePath of legacyFilePaths) {
    const rawLegacy = await readFile(filePath, 'utf8')
    const parsedLegacy = yaml.load(rawLegacy) as LegacySubjectDocument
    const migrated = transformLegacyArticle(parsedLegacy, path.relative(repoRoot, filePath).replace(/\\/g, '/'))

    const canonicalPath = path.join(canonicalArticlesDir, `${migrated.slug}.json`)
    const rawCanonical = await readFile(canonicalPath, 'utf8')
    const canonical = articleSchema.parse(JSON.parse(rawCanonical))

    assert.deepEqual(
      normalizeSerializableShape(migrated),
      normalizeSerializableShape(canonical),
      `${migrated.slug} drifted from the migration pipeline; canonical JSON should be reproducible from legacy YAML`,
    )
  }
})
