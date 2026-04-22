import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { subjectsData } from '@/data/subjects';
import type { ContentBlock, Source, FurtherExploration } from '@/data/subjects';
import Tooltip from '@/components/Tooltip';
import { AktionspotentialGraph, SynapseDiagram } from '@/components/svgs/Subject01SVGs';
import { ExternalLink } from 'lucide-react';

function renderTextWithHighlights(
  text: string | undefined,
  highlightBlue: string[] | undefined,
  highlightRed: string[] | undefined,
  tooltips: Record<string, string> | undefined,
  sourcesInline: Record<string, string> | undefined
): React.ReactNode {
  if (!text) return null;

  const terms: Array<{ term: string; variant: 'blue' | 'red'; tooltip: string }> = [];

  if (highlightBlue) {
    for (const term of highlightBlue) {
      const tt = tooltips?.[term];
      if (tt) terms.push({ term, variant: 'blue', tooltip: tt });
    }
  }

  if (highlightRed) {
    for (const term of highlightRed) {
      const tt = sourcesInline?.[term];
      if (tt) terms.push({ term, variant: 'red', tooltip: tt });
    }
  }

  // Sortiere nach Länge absteigend, damit längere Treffer zuerst ersetzt werden
  terms.sort((a, b) => b.term.length - a.term.length);

  // Entferne doppelte Terme (gleicher Text)
  const seen = new Set<string>();
  const uniqueTerms = terms.filter((t) => {
    if (seen.has(t.term)) return false;
    seen.add(t.term);
    return true;
  });

  // Baue Ersetzung durch rekursive Suche
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    let bestIdx = -1;
    let bestTerm = '';
    let bestVariant: 'blue' | 'red' = 'blue';
    let bestTooltip = '';

    for (const { term, variant, tooltip } of uniqueTerms) {
      const idx = remaining.indexOf(term);
      if (idx !== -1 && (bestIdx === -1 || idx < bestIdx)) {
        bestIdx = idx;
        bestTerm = term;
        bestVariant = variant;
        bestTooltip = tooltip;
      }
    }

    if (bestIdx === -1) {
      parts.push(<span key={keyIdx++}>{remaining}</span>);
      break;
    }

    if (bestIdx > 0) {
      parts.push(<span key={keyIdx++}>{remaining.slice(0, bestIdx)}</span>);
    }

    parts.push(
      <Tooltip key={keyIdx++} content={bestTooltip} variant={bestVariant}>
        <mark
          className={bestVariant === 'blue' ? 'def' : 'src'}
          style={{
            color: bestVariant === 'blue' ? '#2563eb' : '#dc2626',
            backgroundColor: 'transparent',
            borderBottom: `2px dotted ${bestVariant === 'blue' ? '#2563eb' : '#dc2626'}`,
            cursor: 'help',
          }}
        >
          {bestTerm}
        </mark>
      </Tooltip>
    );

    remaining = remaining.slice(bestIdx + bestTerm.length);
  }

  return <>{parts}</>;
}

function processParagraphs(text: string | undefined): string[] {
  if (!text) return [];
  return text.split(/\n\n+/).filter((p) => p.trim().length > 0);
}

export default function Subject01() {
  const subject = useMemo(() => subjectsData.find((s) => s.id === '01'), []);

  if (!subject) {
    return (
      <div className="py-12">
        <h1 className="font-display font-bold text-[2rem] text-text-primary mb-4">Thema nicht gefunden</h1>
        <Link to="/" className="font-body text-text-secondary hover:underline">Zurück zur Übersicht</Link>
      </div>
    );
  }

  const meta = subject.subject_meta;
  const tabColor = meta.tab_color;

  const getBlock = (type: string): ContentBlock | undefined =>
    subject.content_blocks.find((b) => b.type === type);

  const leadBlock = getBlock('lead');
  const definitionBlock = getBlock('definition');
  const visualBlocks = subject.content_blocks.filter((b) => b.type === 'visual');
  const deepDiveBlock = getBlock('deep_dive');
  const exampleBlock = getBlock('example');
  const summaryBlock = getBlock('summary');

  // Explanation blocks: there can be multiple
  const explanationBlocks = subject.content_blocks.filter((b) => b.type === 'explanation');

  return (
    <article className="font-body text-text-primary">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-body text-[0.875rem] text-text-muted">
          <li><Link to="/" className="hover:underline">PsychoLexicon</Link></li>
          <li>/</li>
          <li>{meta.discipline}</li>
          <li>/</li>
          <li className="truncate max-w-[200px]">{meta.title}</li>
        </ol>
      </nav>

      {/* H1 */}
      <h1 className="font-display font-bold text-[2rem] leading-tight tracking-[-0.02em] text-text-primary mb-3">
        {meta.title}
      </h1>

      {/* Disziplin-Tag */}
      <span
        className="inline-block font-body font-medium text-[0.75rem] uppercase tracking-wide px-3 py-1 rounded-full mb-8"
        style={{ backgroundColor: tabColor + '33', color: tabColor }}
      >
        {meta.discipline}
      </span>

      {/* Lead */}
      {leadBlock?.text && (
        <div
          className="italic text-[1.125rem] leading-relaxed p-4 pr-5 mb-8 rounded-r"
          style={{
            backgroundColor: tabColor + '14',
            borderLeft: `3px solid ${tabColor}`,
          }}
        >
          {renderTextWithHighlights(
            leadBlock.text,
            leadBlock.highlight_blue,
            leadBlock.highlight_red,
            leadBlock.tooltips,
            leadBlock.sources_inline
          )}
        </div>
      )}

      {/* Definition */}
      {definitionBlock?.text && (
        <section className="mb-8">
          <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-3">Definition</h3>
          <p className="text-[1rem] leading-[1.7]">
            {renderTextWithHighlights(
              definitionBlock.text,
              definitionBlock.highlight_blue,
              definitionBlock.highlight_red,
              definitionBlock.tooltips,
              definitionBlock.sources_inline
            )}
          </p>
        </section>
      )}

      {/* Explanation blocks */}
      {explanationBlocks.map((block, idx) => {
        const paragraphs = processParagraphs(block.text);
        return (
          <section key={idx} className="mb-8">
            {paragraphs.map((para, pIdx) => {
              // Check for H4 subheading: **text**
              const headingMatch = para.match(/^\*\*(.+?)\*\*\s*\n?/);
              if (headingMatch) {
                const heading = headingMatch[1];
                const rest = para.slice(headingMatch[0].length);
                return (
                  <div key={pIdx} className="mb-4">
                    <h4 className="font-body font-semibold text-[1rem] text-text-primary mt-6 mb-2">{heading}</h4>
                    {rest && (
                      <p className="text-[1rem] leading-[1.7]">
                        {renderTextWithHighlights(
                          rest,
                          block.highlight_blue,
                          block.highlight_red,
                          block.tooltips,
                          block.sources_inline
                        )}
                      </p>
                    )}
                  </div>
                );
              }

              return (
                <p key={pIdx} className="text-[1rem] leading-[1.7] mb-4">
                  {renderTextWithHighlights(
                    para,
                    block.highlight_blue,
                    block.highlight_red,
                    block.tooltips,
                    block.sources_inline
                  )}
                </p>
              );
            })}
          </section>
        );
      })}

      {/* Visuals */}
      {visualBlocks.length > 0 && (
        <div className="my-8 space-y-8">
          {visualBlocks[0] && (
            <figure className="text-center">
              <AktionspotentialGraph />
              {visualBlocks[0].caption && (
                <figcaption className="font-body text-[0.875rem] italic text-text-secondary mt-3">
                  {visualBlocks[0].caption}
                </figcaption>
              )}
            </figure>
          )}
          {visualBlocks[1] && (
            <figure className="text-center">
              <SynapseDiagram />
              {visualBlocks[1].caption && (
                <figcaption className="font-body text-[0.875rem] italic text-text-secondary mt-3">
                  {visualBlocks[1].caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      )}

      {/* Deep Dive */}
      {deepDiveBlock?.text && (
        <section className="my-8 p-6 rounded-lg" style={{ backgroundColor: '#f0ece4' }}>
          <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-4">Vertiefung</h3>
          {processParagraphs(deepDiveBlock.text).map((para, idx) => {
            const headingMatch = para.match(/^\*\*(.+?)\*\*\s*\n?/);
            if (headingMatch) {
              const heading = headingMatch[1];
              const rest = para.slice(headingMatch[0].length);
              return (
                <div key={idx} className="mb-4">
                  <h4 className="font-body font-semibold text-[1rem] text-text-primary mt-4 mb-2">{heading}</h4>
                  {rest && (
                    <p className="text-[1rem] leading-[1.7]">
                      {renderTextWithHighlights(
                        rest,
                        deepDiveBlock.highlight_blue,
                        deepDiveBlock.highlight_red,
                        deepDiveBlock.tooltips,
                        deepDiveBlock.sources_inline
                      )}
                    </p>
                  )}
                </div>
              );
            }
            return (
              <p key={idx} className="text-[1rem] leading-[1.7] mb-4">
                {renderTextWithHighlights(
                  para,
                  deepDiveBlock.highlight_blue,
                  deepDiveBlock.highlight_red,
                  deepDiveBlock.tooltips,
                  deepDiveBlock.sources_inline
                )}
              </p>
            );
          })}
        </section>
      )}

      {/* Example */}
      {exampleBlock?.text && (
        <section className="my-8 pl-4" style={{ borderLeft: '3px solid #ccc' }}>
          <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-3">Alltagsbeispiel</h3>
          <p className="text-[1rem] leading-[1.7] italic">
            {renderTextWithHighlights(
              exampleBlock.text,
              exampleBlock.highlight_blue,
              exampleBlock.highlight_red,
              exampleBlock.tooltips,
              exampleBlock.sources_inline
            )}
          </p>
        </section>
      )}

      {/* Summary */}
      {summaryBlock?.text && (
        <section className="my-8">
          <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-4">Zusammenfassung</h3>
          <ul className="space-y-3">
            {summaryBlock.text
              .split(/\n/)
              .filter((line) => line.trim().startsWith('•') || line.trim().startsWith('-'))
              .map((line, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[1rem] leading-[1.7]">
                  <span
                    className="inline-block w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: tabColor }}
                  />
                  <span>{line.replace(/^[•-]\s*/, '').trim()}</span>
                </li>
              ))}
          </ul>
        </section>
      )}

      {/* Sources */}
      {subject.sources.length > 0 && (
        <section className="mt-12 pt-8" style={{ borderTop: '1px solid #ccc' }}>
          <h2 className="font-display font-bold text-[1.5rem] text-text-primary mb-6">Quellen</h2>
          <div className="space-y-4">
            {subject.sources.map((source: Source, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#f8f6f1] border border-[#eee]">
                <p className="font-body text-[0.875rem] text-text-primary leading-relaxed mb-2">
                  {source.apa_citation}
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-block font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded bg-[#eee] text-text-secondary">
                    {source.type}
                  </span>
                  {source.wikipedia_url && (
                    <a
                      href={source.wikipedia_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-body text-[0.75rem] text-text-secondary hover:text-text-primary hover:underline"
                    >
                      Wikipedia <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Further Exploration */}
      {subject.further_exploration.length > 0 && (
        <section className="mt-8 pt-6" style={{ borderTop: '1px solid #ccc' }}>
          <h2 className="font-display font-bold text-[1.5rem] text-text-primary mb-6">Vertiefung</h2>
          <div className="space-y-4">
            {subject.further_exploration.map((item: FurtherExploration, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-[#eee]">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-block font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded text-[#1a1a1a]"
                    style={{ backgroundColor: tabColor + '33' }}
                  >
                    {item.category}
                  </span>
                </div>
                <h4 className="font-body font-semibold text-[1rem] text-text-primary mb-1">{item.title}</h4>
                <p className="font-body text-[0.875rem] text-text-secondary leading-relaxed mb-2">{item.relevance}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-body text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline"
                >
                  {item.url} <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Zurück-Link */}
      <div className="mt-12 pt-6" style={{ borderTop: '1px solid #ccc' }}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-[0.875rem] text-text-secondary hover:text-text-primary hover:underline transition-colors"
        >
          <span>←</span> Zurück zur Übersicht
        </Link>
      </div>
    </article>
  );
}
