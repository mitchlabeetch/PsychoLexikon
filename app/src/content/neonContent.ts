import { z } from 'zod'
import { articleSchema, type ArticleDocument } from './schema'

export const neonArticleRowSchema = z.object({
  id: z.string().regex(/^\d{2}$/),
  slug: z.string().regex(/^thema-\d{2}$/),
  category_id: z.string().min(1),
  title: z.string().min(1),
  tab_number: z.number().int().positive(),
  document: z.unknown(),
})

export type NeonArticleRow = z.infer<typeof neonArticleRowSchema>

export interface NeonArticleRecord {
  id: string
  slug: string
  categoryId: string
  title: string
  tabNumber: number
  document: ArticleDocument
}

export function buildNeonArticleRecord(article: ArticleDocument): NeonArticleRecord {
  return {
    id: article.id,
    slug: article.slug,
    categoryId: article.taxonomy.categoryId,
    title: article.meta.title,
    tabNumber: article.meta.tabNumber,
    document: article,
  }
}

export function parseNeonArticleRow(row: unknown): NeonArticleRecord {
  const parsedRow = neonArticleRowSchema.parse(row)
  const document = articleSchema.parse(parsedRow.document)

  if (parsedRow.id !== document.id) {
    throw new Error(`Neon row ${parsedRow.slug} has mismatched id metadata`)
  }

  if (parsedRow.slug !== document.slug) {
    throw new Error(`Neon row ${parsedRow.id} has mismatched slug metadata`)
  }

  if (parsedRow.category_id !== document.taxonomy.categoryId) {
    throw new Error(`Neon row ${parsedRow.slug} has mismatched category metadata`)
  }

  if (parsedRow.title !== document.meta.title) {
    throw new Error(`Neon row ${parsedRow.slug} has mismatched title metadata`)
  }

  if (parsedRow.tab_number !== document.meta.tabNumber) {
    throw new Error(`Neon row ${parsedRow.slug} has mismatched tab number metadata`)
  }

  return {
    id: parsedRow.id,
    slug: parsedRow.slug,
    categoryId: parsedRow.category_id,
    title: parsedRow.title,
    tabNumber: parsedRow.tab_number,
    document,
  }
}
