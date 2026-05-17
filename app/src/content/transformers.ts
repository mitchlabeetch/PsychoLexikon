import { buildShortCitation, extractUrl, extractDoi } from "./utils"
import { articleSchema, ARTICLE_SCHEMA_VERSION, type Annotation, type ArticleDocument, type ArticleSource, type RichText, type SectionEntry } from './schema'
import { articleCategoryMap, getTaxonomyPath } from './taxonomy'

export interface LegacySubjectMeta {
  title: string
  discipline: string
  difficulty: string
  tab_color: string
  tab_number: number
}

export interface LegacyContentBlock {
  type: string
  text?: string
  highlight_blue?: string[]
  highlight_red?: string[]
  tooltips?: Record<string, string>
  sources_inline?: Record<string, string>
  svg_description?: string
  caption?: string
}

export interface LegacySource {
  apa_citation: string
  type: string
  tooltip_text?: string
  wikipedia_url?: string
}

export interface LegacyResource {
  category: string
  title: string
  relevance: string
  url: string
}

export interface LegacySubjectDocument {
  id?: string
  subject_meta: LegacySubjectMeta
  content_blocks: LegacyContentBlock[]
  sources: LegacySource[]
  further_exploration?: LegacyResource[]
}

const legacySourceKindMap: Record<string, ArticleSource['kind']> = {
  primary: 'primary',
  secondary: 'secondary',
  review: 'review',
  empirical: 'empirical',
  manual: 'manual',
  standard: 'standard',
  standards: 'standard',
}

function normalizeWhitespace(value: string) {
  return value.replace(/\r\n/g, '\n').trim()
}

function stripMarkdownControl(value: string) {
  return value.replace(/\*\*/g, '').trim()
}

function normalizeComparableText(value: string) {
  return stripMarkdownControl(value).replace(/\s+/g, ' ').trim().toLocaleLowerCase()
}




function buildAnnotations(block: LegacyContentBlock, sourceIdLookup: Map<string, string>, blockId: string): Annotation[] {
  const annotations: Annotation[] = []

  for (const term of block.highlight_blue ?? []) {
    const tooltip = block.tooltips?.[term]
    if (!tooltip) {
      continue
    }

    annotations.push({
      id: `${blockId}-def-${annotations.length + 1}`,
      kind: 'definition',
      text: term,
      tooltip,
      tone: 'blue',
    })
  }

  for (const term of block.highlight_red ?? []) {
    const sourceCitation = block.sources_inline?.[term]
    if (!sourceCitation) {
      continue
    }

    const sourceId = sourceIdLookup.get(sourceCitation)
    if (!sourceId) {
      continue
    }

    annotations.push({
      id: `${blockId}-src-${annotations.length + 1}`,
      kind: 'citation',
      text: term,
      tooltip: buildShortCitation(sourceCitation),
      tone: 'red',
      sourceIds: [sourceId],
    })
  }

  return annotations
}

function createRichText(text: string, annotations: Annotation[]): RichText {
  const normalizedText = normalizeComparableText(text)
  return {
    text: normalizeWhitespace(text),
    annotations: annotations.filter((annotation) => normalizedText.includes(normalizeComparableText(annotation.text))),
  }
}

function parseStructuredEntries(text: string, annotations: Annotation[]): SectionEntry[] {
  const sections = normalizeWhitespace(text)
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean)

  return sections.map<SectionEntry>((part) => {
    const markdownHeading = part.match(/^\*\*(.+?)\*\*$/)
    if (markdownHeading) {
      return {
        kind: 'subheading',
        text: stripMarkdownControl(markdownHeading[1]),
      }
    }

    if (part.startsWith('### ')) {
      return {
        kind: 'subheading',
        text: part.replace(/^###\s+/, '').trim(),
      }
    }

    return {
      kind: 'paragraph',
      content: createRichText(part, annotations),
    }
  })
}

function parseSummaryEntries(text: string, annotations: Annotation[]): SectionEntry[] {
  const items = normalizeWhitespace(text)
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('•') || line.startsWith('-'))
    .map((line) => line.replace(/^[•-]\s*/, ''))

  return [
    {
      kind: 'bullet_list',
      items: items.map((item) => createRichText(item, annotations)),
    },
  ]
}

function estimateReadMinutes(blocks: LegacyContentBlock[]) {
  const totalWords = blocks
    .map((block) => block.text ?? block.caption ?? '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length

  return Math.max(3, Math.ceil(totalWords / 180))
}

function buildArticleSources(legacySources: LegacySource[], articleId: string) {
  const sourceIdLookup = new Map<string, string>()
  const sources: ArticleSource[] = legacySources.map((source, index) => {
    const id = `${articleId}-source-${index + 1}`
    sourceIdLookup.set(source.apa_citation, id)

    return {
      id,
      kind: legacySourceKindMap[source.type] ?? 'other',
      shortCitation: buildShortCitation(source.apa_citation),
      apaCitation: source.apa_citation,
      tooltip: source.tooltip_text,
      url: source.wikipedia_url ?? extractUrl(source.apa_citation),
      doi: extractDoi(source.apa_citation),
      verification: {
        status: 'legacy-imported',
        checkedAgainst: ['legacy-source-list'],
      },
    }
  })

  return { sourceIdLookup, sources }
}

function buildLeadTeaser(blocks: LegacyContentBlock[]) {
  const leadText = blocks.find((block) => block.type === 'lead')?.text ?? ''
  return stripMarkdownControl(leadText)
}

export function inferArticleId(filePath: string) {
  const match = filePath.match(/thema-(\d{2})\.ya?ml$/i)
  if (!match) {
    throw new Error(`Could not infer article id from path: ${filePath}`)
  }

  return match[1]
}

export function transformLegacyArticle(legacyArticle: LegacySubjectDocument, sourcePath: string): ArticleDocument {
  const articleId = legacyArticle.id ?? inferArticleId(sourcePath)
  const slug = `thema-${articleId}`
  const categoryConfig = articleCategoryMap[articleId]

  if (!categoryConfig) {
    throw new Error(`No taxonomy mapping defined for article ${articleId}`)
  }

  const { sourceIdLookup, sources } = buildArticleSources(legacyArticle.sources, articleId)
  let visualIndex = 0

  const sections = legacyArticle.content_blocks.map((block, index) => {
    const sectionId = `${articleId}-${block.type}-${index + 1}`
    const annotations = buildAnnotations(block, sourceIdLookup, sectionId)

    switch (block.type) {
      case 'lead':
      case 'definition':
      case 'explanation':
      case 'deep_dive':
      case 'example':
        return {
          id: sectionId,
          type: block.type,
          entries: parseStructuredEntries(block.text ?? '', annotations),
        } as const

      case 'visual':
        visualIndex += 1
        return {
          id: sectionId,
          type: 'visual',
          asset: {
            kind: 'svg-component',
            assetId: `${articleId}-visual-${visualIndex}`,
            description: block.svg_description,
            alt: block.caption,
          },
          caption: block.caption,
        } as const

      case 'summary':
        return {
          id: sectionId,
          type: 'summary',
          entries: parseSummaryEntries(block.text ?? '', annotations),
        } as const

      default:
        throw new Error(`Unsupported legacy block type "${block.type}" in ${sourcePath}`)
    }
  })

  const taxonomyPath = getTaxonomyPath(categoryConfig.categoryId).map((node) => node.label)

  return articleSchema.parse({
    schemaVersion: ARTICLE_SCHEMA_VERSION,
    id: articleId,
    slug,
    legacy: {
      sourceFormat: 'yaml-v1',
      sourcePath,
    },
    meta: {
      title: legacyArticle.subject_meta.title,
      discipline: legacyArticle.subject_meta.discipline,
      difficulty: legacyArticle.subject_meta.difficulty,
      tabColor: getTaxonomyPath(categoryConfig.categoryId)[0]?.color ?? legacyArticle.subject_meta.tab_color,
      tabNumber: legacyArticle.subject_meta.tab_number,
      estimatedReadMinutes: estimateReadMinutes(legacyArticle.content_blocks),
      leadTeaser: buildLeadTeaser(legacyArticle.content_blocks),
    },
    taxonomy: {
      categoryId: categoryConfig.categoryId,
      keywords: categoryConfig.keywords,
      audience: ['erstsemester', 'adhs-freundlich', 'selbststudium'],
    },
    crm: {
      system: 'content-hub',
      externalId: slug,
      recordType: 'knowledge-article',
      pipelineStage: 'published',
      cacheTags: [slug, categoryConfig.categoryId],
      syncEnabled: false,
      metadata: {
        taxonomyPath,
        audience: ['erstsemester', 'adhs-freundlich', 'selbststudium'],
        keywords: categoryConfig.keywords,
      },
    },
    sections,
    sources,
    relatedResources: (legacyArticle.further_exploration ?? []).map((item, index) => ({
      id: `${articleId}-resource-${index + 1}`,
      category: item.category,
      title: item.title,
      relevance: item.relevance,
      url: item.url,
    })),
  })
}
