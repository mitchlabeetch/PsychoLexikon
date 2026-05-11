import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const recoveredDir = path.resolve(__dirname, '..', 'src', 'content', 'recovered')

interface AnalzyImportDraftManifest {
  corpusId: string
  drafts: Array<{
    articleId: string
    canonicalSlug: string
    categoryId: string
    title: string
    sectionHeadings: string[]
    textBlocks: string[]
    definitions: Array<{ term: string; definition: string }>
    citations: Array<{ citation: string }>
    images: Array<{ assetName: string; publicSrc: string }>
    sourceSnapshotPath: string
  }>
}

test('analzy import drafts cover the 12 recovered primary pages with reusable structured content', async () => {
  const raw = await readFile(path.join(recoveredDir, 'analzy-import-drafts.json'), 'utf8')
  const manifest = JSON.parse(raw) as AnalzyImportDraftManifest

  assert.equal(manifest.corpusId, 'analzy-deployment-v2')
  assert.equal(manifest.drafts.length, 12)

  for (const draft of manifest.drafts) {
    assert.match(draft.articleId, /^\d{2}$/)
    assert.equal(draft.canonicalSlug, `thema-${draft.articleId}`)
    assert.ok(draft.categoryId.length > 0)
    assert.ok(draft.title.length > 0)
    assert.ok(draft.sectionHeadings.length >= 4, `${draft.articleId} should expose multiple recovered section headings`)
    assert.ok(draft.textBlocks.length >= 6, `${draft.articleId} should expose reusable recovered text blocks`)
    assert.ok(draft.definitions.length >= 1, `${draft.articleId} should expose recovered definitions`)
    assert.ok(draft.citations.length >= 1, `${draft.articleId} should expose recovered citations`)
    assert.ok(draft.images.length >= 1, `${draft.articleId} should expose recovered illustrations`)
    assert.ok(
      draft.images.every((image) => image.publicSrc.startsWith('/recovered/analzy/')),
      `${draft.articleId} image paths should target the recovered asset directory`,
    )
    assert.match(draft.sourceSnapshotPath, /^src\/content\/recovered\/analzy-pages\/.+\.bundle\.txt$/)
  }
})
