import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { authoringDraftCollectionSchema } from '../src/content/authoringSchema'
import { compileAuthoringDraftCollection } from '../src/content/authoringCompiler'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appRoot = path.resolve(__dirname, '..')
const draftsPath = path.join(appRoot, 'src', 'content', 'recovered', 'analzy-authoring-drafts.json')
const outputDir = path.join(appRoot, 'src', 'content', 'articles')
const shouldWrite = process.argv.includes('--write')

async function main() {
  const rawDrafts = await readFile(draftsPath, 'utf8')
  const collection = authoringDraftCollectionSchema.parse(JSON.parse(rawDrafts))
  const compiledArticles = compileAuthoringDraftCollection(collection)

  if (shouldWrite) {
    await mkdir(outputDir, { recursive: true })
    await Promise.all(
      compiledArticles.map((article) => writeFile(path.join(outputDir, `${article.slug}.json`), `${JSON.stringify(article, null, 2)}\n`, 'utf8')),
    )
  }

  for (const article of compiledArticles) {
    const verb = shouldWrite ? 'wrote' : 'validated'
    console.log(`${verb}: ${article.slug} -> src/content/articles/${article.slug}.json`)
  }

  console.log(`completed ${compiledArticles.length} authoring compilations`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
