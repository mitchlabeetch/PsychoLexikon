import { articleSchema, type ArticleDocument } from './schema'
import { getCategoryById, getCategoryBySlug } from './taxonomy'

function loadRawArticleModules() {
  try {
    return import.meta.glob('./articles/*.json', {
      eager: true,
      import: 'default',
    }) as Record<string, unknown>
  } catch {
    return {}
  }
}

const rawArticleModules = loadRawArticleModules()

let cachedArticles: ArticleDocument[] | null = null
let cachedArticleMap: Map<string, ArticleDocument> | null = null

function buildArticleMap(articles: ArticleDocument[]) {
  const articleMap = new Map<string, ArticleDocument>()

  for (const article of articles) {
    articleMap.set(article.id, article)
    articleMap.set(article.slug, article)
  }

  return articleMap
}

function loadArticles() {
  if (cachedArticles && cachedArticleMap) {
    return { articles: cachedArticles, articleMap: cachedArticleMap }
  }

  const articles = Object.values(rawArticleModules)
    .map((moduleValue) => articleSchema.parse(moduleValue))
    .sort((left, right) => left.meta.tabNumber - right.meta.tabNumber)

  const articleMap = buildArticleMap(articles)

  cachedArticles = articles
  cachedArticleMap = articleMap

  return { articles, articleMap }
}

export function primeArticleCacheForTests(articles: ArticleDocument[]) {
  const sortedArticles = [...articles].sort((left, right) => left.meta.tabNumber - right.meta.tabNumber)
  cachedArticles = sortedArticles
  cachedArticleMap = buildArticleMap(sortedArticles)
}

export function resetArticleCacheForTests() {
  cachedArticles = null
  cachedArticleMap = null
}

export function listArticles() {
  return loadArticles().articles
}

export function getArticleCategory(article: ArticleDocument) {
  return getCategoryById(article.taxonomy.categoryId)
}

export function getArticleAccentColor(article: ArticleDocument) {
  return getArticleCategory(article)?.color ?? article.meta.tabColor
}

export function listArticlesByCategory(categorySlugOrId: string) {
  const category = getCategoryBySlug(categorySlugOrId) ?? getCategoryById(categorySlugOrId)
  if (!category) {
    return []
  }

  return loadArticles().articles.filter((article) => getArticleCategory(article)?.id === category.id)
}

export function getArticleById(id: string) {
  const normalizedId = id.match(/^\d{1,2}$/) ? id.padStart(2, '0') : id
  return loadArticles().articleMap.get(normalizedId)
}

export function getArticleBySlug(slug: string) {
  return loadArticles().articleMap.get(slug)
}

export interface CrmSyncPayload {
  id: string
  slug: string
  title: string
  discipline: string
  taxonomy: string[]
  crm: ArticleDocument['crm']
  sourceCount: number
}

export function buildCrmSyncPayload(article: ArticleDocument): CrmSyncPayload {
  const category = getArticleCategory(article)

  return {
    id: article.id,
    slug: article.slug,
    title: article.meta.title,
    discipline: article.meta.discipline,
    taxonomy: category ? [category.label] : article.crm.metadata.taxonomyPath,
    crm: article.crm,
    sourceCount: article.sources.length,
  }
}

export async function pushArticleToCrm(article: ArticleDocument) {
  const endpoint = import.meta.env.VITE_CONTENT_CRM_ENDPOINT
  if (!endpoint || !article.crm.syncEnabled) {
    return {
      status: 'skipped' as const,
      reason: 'CRM endpoint not configured or sync disabled for static deployment.',
    }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(buildCrmSyncPayload(article)),
  })

  if (!response.ok) {
    throw new Error(`CRM sync failed with status ${response.status}`)
  }

  return {
    status: 'synced' as const,
  }
}
