import {
  ARTICLE_SCHEMA_VERSION,
  articleSchema,
  type ArticleDocument,
  type ArticleSection,
  type ArticleSource,
  type SectionEntry,
} from './schema'
import { getCategoryById } from './taxonomy'
import type { AuthoringDraft, AuthoringDraftCollection } from './authoringSchema'
import { buildShortCitation, extractDoi, extractUrl } from './citations'

function inferSourceKind(citation: string): ArticleSource['kind'] {
  const normalized = citation.toLocaleLowerCase()
  if (normalized.includes('review')) {
    return 'review'
  }
  if (normalized.includes('journal') || containsDoiHost(citation)) {
    return 'empirical'
  }
  if (normalized.includes('press') || normalized.includes('publisher') || normalized.includes('freeman') || normalized.includes('hogrefe')) {
    return 'secondary'
  }
  return 'other'
}


function containsDoiHost(value: string) {
  const urls = value.match(/https?:\/\/\S+/g) ?? []

  return urls.some((candidate) => {
    try {
      const host = new URL(candidate).hostname.toLocaleLowerCase()
      return host === 'doi.org' || host.endsWith('.doi.org')
    } catch {
      return false
    }
  })
}


function compileSources(draft: AuthoringDraft): ArticleSource[] {
  return draft.sources.map((source) => ({
    id: source.id,
    kind: inferSourceKind(source.rawCitation),
    shortCitation: buildShortCitation(source.rawCitation),
    apaCitation: source.rawCitation,
    tooltip: source.excerpt ?? source.notes,
    url: source.url ?? extractUrl(source.rawCitation),
    doi: source.doi ?? extractDoi(source.rawCitation),
    verification: {
      status: 'pending-review',
      checkedAgainst: ['authoring-draft'],
    },
  }))
}

function compileGeneratedDefinitionSection(draft: AuthoringDraft): Extract<ArticleSection, { type: 'definition' }> | null {
  if (draft.glossary.length === 0) {
    return null
  }

  const entries: SectionEntry[] = draft.glossary.flatMap((item) => [
    {
      kind: 'subheading',
      text: item.term,
    },
    {
      kind: 'paragraph',
      content: {
        text: item.definition,
        annotations: [],
      },
    },
  ])

  return {
    id: `${draft.identity.articleId ?? draft.identity.slug}-generated-definition`,
    type: 'definition',
    title: 'Begriffe und Definitionen',
    entries,
  }
}

function compileVisualSections(draft: AuthoringDraft, section: Extract<AuthoringDraft['sections'][number], { type: 'visual' }>): Extract<ArticleSection, { type: 'visual' }>[] {
  const assetsById = new Map(draft.assets.map((asset) => [asset.id, asset]))
  const compiledSections: Extract<ArticleSection, { type: 'visual' }>[] = []

  section.assetIds.forEach((assetId, index) => {
    const asset = assetsById.get(assetId)
    if (!asset) {
      return
    }

    compiledSections.push({
      id: `${section.id}-${index + 1}`,
      type: 'visual',
      title: index === 0 ? section.title : undefined,
      asset: asset.asset,
      caption: asset.caption ?? section.caption,
    })
  })

  return compiledSections
}

function compileTextSection(section: Exclude<AuthoringDraft['sections'][number], { type: 'visual' }>): Exclude<ArticleSection, { type: 'visual' }> {
  return {
    id: section.id,
    type: section.type,
    title: section.title,
    entries: section.entries,
  } as unknown as Exclude<ArticleSection, { type: 'visual' }>
}

function insertGeneratedDefinitionSection(
  sections: ArticleSection[],
  generatedDefinitionSection: Extract<ArticleSection, { type: 'definition' }> | null
): ArticleSection[] {
  if (!generatedDefinitionSection) {
    return sections
  }

  const result: ArticleSection[] = []
  for (const section of sections) {
    result.push(section)
    if (section.type === 'lead') {
      result.push(generatedDefinitionSection)
    }
  }

  if (!result.some((section) => section.type === 'definition')) {
    result.unshift(generatedDefinitionSection)
  }

  return result
}

function compileSections(draft: AuthoringDraft): ArticleSection[] {
  const generatedDefinitionSection = compileGeneratedDefinitionSection(draft)

  const initialSections: ArticleSection[] = draft.sections.flatMap((section): ArticleSection | ArticleSection[] =>
    section.type === 'visual' ? compileVisualSections(draft, section as Extract<AuthoringDraft['sections'][number], { type: 'visual' }>) : compileTextSection(section as Exclude<AuthoringDraft['sections'][number], { type: 'visual' }>)
  )

  return insertGeneratedDefinitionSection(initialSections, generatedDefinitionSection)
}

function compileRelatedResources(draft: AuthoringDraft) {
  return draft.connections.map((connection) => ({
    id: connection.id,
    category: connection.category,
    title: connection.title,
    relevance: connection.description ?? connection.title,
    target: connection.target,
    ...(connection.target.kind === 'external-url' ? { url: connection.target.url } : {}),
  }))
}

export function compileAuthoringDraft(draft: AuthoringDraft): ArticleDocument {
  const articleId = draft.identity.articleId?.padStart(2, '0')
  if (!articleId?.match(/^\d{2}$/)) {
    throw new Error(`Authoring draft ${draft.identity.slug} is missing a valid two-digit article id`)
  }

  const category = getCategoryById(draft.header.categoryId)
  if (!category) {
    throw new Error(`Authoring draft ${draft.identity.slug} references unknown category ${draft.header.categoryId}`)
  }

  const leadTeaser =
    draft.header.leadTeaser ??
    draft.sections
      .filter((section) => section.type !== 'visual')
      .flatMap((section) => section.entries)
      .find((entry) => entry.kind === 'paragraph')?.content.text ??
    draft.header.title

  return articleSchema.parse({
    schemaVersion: ARTICLE_SCHEMA_VERSION,
    id: articleId,
    slug: draft.identity.slug,
    legacy: {
      sourceFormat: 'authoring-v1',
      sourcePath: draft.origin.snapshotPath ?? draft.origin.sourcePath ?? draft.identity.slug,
    },
    meta: {
      title: draft.header.title,
      subtitle: draft.header.subtitle,
      discipline: draft.header.discipline ?? category.label,
      difficulty: draft.header.difficulty ?? 'Erstsemester-Komplexitätsgrad',
      tabColor: category.color,
      tabNumber: Number.parseInt(articleId, 10),
      estimatedReadMinutes: draft.header.estimatedReadMinutes ?? 3,
      leadTeaser,
    },
    taxonomy: {
      categoryId: category.id,
      keywords: draft.header.keywords,
      audience: draft.header.audience,
    },
    crm: {
      system: 'content-hub',
      externalId: draft.identity.slug,
      recordType: 'knowledge-article',
      pipelineStage: 'published',
      cacheTags: [draft.identity.slug, category.id],
      syncEnabled: false,
      metadata: {
        taxonomyPath: [category.label],
        audience: draft.header.audience,
        keywords: draft.header.keywords,
      },
    },
    sections: compileSections(draft),
    sources: compileSources(draft),
    relatedResources: compileRelatedResources(draft),
  })
}

export function compileAuthoringDraftCollection(collection: AuthoringDraftCollection) {
  return collection.drafts
    .map(compileAuthoringDraft)
    .sort((left, right) => left.meta.tabNumber - right.meta.tabNumber)
}
