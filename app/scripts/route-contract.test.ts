import test from 'node:test'
import assert from 'node:assert/strict'
import {
  ARTICLE_INDEX_PATH,
  ARTICLE_ROUTE_PATH,
  CATEGORY_ROUTE_PATH,
  HOME_PATH,
  buildArticlePath,
  buildCategoryPath,
  normalizeArticleId,
} from '../src/routing/routes'

test('route constants define the canonical route surface', () => {
  assert.equal(HOME_PATH, '/')
  assert.equal(ARTICLE_INDEX_PATH, '/thema')
  assert.equal(CATEGORY_ROUTE_PATH, '/kategorie/:slug')
  assert.equal(ARTICLE_ROUTE_PATH, '/thema/:id')
})

test('article route builder normalizes numeric ids to two digits', () => {
  assert.equal(normalizeArticleId('1'), '01')
  assert.equal(normalizeArticleId('09'), '09')
  assert.equal(normalizeArticleId('12'), '12')
  assert.equal(buildArticlePath('1'), '/thema/01')
  assert.equal(buildArticlePath('09'), '/thema/09')
  assert.equal(buildArticlePath('12'), '/thema/12')
})

test('article route builder preserves non-numeric ids for slug-like fallback lookups', () => {
  assert.equal(normalizeArticleId('thema-03'), 'thema-03')
  assert.equal(buildArticlePath('thema-03'), '/thema/thema-03')
})

test('category route builder uses canonical category slugs', () => {
  assert.equal(buildCategoryPath('wahrnehmung-und-kognition'), '/kategorie/wahrnehmung-und-kognition')
  assert.equal(buildCategoryPath('motivation-und-emotion'), '/kategorie/motivation-und-emotion')
})
