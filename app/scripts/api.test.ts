import test from 'node:test'
import assert from 'node:assert/strict'
import { getArticleBySlug, primeArticleCacheForTests, resetArticleCacheForTests, getArticleById } from '../src/content/api'
import type { ArticleDocument } from '../src/content/schema'

test('api - getArticleBySlug', async (t) => {
  const mockArticles = [
    { id: '01', slug: 'thema-01', meta: { tabNumber: 1 } },
    { id: '02', slug: 'thema-02', meta: { tabNumber: 2 } }
  ] as ArticleDocument[]

  await t.test('retrieves an article by its exact slug', () => {
    primeArticleCacheForTests(mockArticles)

    const article = getArticleBySlug('thema-01')
    assert.equal(article?.id, '01')
    assert.equal(article?.slug, 'thema-01')

    resetArticleCacheForTests()
  })

  await t.test('returns undefined for non-existent slugs', () => {
    primeArticleCacheForTests(mockArticles)

    const notFound = getArticleBySlug('thema-03')
    assert.equal(notFound, undefined)

    resetArticleCacheForTests()
  })
})

test('api - getArticleById', async (t) => {
  const mockArticles = [
    { id: '01', slug: 'thema-01', meta: { tabNumber: 1 } },
    { id: '12', slug: 'thema-12', meta: { tabNumber: 12 } }
  ] as ArticleDocument[]

  await t.test('retrieves an article by exact string id', () => {
    primeArticleCacheForTests(mockArticles)

    const article = getArticleById('12')
    assert.equal(article?.id, '12')

    resetArticleCacheForTests()
  })

  await t.test('normalizes single digit ids with leading zero', () => {
    primeArticleCacheForTests(mockArticles)

    const article = getArticleById('1')
    assert.equal(article?.id, '01')

    resetArticleCacheForTests()
  })
})
