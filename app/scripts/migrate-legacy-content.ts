import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'
import { transformLegacyArticle, type LegacySubjectDocument } from '../src/content/transformers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(appRoot, '..')
const legacyContentDir = path.join(repoRoot, 'content')
const outputDir = path.join(appRoot, 'src', 'content', 'articles')
const shouldWrite = process.argv.includes('--write')

async function readLegacyFiles() {
  const entries = await readdir(legacyContentDir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && /^thema-\d{2}\.yml$/i.test(entry.name))
    .map((entry) => path.join(legacyContentDir, entry.name))
    .sort()
}

async function migrateFile(filePath: string) {
  const rawFile = await readFile(filePath, 'utf8')
  const parsed = yaml.load(rawFile) as LegacySubjectDocument
  const transformed = transformLegacyArticle(parsed, path.relative(repoRoot, filePath).replace(/\\/g, '/'))

  return {
    transformed,
    outputPath: path.join(outputDir, `${transformed.slug}.json`),
  }
}

async function main() {
  const legacyFiles = await readLegacyFiles()
  const results = await Promise.all(legacyFiles.map(migrateFile))

  if (shouldWrite) {
    await mkdir(outputDir, { recursive: true })
    await Promise.all(
      results.map(({ transformed, outputPath }) =>
        writeFile(outputPath, `${JSON.stringify(transformed, null, 2)}\n`, 'utf8'),
      ),
    )
  }

  for (const { transformed, outputPath } of results) {
    const verb = shouldWrite ? 'wrote' : 'validated'
    console.log(`${verb}: ${transformed.slug} -> ${path.relative(appRoot, outputPath).replace(/\\/g, '/')}`)
  }

  console.log(`completed ${results.length} article migrations`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
