export const HOME_PATH = '/'
export const ARTICLE_INDEX_PATH = '/thema'
export const CATEGORY_ROUTE_PATH = '/kategorie/:slug'
export const ARTICLE_ROUTE_PATH = '/thema/:id'

export function normalizeArticleId(id: string | undefined) {
  if (!id) {
    return undefined
  }

  return id.match(/^\d{1,2}$/) ? id.padStart(2, '0') : id
}

export function buildArticlePath(id: string) {
  const normalizedId = normalizeArticleId(id)
  return normalizedId ? `/thema/${normalizedId}` : HOME_PATH
}

export function buildCategoryPath(slug: string) {
  return `/kategorie/${slug}`
}
