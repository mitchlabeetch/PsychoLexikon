import { z } from 'zod'

export const ARTICLE_SCHEMA_VERSION = '2.0.0'

const hexColorSchema = z.string().regex(/^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/)

export const annotationStyleSchema = z.object({
  backgroundColor: hexColorSchema.optional(),
  textColor: hexColorSchema.optional(),
  borderColor: hexColorSchema.optional(),
})

const annotationBaseSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
})

export const definitionAnnotationSchema = annotationBaseSchema.extend({
  kind: z.literal('definition'),
  tooltip: z.string().min(1),
  tone: z.literal('blue').default('blue'),
})

export const citationAnnotationSchema = annotationBaseSchema.extend({
  kind: z.literal('citation'),
  tooltip: z.string().min(1),
  tone: z.literal('red').default('red'),
  sourceIds: z.array(z.string().min(1)).min(1),
})

export const customHighlightAnnotationSchema = annotationBaseSchema.extend({
  kind: z.literal('highlight'),
  tooltip: z.string().min(1).optional(),
  tone: z.literal('custom').default('custom'),
  style: annotationStyleSchema,
})

export const annotationSchema = z.discriminatedUnion('kind', [
  definitionAnnotationSchema,
  citationAnnotationSchema,
  customHighlightAnnotationSchema,
])

export const richTextSchema = z.object({
  text: z.string(),
  annotations: z.array(annotationSchema).default([]),
})

export const sectionEntrySchema = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('subheading'),
    text: z.string().min(1),
  }),
  z.object({
    kind: z.literal('paragraph'),
    content: richTextSchema,
  }),
  z.object({
    kind: z.literal('bullet_list'),
    items: z.array(richTextSchema).min(1),
  }),
])

export const sourceSchema = z.object({
  id: z.string().min(1),
  kind: z.enum(['primary', 'secondary', 'review', 'empirical', 'manual', 'standard', 'other']),
  shortCitation: z.string().min(1),
  apaCitation: z.string().min(1),
  tooltip: z.string().min(1).optional(),
  url: z.string().url().optional(),
  doi: z.string().min(1).optional(),
  verification: z.object({
    status: z.enum(['verified', 'legacy-imported', 'pending-review']),
    checkedAgainst: z.array(z.string()).default([]),
  }),
})

export const resourceSchema = z.object({
  id: z.string().min(1),
  category: z.string().min(1),
  title: z.string().min(1),
  relevance: z.string().min(1),
  url: z.string().url(),
})

export const articleTaxonomySchema = z.object({
  categoryId: z.string().min(1),
  keywords: z.array(z.string().min(1)).min(1),
  audience: z.array(z.string().min(1)).min(1),
})

export const crmIntegrationSchema = z.object({
  system: z.literal('content-hub'),
  externalId: z.string().min(1),
  recordType: z.literal('knowledge-article'),
  pipelineStage: z.enum(['draft', 'reviewed', 'published']).default('published'),
  cacheTags: z.array(z.string().min(1)).min(1),
  syncEnabled: z.boolean().default(false),
  metadata: z.object({
    taxonomyPath: z.array(z.string().min(1)).min(1),
    audience: z.array(z.string().min(1)).min(1),
    keywords: z.array(z.string().min(1)).min(1),
  }),
})

export const articleSectionSchema = z.discriminatedUnion('type', [
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
    type: z.literal('visual'),
    title: z.string().min(1).optional(),
    asset: z.object({
      kind: z.literal('svg-component'),
      assetId: z.string().min(1),
      description: z.string().min(1).optional(),
      alt: z.string().min(1).optional(),
    }),
    caption: z.string().min(1).optional(),
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

export const articleSchema = z.object({
  schemaVersion: z.literal(ARTICLE_SCHEMA_VERSION),
  id: z.string().regex(/^\d{2}$/),
  slug: z.string().regex(/^thema-\d{2}$/),
  legacy: z.object({
    sourceFormat: z.enum(['yaml-v1', 'ts-v1']),
    sourcePath: z.string().min(1),
  }),
  meta: z.object({
    title: z.string().min(1),
    discipline: z.string().min(1),
    difficulty: z.string().min(1),
    tabColor: hexColorSchema,
    tabNumber: z.number().int().positive(),
    estimatedReadMinutes: z.number().int().positive(),
    leadTeaser: z.string().min(1),
  }),
  taxonomy: articleTaxonomySchema,
  crm: crmIntegrationSchema,
  sections: z.array(articleSectionSchema).min(1),
  sources: z.array(sourceSchema).min(1),
  relatedResources: z.array(resourceSchema).default([]),
})

export type Annotation = z.infer<typeof annotationSchema>
export type RichText = z.infer<typeof richTextSchema>
export type SectionEntry = z.infer<typeof sectionEntrySchema>
export type ArticleSource = z.infer<typeof sourceSchema>
export type ArticleSection = z.infer<typeof articleSectionSchema>
export type ArticleDocument = z.infer<typeof articleSchema>
