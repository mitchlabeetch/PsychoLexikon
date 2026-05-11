import test from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { articleSchema, type ArticleDocument } from '../src/content/schema'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const articlesDir = path.resolve(__dirname, '..', 'src', 'content', 'articles')

async function loadCanonicalArticles() {
  const fileNames = (await readdir(articlesDir)).filter((fileName) => fileName.endsWith('.json')).sort()
  return Promise.all(
    fileNames.map(async (fileName) => {
      const rawContent = await readFile(path.join(articlesDir, fileName), 'utf8')
      return articleSchema.parse(JSON.parse(rawContent)) as ArticleDocument
    }),
  )
}

async function withPrimedArticles<T>(callback: (articles: ArticleDocument[]) => Promise<T>) {
  const articles = await loadCanonicalArticles()
  const { primeArticleCacheForTests, resetArticleCacheForTests } = await import('../src/content/api')

  primeArticleCacheForTests(articles)

  try {
    return await callback(articles)
  } finally {
    resetArticleCacheForTests()
  }
}

async function renderAppAt(route: string) {
  return withPrimedArticles(async () => {
    const { default: App } = await import('../src/App')

    return renderToStaticMarkup(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    )
  })
}

test('home route renders the landing page and canonical article cards', async () => {
  const html = await renderAppAt('/')

  assert.match(html, /PsychoLexicon/)
  assert.match(html, /Zwölf Kernthemen/)
  assert.match(html, /href="\/"[^>]*>PsychoLexicon<\/a>/)
  assert.match(html, /Aktionspotential und synaptische Transmission/)
})

test('category route renders the canonical category landing page', async () => {
  const html = await renderAppAt('/kategorie/wahrnehmung-und-kognition')

  assert.match(html, /Wahrnehmung &amp; Kognition/)
  assert.match(html, /2 Artikel in dieser Kategorie/)
  assert.match(html, /Gestaltgesetze der Wahrnehmung und Prägnanzprinzip/)
  assert.match(html, /Das Mehrkomponentenmodell des Arbeitsgedächtnisses/)
  assert.match(html, /Springe zu Wahrnehmung &amp; Kognition/)
})

test('article route renders title, category context, visuals, and sources', async () => {
  const html = await renderAppAt('/thema/01')

  assert.match(html, /Aktionspotential und synaptische Transmission/)
  assert.match(html, /Biologische Psychologie/)
  assert.match(html, /Quellen/)
  assert.match(html, /Das Diagramm zeigt, wie die Membranspannung beim Überschreiten der Schwelle explosionsartig ansteigt/)
  assert.doesNotMatch(html, /Illustrations-Asset .* fehlt/)
})

test('unknown routes render the canonical not-found page', async () => {
  const html = await renderAppAt('/kategorie/nicht-vorhanden')

  assert.match(html, /Diese Kategorie wurde nicht gefunden/)
})

test('article renderer outputs lead content, source cards, and backlinks for a canonical article', async () => {
  await withPrimedArticles(async (articles) => {
    const article = articles.find((candidate) => candidate.id === '01')
    assert.ok(article, 'expected article 01 to exist')

    const { default: ArticleRenderer } = await import('../src/components/content/ArticleRenderer')
    const html = renderToStaticMarkup(
      <MemoryRouter>
        <ArticleRenderer article={article} />
      </MemoryRouter>,
    )

    assert.match(html, /Schema 2\.0\.0/)
    assert.match(html, /Aktionspotential/)
    assert.match(html, /Bear et al\. \(2016\)/)
    assert.match(html, /Zurueck zur Kategorie/)
    assert.match(html, /Zurueck zur Uebersicht/)
  })
})
