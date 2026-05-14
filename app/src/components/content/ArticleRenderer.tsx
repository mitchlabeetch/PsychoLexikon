import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { articleIllustrationRegistry } from '@/components/svgs/articleIllustrations'
import { getArticleAccentColor, getArticleCategory } from '@/content/api'
import { getCategoryById } from '@/content/taxonomy'
import { buildCategoryPath, HOME_PATH } from '@/routing/routes'
import type { Annotation, ArticleDocument, ArticleSection, RichText, SectionEntry } from '@/content/schema'

interface ArticleRendererProps {
  article: ArticleDocument
}

interface TextChunk {
  kind: 'text' | 'strong'
  text: string
}

function splitBoldMarkdown(text: string): TextChunk[] {
  const chunks: TextChunk[] = []
  const regex = /\*\*(.+?)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      chunks.push({ kind: 'text', text: text.slice(lastIndex, match.index) })
    }

    chunks.push({ kind: 'strong', text: match[1] })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    chunks.push({ kind: 'text', text: text.slice(lastIndex) })
  }

  return chunks.length > 0 ? chunks : [{ kind: 'text', text }]
}

function splitByAnnotations(text: string, annotations: Annotation[]) {
  const sortedAnnotations = [...annotations].sort((left, right) => right.text.length - left.text.length)
  let segments: Array<{ kind: 'text'; text: string } | { kind: 'annotation'; annotation: Annotation }> = [
    { kind: 'text', text },
  ]

  for (const annotation of sortedAnnotations) {
    const nextSegments: typeof segments = []

    for (const segment of segments) {
      if (segment.kind === 'annotation') {
        nextSegments.push(segment)
        continue
      }

      let cursor = 0
      let matchIndex = segment.text.indexOf(annotation.text)

      if (matchIndex === -1) {
        nextSegments.push(segment)
        continue
      }

      while (matchIndex !== -1) {
        if (matchIndex > cursor) {
          nextSegments.push({
            kind: 'text',
            text: segment.text.slice(cursor, matchIndex),
          })
        }

        nextSegments.push({
          kind: 'annotation',
          annotation,
        })

        cursor = matchIndex + annotation.text.length
        matchIndex = segment.text.indexOf(annotation.text, cursor)
      }

      if (cursor < segment.text.length) {
        nextSegments.push({
          kind: 'text',
          text: segment.text.slice(cursor),
        })
      }
    }

    segments = nextSegments
  }

  return segments
}

function getAnnotationMarkStyle(annotation: Annotation) {
  if (annotation.kind === 'definition') {
    return {
      color: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.08)',
      borderBottom: '2px dotted #2563eb',
    }
  }

  if (annotation.kind === 'citation') {
    return {
      color: '#dc2626',
      backgroundColor: 'rgba(220, 38, 38, 0.06)',
      borderBottom: '2px dotted #dc2626',
    }
  }

  return {
    color: annotation.style.textColor ?? '#7c2d12',
    backgroundColor: annotation.style.backgroundColor ?? 'rgba(245, 158, 11, 0.14)',
    borderBottom: `2px dotted ${annotation.style.borderColor ?? '#f59e0b'}`,
  }
}

function renderAnnotation(annotation: Annotation, content: ReactNode, key: string) {
  const tooltipVariant = annotation.kind === 'citation' ? 'red' : 'blue'

  return (
    <Tooltip key={key}>
      <TooltipTrigger asChild>
        <mark className="rounded px-1 bg-transparent" style={getAnnotationMarkStyle(annotation)}>
          {content}
        </mark>
      </TooltipTrigger>
      <TooltipContent className={tooltipVariant === 'red' ? 'bg-red-600 text-white' : 'bg-[#1a1a1a] text-white'}>
        {annotation.tooltip ?? annotation.text}
      </TooltipContent>
    </Tooltip>
  )
}

function renderRichText(richText: RichText, keyPrefix: string): ReactNode {
  const chunks = splitBoldMarkdown(richText.text)
  const nodes: ReactNode[] = []
  let keyIndex = 0

  for (const chunk of chunks) {
    const segments = splitByAnnotations(chunk.text, richText.annotations)

    for (const segment of segments) {
      const key = `${keyPrefix}-${keyIndex++}`
      if (segment.kind === 'text') {
        nodes.push(
          chunk.kind === 'strong' ? (
            <strong key={key} className="font-semibold">
              {segment.text}
            </strong>
          ) : (
            <span key={key}>{segment.text}</span>
          ),
        )
        continue
      }

      const label = chunk.kind === 'strong' ? <strong className="font-semibold">{segment.annotation.text}</strong> : segment.annotation.text
      nodes.push(renderAnnotation(segment.annotation, label, key))
    }
  }

  return <>{nodes}</>
}

function renderEntry(entry: SectionEntry, section: ArticleSection, tabColor: string, key: string) {
  switch (entry.kind) {
    case 'subheading':
      return (
        <h4 key={key} className="font-body font-semibold text-[0.95rem] sm:text-[1rem] text-text-primary mt-6 mb-2 text-wrap">
          {entry.text}
        </h4>
      )

    case 'paragraph':
      return (
        <p
          key={key}
          className={`text-[0.95rem] sm:text-[1rem] leading-[1.7] text-wrap ${section.type === 'example' ? 'italic' : ''}`}
        >
          {renderRichText(entry.content, key)}
        </p>
      )

    case 'bullet_list':
      return (
        <ul key={key} className="space-y-3">
          {entry.items.map((item, index) => (
            <li key={`${key}-${index}`} className="flex items-start gap-3 text-[0.95rem] sm:text-[1rem] leading-[1.7] text-wrap">
              <span className="inline-block h-2 w-2 shrink-0 rounded-full mt-2" style={{ backgroundColor: tabColor }} />
              <span>{renderRichText(item, `${key}-${index}`)}</span>
            </li>
          ))}
        </ul>
      )
  }
}

function renderTextSection(section: Exclude<ArticleSection, { type: 'visual' }>, tabColor: string) {
  const titleMap: Record<Exclude<ArticleSection['type'], 'visual'>, string | undefined> = {
    lead: undefined,
    definition: 'Definition',
    explanation: undefined,
    deep_dive: 'Vertiefung',
    example: 'Alltagsbeispiel',
    summary: 'Zusammenfassung',
  }
  const title = section.title ?? titleMap[section.type]
  const isLead = section.type === 'lead'
  const isDeepDive = section.type === 'deep_dive'
  const isExample = section.type === 'example'

  return (
    <section
      key={section.id}
      className={[
        isLead ? 'p-4 pr-5 rounded-r mb-8 italic' : 'mb-8',
        isDeepDive ? 'rounded-lg p-6' : '',
        isExample ? 'pl-4' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...(isLead
          ? {
              backgroundColor: `${tabColor}14`,
              borderLeft: `3px solid ${tabColor}`,
            }
          : {}),
        ...(isDeepDive ? { backgroundColor: '#f0ece4' } : {}),
        ...(isExample ? { borderLeft: '3px solid #ccc' } : {}),
      }}
    >
      {title ? (
        <h3 className="font-display font-bold text-[1.05rem] sm:text-[1.25rem] text-text-primary mb-3 text-wrap">
          {title}
        </h3>
      ) : null}
      <div className="space-y-4">
        {section.entries.map((entry, index) => renderEntry(entry, section, tabColor, `${section.id}-${index}`))}
      </div>
    </section>
  )
}

function renderVisualSection(section: Extract<ArticleSection, { type: 'visual' }>) {
  if (section.asset.kind === 'image-file') {
    return (
      <figure key={section.id} className="my-8 text-center">
        <img
          src={section.asset.src}
          alt={section.asset.alt}
          width={section.asset.width}
          height={section.asset.height}
          className="mx-auto h-auto max-w-full rounded-lg border border-[#e8e2d6] bg-white shadow-sm"
        />
        {section.caption ? (
          <figcaption className="font-body text-[0.875rem] italic text-text-secondary mt-3">
            {section.caption}
          </figcaption>
        ) : null}
        {section.asset.credit ? <p className="font-body text-[0.75rem] text-text-muted mt-2">Bildnachweis: {section.asset.credit}</p> : null}
      </figure>
    )
  }

  const Illustration = articleIllustrationRegistry[section.asset.assetId]
  if (!Illustration) {
    return (
      <section key={section.id} className="my-8 rounded-lg border border-dashed border-[#d6d2ca] p-4 text-sm text-text-secondary">
        Illustrations-Asset `{section.asset.assetId}` fehlt.
      </section>
    )
  }

  return (
    <figure key={section.id} className="my-8 text-center">
      <Illustration aria-label={section.asset.alt ?? section.caption ?? section.asset.description} />
      {section.caption ? (
        <figcaption className="font-body text-[0.875rem] italic text-text-secondary mt-3">
          {section.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function renderResourceLink(resource: ArticleDocument['relatedResources'][number]) {
  if (resource.target?.kind === 'internal-article') {
    return (
      <Link
        to={`/thema/${resource.target.articleId}`}
        className="inline-flex items-center gap-1 font-body text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline"
      >
        Artikel oeffnen
      </Link>
    )
  }

  if (resource.target?.kind === 'internal-category') {
    const category = getCategoryById(resource.target.categoryId)
    const to = category ? buildCategoryPath(category.slug) : HOME_PATH

    return (
      <Link to={to} className="inline-flex items-center gap-1 font-body text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline">
        Kategorie oeffnen
      </Link>
    )
  }

  if (resource.target?.kind === 'internal-route') {
    return (
      <Link to={resource.target.path} className="inline-flex items-center gap-1 font-body text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline">
        Weiterfuehren
      </Link>
    )
  }

  const href = resource.target?.kind === 'external-url' ? resource.target.url : resource.url
  if (!href) {
    return null
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-body text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline"
    >
      {href} <ExternalLink size={12} />
    </a>
  )
}

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  const primaryCategory = getArticleCategory(article)
  const accentColor = getArticleAccentColor(article)
  const categoryLabel = primaryCategory?.label ?? article.meta.discipline
  const categoryHref = primaryCategory ? buildCategoryPath(primaryCategory.slug) : HOME_PATH

  return (
    <article className="font-body text-text-primary">
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 sm:gap-2 font-body text-[0.75rem] sm:text-[0.875rem] text-text-muted flex-wrap text-wrap">
          <li>
            <Link to={HOME_PATH} className="hover:underline">
              PsychoLexicon
            </Link>
          </li>
          <li>/</li>
          <li className="truncate">
            <Link to={categoryHref} className="hover:underline">
              {categoryLabel}
            </Link>
          </li>
          <li>/</li>
          <li className="truncate max-w-[150px]">{article.meta.title}</li>
        </ol>
      </nav>

      <header className="mb-8">
        <h1 className="font-display font-bold text-[1.5rem] sm:text-[2rem] leading-tight tracking-[-0.02em] text-text-primary mb-3 text-wrap">
          {article.meta.title}
        </h1>
        {article.meta.subtitle ? (
          <p className="font-body text-[0.95rem] sm:text-[1.05rem] leading-[1.6] text-text-secondary mb-4 text-wrap">{article.meta.subtitle}</p>
        ) : null}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-block font-body font-medium text-[0.65rem] sm:text-[0.75rem] uppercase tracking-wide px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
            style={{ backgroundColor: `${accentColor}33`, color: accentColor }}
          >
            {categoryLabel}
          </span>
          <span className="text-[0.75rem] text-text-secondary">{article.meta.estimatedReadMinutes} Min. Lesezeit</span>
          <span className="text-[0.75rem] text-text-secondary">Schema {article.schemaVersion}</span>
        </div>
      </header>

      {article.sections.map((section) => (section.type === 'visual' ? renderVisualSection(section) : renderTextSection(section, accentColor)))}

      <section className="mt-12 pt-8" style={{ borderTop: '1px solid #ccc' }}>
        <h2 className="font-display font-bold text-[1.25rem] sm:text-[1.5rem] text-text-primary mb-6 text-wrap">Quellen</h2>
        <div className="space-y-4">
          {article.sources.map((source) => (
            <div key={source.id} className="rounded-lg border border-[#eee] bg-[#f8f6f1] p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-block font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded bg-[#eee] text-text-secondary">
                  {source.kind}
                </span>
                <span className="inline-block font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded bg-[#edf2ff] text-[#334155]">
                  {source.shortCitation}
                </span>
                <span className="inline-block font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded bg-[#ecfdf3] text-[#166534]">
                  {source.verification.status}
                </span>
              </div>
              <p className="font-body text-[0.8rem] sm:text-[0.875rem] text-text-primary leading-relaxed mb-2 text-wrap">{source.apaCitation}</p>
              {source.tooltip ? <p className="font-body text-[0.8rem] sm:text-[0.875rem] text-text-secondary leading-relaxed">{source.tooltip}</p> : null}
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-body text-[0.75rem] text-text-secondary hover:text-text-primary hover:underline"
                >
                  Quelle oeffnen <ExternalLink size={12} />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {article.relatedResources.length > 0 ? (
        <section className="mt-8 pt-6" style={{ borderTop: '1px solid #ccc' }}>
          <h2 className="font-display font-bold text-[1.25rem] sm:text-[1.5rem] text-text-primary mb-6 text-wrap">Vertiefung</h2>
          <div className="space-y-4">
            {article.relatedResources.map((resource) => (
              <div key={resource.id} className="rounded-lg border border-[#eee] p-4">
                <div className="mb-2">
                  <span
                    className="inline-block font-body font-medium text-[0.65rem] sm:text-[0.75rem] uppercase px-2 py-0.5 rounded text-[#1a1a1a]"
                    style={{ backgroundColor: `${accentColor}33` }}
                  >
                    {resource.category}
                  </span>
                </div>
                <h4 className="font-body font-semibold text-[0.95rem] sm:text-[1rem] text-text-primary mb-1 text-wrap">{resource.title}</h4>
                <p className="font-body text-[0.8rem] sm:text-[0.875rem] text-text-secondary leading-relaxed mb-2 text-wrap">{resource.relevance}</p>
                {renderResourceLink(resource)}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 pt-6" style={{ borderTop: '1px solid #ccc' }}>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={categoryHref}
            className="inline-flex items-center gap-2 font-body text-[0.8rem] sm:text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline transition-colors"
          >
            <span>←</span> Zurueck zur Kategorie
          </Link>
          <Link
            to={HOME_PATH}
            className="inline-flex items-center gap-2 font-body text-[0.8rem] sm:text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline transition-colors"
          >
            <span>←</span> Zurueck zur Uebersicht
          </Link>
        </div>
      </div>
    </article>
  )
}
