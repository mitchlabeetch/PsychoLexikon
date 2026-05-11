import { z } from 'zod'
import { resourceTargetSchema, sectionEntrySchema, visualAssetSchema } from './schema'

export const AUTHORING_PAGE_SCHEMA_VERSION = '1.0.0'

export const authoringGlossaryItemSchema = z.object({
  id: z.string().min(1),
  term: z.string().min(1),
  label: z.string().min(1).optional(),
  aliases: z.array(z.string().min(1)).default([]),
  definition: z.string().min(1),
  sourceIds: z.array(z.string().min(1)).default([]),
})

export const authoringSourceSchema = z.object({
  id: z.string().min(1),
  rawCitation: z.string().min(1),
  excerpt: z.string().min(1).optional(),
  url: z.string().url().optional(),
  doi: z.string().min(1).optional(),
  notes: z.string().min(1).optional(),
})

export const authoringAssetSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  placement: z.enum(['hero', 'inline', 'supporting']).default('inline'),
  asset: visualAssetSchema,
  caption: z.string().min(1).optional(),
  tags: z.array(z.string().min(1)).default([]),
})

export const authoringConnectionSchema = z.object({
  id: z.string().min(1),
  category: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1).optional(),
  target: resourceTargetSchema,
})

const authoringTextSectionSchema = z.discriminatedUnion('type', [
  z.object({
    id: z.string().min(1),
    type: z.literal('lead'),
    title: z.string().min(1).optional(),
    entries: z.array(sectionEntrySchema).min(1),
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal('definition'),
    title: z.string().min(1).optional(),
    entries: z.array(sectionEntrySchema).min(1),
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal('explanation'),
    title: z.string().min(1).optional(),
    entries: z.array(sectionEntrySchema).min(1),
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal('deep_dive'),
    title: z.string().min(1).optional(),
    entries: z.array(sectionEntrySchema).min(1),
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal('example'),
    title: z.string().min(1).optional(),
    entries: z.array(sectionEntrySchema).min(1),
  }),
  z.object({
    id: z.string().min(1),
    type: z.literal('summary'),
    title: z.string().min(1).optional(),
    entries: z.array(sectionEntrySchema).min(1),
  }),
])

export const authoringVisualSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal('visual'),
  title: z.string().min(1).optional(),
  assetIds: z.array(z.string().min(1)).min(1),
  layout: z.enum(['single', 'stack', 'gallery']).default('single'),
  caption: z.string().min(1).optional(),
})

export const authoringSectionSchema = z.discriminatedUnion('type', [
  ...authoringTextSectionSchema.options,
  authoringVisualSectionSchema,
])

export const authoringHeaderSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1).optional(),
  discipline: z.string().min(1).optional(),
  difficulty: z.string().min(1).optional(),
  categoryId: z.string().min(1),
  keywords: z.array(z.string().min(1)).min(1),
  audience: z.array(z.string().min(1)).min(1).default(['erstsemester', 'selbststudium']),
  leadTeaser: z.string().min(1).optional(),
  estimatedReadMinutes: z.number().int().positive().optional(),
})

export const authoringDraftSchema = z.object({
  schemaVersion: z.literal(AUTHORING_PAGE_SCHEMA_VERSION),
  pageType: z.literal('knowledge-article-draft'),
  origin: z.object({
    kind: z.enum(['gui', 'recovered-bundle', 'legacy-yaml', 'manual-import']),
    sourcePath: z.string().min(1).optional(),
    recoveredRoute: z.string().min(1).optional(),
    snapshotPath: z.string().min(1).optional(),
  }),
  identity: z.object({
    articleId: z.string().min(1).optional(),
    slug: z.string().min(1),
  }),
  header: authoringHeaderSchema,
  glossary: z.array(authoringGlossaryItemSchema).default([]),
  sources: z.array(authoringSourceSchema).default([]),
  assets: z.array(authoringAssetSchema).default([]),
  connections: z.array(authoringConnectionSchema).default([]),
  sections: z.array(authoringSectionSchema).min(1),
  notes: z
    .object({
      importedFrom: z.string().min(1).optional(),
      sourceSnapshotPath: z.string().min(1).optional(),
      uiHint: z.string().min(1).optional(),
    })
    .optional(),
})

export const authoringDraftCollectionSchema = z.object({
  schemaVersion: z.literal(AUTHORING_PAGE_SCHEMA_VERSION),
  corpusId: z.string().min(1),
  drafts: z.array(authoringDraftSchema).min(1),
})

export type AuthoringDraft = z.infer<typeof authoringDraftSchema>
export type AuthoringDraftCollection = z.infer<typeof authoringDraftCollectionSchema>
