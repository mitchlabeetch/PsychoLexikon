import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { subjectsData } from '@/data/subjects'
import type { ContentBlock, Source, FurtherExploration } from '@/data/subjects'
import { BigFiveDimensionsSVG } from '@/components/svgs/Subject08SVGs'

/* ------------------------------------------------------------------ */
/* Inline tooltip                                                      */
/* ------------------------------------------------------------------ */
function InlineTooltip({ content, children, variant }: {
  content: string
  children: React.ReactNode
  variant: 'blue' | 'red'
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLSpanElement>(null)

  const show = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const tw = 320
      let left = rect.left + rect.width / 2 - tw / 2
      left = Math.max(8, Math.min(left, window.innerWidth - tw - 8))
      setPos({ top: rect.bottom + 8, left })
    }
    setIsVisible(true)
  }, [])

  const hide = useCallback(() => setIsVisible(false), [])

  const colorClass = variant === 'blue'
    ? 'text-[#2563eb] border-b-2 border-dotted border-[#2563eb]'
    : 'text-[#dc2626] border-b-2 border-dotted border-[#dc2626]'

  return (
    <span
      ref={triggerRef}
      className={`relative inline cursor-help ${colorClass}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {isVisible && (
        <div
          className="fixed z-50 bg-[#1a1a1a] text-[#f8f6f1] px-3 py-2 rounded-md text-[0.85rem] max-w-[320px] leading-relaxed shadow-lg transition-opacity duration-150"
          style={{ top: pos.top, left: pos.left }}
        >
          {content}
        </div>
      )}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Text processor                                                      */
/* ------------------------------------------------------------------ */
function processParagraph(
  text: string,
  blueTerms: string[] = [],
  redTerms: string[] = [],
  tooltips: Record<string, string> = {},
  sourcesInline: Record<string, string> = {}
) {
  type Chunk = { kind: 'text' | 'bold'; str: string }
  const chunks: Chunk[] = []
  const boldRe = /\*\*(.+?)\*\*/g
  let m: RegExpExecArray | null
  let last = 0
  while ((m = boldRe.exec(text)) !== null) {
    if (m.index > last) chunks.push({ kind: 'text', str: text.slice(last, m.index) })
    chunks.push({ kind: 'bold', str: m[1] })
    last = m.index + m[0].length
  }
  if (last < text.length) chunks.push({ kind: 'text', str: text.slice(last) })

  type Piece = { kind: 'text' | 'bold' | 'blue' | 'red'; str: string; tip?: string }
  const pieces: Piece[] = []

  const allMarkers = [
    ...blueTerms.map(t => ({ kind: 'blue' as const, term: t, tip: tooltips[t] || '' })),
    ...redTerms.map(t => ({ kind: 'red' as const, term: t, tip: sourcesInline[t] || '' })),
  ].sort((a, b) => b.term.length - a.term.length)

  for (const c of chunks) {
    if (c.kind === 'bold') {
      pieces.push({ kind: 'bold', str: c.str })
      continue
    }
    let segs: { kind: 'text' | 'blue' | 'red'; str: string; tip?: string }[] =
      [{ kind: 'text', str: c.str }]

    for (const mk of allMarkers) {
      const next: typeof segs = []
      for (const s of segs) {
        if (s.kind !== 'text') { next.push(s); continue }
        let idx = s.str.indexOf(mk.term)
        if (idx === -1) { next.push(s); continue }
        let p = 0
        while (idx !== -1) {
          if (idx > p) next.push({ kind: 'text', str: s.str.slice(p, idx) })
          next.push({ kind: mk.kind, str: mk.term, tip: mk.tip })
          p = idx + mk.term.length
          idx = s.str.indexOf(mk.term, p)
        }
        if (p < s.str.length) next.push({ kind: 'text', str: s.str.slice(p) })
      }
      segs = next
    }
    pieces.push(...segs)
  }

  return pieces.map((p, i) => {
    if (p.kind === 'text') return <span key={i}>{p.str}</span>
    if (p.kind === 'bold') return <strong key={i} className="font-semibold">{p.str}</strong>
    if (p.kind === 'blue')
      return (
        <InlineTooltip key={i} content={p.tip || ''} variant="blue">
          <mark className="def bg-transparent">{p.str}</mark>
        </InlineTooltip>
      )
    return (
      <InlineTooltip key={i} content={p.tip || ''} variant="red">
        <mark className="src bg-transparent">{p.str}</mark>
      </InlineTooltip>
    )
  })
}

/* ------------------------------------------------------------------ */
/* Block renderers                                                     */
/* ------------------------------------------------------------------ */
function LeadBlock({ block, tabColor }: { block: ContentBlock; tabColor: string }) {
  return (
    <div
      className="italic font-body text-[1.125rem] text-[#1a1a1a] p-4 pl-5 mb-8 rounded-r-md"
      style={{
        backgroundColor: `${tabColor}14`,
        borderLeft: `3px solid ${tabColor}`,
      }}
    >
      {processParagraph(block.text || '')}
    </div>
  )
}

function DefinitionBlock({ block }: { block: ContentBlock }) {
  return (
    <section className="mb-8">
      <h3 className="font-display font-bold text-[1.25rem] text-[#1a1a1a] mb-3">
        Definition
      </h3>
      <p className="font-body text-[1rem] text-[#1a1a1a] leading-[1.7]">
        {processParagraph(
          block.text || '',
          block.highlight_blue,
          block.highlight_red,
          block.tooltips,
          block.sources_inline
        )}
      </p>
    </section>
  )
}

function ExplanationBlock({ block }: { block: ContentBlock }) {
  const paragraphs = (block.text || '').split(/\n\n+/)
  return (
    <section className="mb-8">
      {paragraphs.map((para: string, i: number) => {
        const trimmed = para.trim()
        if (!trimmed) return null

        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={i} className="font-body font-semibold text-[1rem] text-[#1a1a1a] mt-6 mb-2">
              {trimmed.replace(/^###\s+/, '')}
            </h4>
          )
        }

        const sentences = trimmed.match(/[^.!?]+[.!?]+/g) || [trimmed]
        const chunks: string[] = []
        for (let s = 0; s < sentences.length; s += 3) {
          chunks.push(sentences.slice(s, s + 3).join(' ').trim())
        }

        return chunks.map((chunk, ci) => (
          <p key={`${i}-${ci}`} className="font-body text-[1rem] text-[#1a1a1a] leading-[1.7] mb-3">
            {processParagraph(
              chunk,
              block.highlight_blue,
              block.highlight_red,
              block.tooltips,
              block.sources_inline
            )}
          </p>
        ))
      })}
    </section>
  )
}

function VisualBlock({ block }: { block: ContentBlock }) {
  return (
    <figure className="my-8">
      <div className="flex justify-center">
        <BigFiveDimensionsSVG />
      </div>
      <figcaption className="font-body text-[0.875rem] italic text-[#555555] text-center mt-3">
        {block.caption}
      </figcaption>
    </figure>
  )
}

function DeepDiveBlock({ block }: { block: ContentBlock }) {
  const paragraphs = (block.text || '').split(/\n\n+/)
  return (
    <section className="my-8 bg-[#f0ece4] rounded-lg p-6">
      <h3 className="font-display font-bold text-[1.25rem] text-[#1a1a1a] mb-4">
        Vertiefung
      </h3>
      {paragraphs.map((para: string, i: number) => {
        const trimmed = para.trim()
        if (!trimmed) return null
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={i} className="font-body font-semibold text-[1rem] text-[#1a1a1a] mt-4 mb-2">
              {trimmed.replace(/^###\s+/, '')}
            </h4>
          )
        }
        return (
          <p key={i} className="font-body text-[1rem] text-[#1a1a1a] leading-[1.7] mb-3">
            {processParagraph(
              trimmed,
              block.highlight_blue,
              block.highlight_red,
              block.tooltips,
              block.sources_inline
            )}
          </p>
        )
      })}
    </section>
  )
}

function ExampleBlock({ block }: { block: ContentBlock }) {
  return (
    <section className="my-8">
      <h3 className="font-display font-bold text-[1.25rem] text-[#1a1a1a] mb-3">
        Alltagsbeispiel
      </h3>
      <div className="italic font-body text-[1rem] text-[#1a1a1a] leading-[1.7] pl-4" style={{ borderLeft: '3px solid #ccc' }}>
        {processParagraph(block.text || '')}
      </div>
    </section>
  )
}

function SummaryBlock({ block, tabColor }: { block: ContentBlock; tabColor: string }) {
  const lines = (block.text || '')
    .split(/\n/)
    .map((l: string) => l.trim())
    .filter((l: string) => l.length > 0)
    .map((l: string) => l.replace(/^[-•]\s*/, ''))

  return (
    <section className="my-8">
      <h3 className="font-display font-bold text-[1.25rem] text-[#1a1a1a] mb-3">
        Zusammenfassung
      </h3>
      <ul className="list-none pl-0 space-y-2">
        {lines.map((line: string, i: number) => (
          <li key={i} className="font-body text-[1rem] text-[#1a1a1a] leading-[1.7] flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: tabColor }} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function SourcesSection({ sources }: { sources: Source[] }) {
  return (
    <section className="mt-12">
      <h2 className="font-display font-bold text-[1.5rem] text-[#1a1a1a] mb-4">Quellen</h2>
      <div className="w-full h-px bg-[#ccc] mb-4" />
      <div className="space-y-4">
        {sources.map((src, i) => (
          <div key={i} className="bg-[#eee] rounded-md p-4">
            <p className="font-body text-[0.875rem] text-[#1a1a1a] leading-relaxed mb-2">
              {src.apa_citation}
            </p>
            <div className="flex items-center gap-3">
              <span className="font-body font-medium text-[0.75rem] uppercase text-[#555555] bg-[#ddd] px-2 py-0.5 rounded">
                {src.type}
              </span>
              {src.wikipedia_url && (
                <a
                  href={src.wikipedia_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[0.75rem] text-[#2563eb] hover:underline inline-flex items-center gap-1"
                >
                  Wikipedia
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FurtherExplorationSection({ items }: { items: FurtherExploration[] }) {
  const categoryColors: Record<string, string> = {
    Forschung: '#c7b8ea',
    Buch: '#98d4bb',
    Film: '#f4b8c5',
  }

  return (
    <section className="mt-8">
      <h2 className="font-display font-bold text-[1.5rem] text-[#1a1a1a] mb-4">Vertiefung</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="border border-[#ddd] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded"
                style={{ backgroundColor: categoryColors[item.category] || '#eee', color: '#1a1a1a' }}
              >
                {item.category}
              </span>
            </div>
            <h4 className="font-body font-semibold text-[1rem] text-[#1a1a1a] mb-1">
              {item.title}
            </h4>
            <p className="font-body text-[0.875rem] text-[#555555] mb-2 leading-relaxed">
              {item.relevance}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[0.875rem] text-[#2563eb] hover:underline inline-flex items-center gap-1"
            >
              Link
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Main page component                                                 */
/* ------------------------------------------------------------------ */
export default function Subject08() {
  const subject = subjectsData.find(s => s.id === '08')
  if (!subject) return null

  const { subject_meta, content_blocks, sources, further_exploration } = subject
  const tabColor = subject_meta.tab_color

  return (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-body text-[0.875rem] text-[#888888] flex-wrap">
          <li>
            <Link to="/" className="hover:underline">PsychoLexicon</Link>
          </li>
          <li>/</li>
          <li>{subject_meta.discipline}</li>
          <li>/</li>
          <li className="truncate max-w-[220px]">{subject_meta.title}</li>
        </ol>
      </nav>

      {/* H1 */}
      <h1
        className="font-display font-bold text-[2rem] text-[#1a1a1a] mb-3"
        style={{ letterSpacing: '-0.02em' }}
      >
        {subject_meta.title}
      </h1>

      {/* Discipline tag */}
      <span
        className="inline-block px-3 py-1 rounded-full font-body font-medium text-[0.75rem] uppercase mb-8"
        style={{ backgroundColor: `${tabColor}33`, color: tabColor }}
      >
        {subject_meta.discipline}
      </span>

      {/* Content blocks */}
      {content_blocks.map((block, i) => {
        switch (block.type) {
          case 'lead':
            return <LeadBlock key={i} block={block} tabColor={tabColor} />
          case 'definition':
            return <DefinitionBlock key={i} block={block} />
          case 'explanation':
            return <ExplanationBlock key={i} block={block} />
          case 'visual':
            return <VisualBlock key={i} block={block} />
          case 'deep_dive':
            return <DeepDiveBlock key={i} block={block} />
          case 'example':
            return <ExampleBlock key={i} block={block} />
          case 'summary':
            return <SummaryBlock key={i} block={block} tabColor={tabColor} />
          default:
            return null
        }
      })}

      {/* Sources */}
      <SourcesSection sources={sources} />

      {/* Further exploration */}
      <FurtherExplorationSection items={further_exploration} />

      {/* Back link */}
      <div className="mt-12 mb-4">
        <Link
          to="/"
          className="font-body text-[0.875rem] text-[#555555] hover:text-[#1a1a1a] inline-flex items-center gap-1"
        >
          <span>←</span> Zurück zur Übersicht
        </Link>
      </div>
    </article>
  )
}
