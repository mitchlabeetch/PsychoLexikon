import { readdir, readFile, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import postgres from 'postgres'
import { articleSchema, type ArticleDocument } from '../src/content/schema'
import { buildNeonArticleRecord, parseNeonArticleRow } from '../src/content/neonContent'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appRoot = path.resolve(__dirname, '..')
const articlesDir = path.join(appRoot, 'src', 'content', 'articles')
const connectionString = process.env.CONTENT_DATABASE_URL ?? process.env.DATABASE_URL

type SyncMode = 'push' | 'pull' | 'hydrate'

interface SyncSummary {
  mode: SyncMode
  articleCount: number
  skipped: boolean
}

function getMode(rawMode: string | undefined): SyncMode {
  if (rawMode === 'push' || rawMode === 'pull' || rawMode === 'hydrate') {
    return rawMode
  }

  throw new Error('Expected one of: push, pull, hydrate')
}

function createSqlClient() {
  if (!connectionString) {
    return null
  }

  return postgres(connectionString, {
    max: 1,
    prepare: false,
  })
}

async function readLocalArticles() {
  const fileNames = (await readdir(articlesDir)).filter((fileName) => fileName.endsWith('.json')).sort()
  return Promise.all(
    fileNames.map(async (fileName) => {
      const rawContent = await readFile(path.join(articlesDir, fileName), 'utf8')
      return articleSchema.parse(JSON.parse(rawContent)) as ArticleDocument
    }),
  )
}

async function writeLocalArticles(articles: ArticleDocument[]) {
  const existingFileNames = (await readdir(articlesDir)).filter((fileName) => fileName.endsWith('.json'))
  const nextFileNames = new Set(articles.map((article) => `${article.slug}.json`))

  await Promise.all(
    articles.map((article) =>
      writeFile(path.join(articlesDir, `${article.slug}.json`), `${JSON.stringify(article, null, 2)}\n`, 'utf8'),
    ),
  )

  await Promise.all(
    existingFileNames
      .filter((fileName) => !nextFileNames.has(fileName))
      .map(async (fileName) => {
        await unlink(path.join(articlesDir, fileName))
      }),
  )
}

async function ensureSchema(sql: postgres.Sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS public.article_documents (
      id text PRIMARY KEY,
      slug text NOT NULL UNIQUE,
      category_id text NOT NULL,
      title text NOT NULL,
      tab_number integer NOT NULL UNIQUE,
      document jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `

  await sql`
    CREATE INDEX IF NOT EXISTS article_documents_category_idx
    ON public.article_documents (category_id)
  `
}

async function pushArticles(sql: postgres.Sql, articles: ArticleDocument[]) {
  await ensureSchema(sql)

  await sql.begin(async (transaction) => {
    await transaction`DELETE FROM public.article_documents`

    for (const article of articles) {
      const record = buildNeonArticleRecord(article)
      await transaction`
        INSERT INTO public.article_documents (
          id,
          slug,
          category_id,
          title,
          tab_number,
          document
        )
        VALUES (
          ${record.id},
          ${record.slug},
          ${record.categoryId},
          ${record.title},
          ${record.tabNumber},
          ${transaction.json(record.document)}
        )
        ON CONFLICT (id) DO UPDATE
        SET
          slug = EXCLUDED.slug,
          category_id = EXCLUDED.category_id,
          title = EXCLUDED.title,
          tab_number = EXCLUDED.tab_number,
          document = EXCLUDED.document,
          updated_at = now()
      `
    }
  })
}

async function pullArticles(sql: postgres.Sql) {
  const rows = await sql<{
    id: string
    slug: string
    category_id: string
    title: string
    tab_number: number
    document: unknown
  }[]>`
    SELECT id, slug, category_id, title, tab_number, document
    FROM public.article_documents
    ORDER BY tab_number ASC, id ASC
  `

  return rows
    .map(parseNeonArticleRow)
    .sort((left, right) => left.tabNumber - right.tabNumber)
    .map((record) => record.document)
}

async function runSync(mode: SyncMode): Promise<SyncSummary> {
  const sql = createSqlClient()
  if (!sql) {
    if (mode === 'hydrate') {
      console.log('skip: CONTENT_DATABASE_URL not configured; using checked-in article snapshot')
      return {
        mode,
        articleCount: 0,
        skipped: true,
      }
    }

    throw new Error('CONTENT_DATABASE_URL is required for Neon content sync')
  }

  try {
    if (mode === 'push') {
      const localArticles = await readLocalArticles()
      await pushArticles(sql, localArticles)
      console.log(`pushed ${localArticles.length} canonical articles to Neon`)
      return {
        mode,
        articleCount: localArticles.length,
        skipped: false,
      }
    }

    const remoteArticles = await pullArticles(sql)
    await writeLocalArticles(remoteArticles)
    console.log(`${mode === 'hydrate' ? 'hydrated' : 'pulled'} ${remoteArticles.length} canonical articles from Neon`)
    return {
      mode,
      articleCount: remoteArticles.length,
      skipped: false,
    }
  } finally {
    await sql.end({ timeout: 5 })
  }
}

const mode = getMode(process.argv[2])
await runSync(mode)
