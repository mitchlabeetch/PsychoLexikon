import { Link } from 'react-router-dom';
import { subjectsData } from '@/data/subjects';
import type { ContentBlock } from '@/data/subjects';
import Tooltip from '@/components/Tooltip';
import { Subject09SVG1 } from '@/components/svgs/Subject09SVGs';

interface TextSegment {
  type: 'text' | 'blue' | 'red';
  content: string;
  tooltip?: string;
}

function processHighlights(text: string, block: ContentBlock): TextSegment[] {
  let segments: TextSegment[] = [{ type: 'text', content: text }];

  const blueTerms = block.highlight_blue || [];
  const redTerms = block.highlight_red || [];

  // Sort by length descending to avoid partial replacements
  const allTerms = [
    ...blueTerms.map(t => ({ term: t, type: 'blue' as const, tooltip: block.tooltips?.[t] || '' })),
    ...redTerms.map(t => ({ term: t, type: 'red' as const, tooltip: block.sources_inline?.[t] || '' })),
  ].sort((a, b) => b.term.length - a.term.length);

  for (const { term, type, tooltip } of allTerms) {
    const newSegments: TextSegment[] = [];
    for (const seg of segments) {
      if (seg.type !== 'text') {
        newSegments.push(seg);
        continue;
      }
      // Also match **term** markdown bold
      const boldPattern = `**${term}**`;
      let remaining = seg.content;
      let idx = remaining.indexOf(boldPattern);
      let useTerm = boldPattern;
      if (idx === -1) {
        idx = remaining.indexOf(term);
        useTerm = term;
      }
      if (idx === -1) {
        newSegments.push(seg);
        continue;
      }
      while (idx !== -1) {
        if (idx > 0) {
          newSegments.push({ type: 'text', content: remaining.slice(0, idx) });
        }
        newSegments.push({ type, content: term, tooltip });
        remaining = remaining.slice(idx + useTerm.length);
        idx = remaining.indexOf(boldPattern);
        useTerm = boldPattern;
        if (idx === -1) {
          idx = remaining.indexOf(term);
          useTerm = term;
        }
      }
      if (remaining.length > 0) {
        newSegments.push({ type: 'text', content: remaining });
      }
    }
    segments = newSegments;
  }

  return segments;
}

function renderSegments(segments: TextSegment[]): React.ReactNode[] {
  return segments.map((seg, i) => {
    if (seg.type === 'text') {
      // Handle remaining markdown bold markers
      const parts = seg.content.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={i}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j}>{part.slice(2, -2)}</strong>;
            }
            return <span key={j}>{part}</span>;
          })}
        </span>
      );
    }
    if (seg.type === 'blue') {
      return (
        <Tooltip key={i} content={seg.tooltip || ''} variant="blue">
          <span className="cursor-help">{seg.content}</span>
        </Tooltip>
      );
    }
    return (
      <Tooltip key={i} content={seg.tooltip || ''} variant="red">
        <span className="cursor-help">{seg.content}</span>
      </Tooltip>
    );
  });
}

function splitExplanation(text: string): { heading?: string; paragraphs: string[] }[] {
  const sections = text.split(/(?=### )/);
  return sections.map(section => {
    const lines = section.trim().split('\n');
    let heading: string | undefined;
    let startIdx = 0;
    if (lines[0]?.startsWith('### ')) {
      heading = lines[0].replace('### ', '').trim();
      startIdx = 1;
    }
    const body = lines.slice(startIdx).join('\n').trim();
    // Split into paragraphs by double newlines, but also single newlines within body
    const paragraphs = body
      .split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);
    return { heading, paragraphs };
  }).filter(s => s.heading || s.paragraphs.length > 0);
}

export default function Subject09() {
  const subject = subjectsData.find(s => s.id === '09');
  if (!subject) return null;

  const { subject_meta, content_blocks, sources, further_exploration } = subject;
  const tabColor = subject_meta.tab_color;

  return (
    <article className="pb-8">
      {/* Breadcrumb */}
      <nav className="font-body text-[0.875rem] text-text-muted mb-6">
        <Link to="/" className="hover:underline">PsychoLexicon</Link>
        <span className="mx-1">/</span>
        <span>{subject_meta.discipline}</span>
        <span className="mx-1">/</span>
        <span className="truncate">{subject_meta.title}</span>
      </nav>

      {/* H1 */}
      <h1 className="font-display font-bold text-[2rem] text-text-primary mb-3 tracking-tight">
        {subject_meta.title}
      </h1>

      {/* Disziplin-Tag */}
      <span
        className="inline-block font-body font-medium text-[0.75rem] uppercase px-3 py-1 rounded-full mb-8"
        style={{ backgroundColor: `${tabColor}33`, color: tabColor }}
      >
        {subject_meta.discipline}
      </span>

      {/* Content Blocks */}
      {content_blocks.map((block, idx) => {
        switch (block.type) {
          case 'lead':
            return (
              <div
                key={idx}
                className="font-body italic text-[1.125rem] text-text-primary px-5 py-4 mb-8 rounded-r-md"
                style={{
                  backgroundColor: `${tabColor}14`,
                  borderLeft: `3px solid ${tabColor}`,
                }}
              >
                {block.text && renderSegments(processHighlights(block.text, block))}
              </div>
            );

          case 'definition':
            return (
              <div key={idx} className="mb-8">
                <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-3">
                  Definition
                </h3>
                <p className="font-body text-[1rem] text-text-primary leading-relaxed">
                  {block.text && renderSegments(processHighlights(block.text, block))}
                </p>
              </div>
            );

          case 'explanation':
            return (
              <div key={idx} className="mb-8">
                {block.text && splitExplanation(block.text).map((section, sIdx) => (
                  <div key={sIdx} className="mb-4">
                    {section.heading && (
                      <h4 className="font-body font-semibold text-[1rem] text-text-primary mt-6 mb-3">
                        {section.heading}
                      </h4>
                    )}
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="font-body text-[1rem] text-text-primary leading-relaxed mb-3">
                        {renderSegments(processHighlights(para, block))}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            );

          case 'visual':
            return (
              <figure key={idx} className="my-8">
                <div className="w-full">
                  <Subject09SVG1 />
                </div>
                {block.caption && (
                  <figcaption className="font-body italic text-[0.875rem] text-text-secondary text-center mt-3">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case 'deep_dive':
            return (
              <div
                key={idx}
                className="rounded-lg p-6 mb-8"
                style={{ backgroundColor: '#f0ece4' }}
              >
                <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-4">
                  Vertiefung
                </h3>
                {block.text && splitExplanation(block.text).map((section, sIdx) => (
                  <div key={sIdx} className="mb-4">
                    {section.heading && (
                      <h4 className="font-body font-semibold text-[1rem] text-text-primary mt-4 mb-2">
                        {section.heading}
                      </h4>
                    )}
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="font-body text-[1rem] text-text-primary leading-relaxed mb-3">
                        {renderSegments(processHighlights(para, block))}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            );

          case 'example':
            return (
              <div key={idx} className="mb-8">
                <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-3">
                  Alltagsbeispiel
                </h3>
                <div
                  className="font-body italic text-[1rem] text-text-primary leading-relaxed pl-4"
                  style={{ borderLeft: '3px solid #ccc' }}
                >
                  {block.text && renderSegments(processHighlights(block.text, block))}
                </div>
              </div>
            );

          case 'summary':
            return (
              <div key={idx} className="mb-8">
                <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-4">
                  Zusammenfassung
                </h3>
                <ul className="space-y-2">
                  {block.text?.split('\n').filter(line => line.trim().startsWith('•') || line.trim().startsWith('-')).map((line, i) => (
                    <li key={i} className="font-body text-[1rem] text-text-primary leading-relaxed flex items-start gap-2">
                      <span
                        className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: tabColor }}
                      />
                      <span>{line.replace(/^[•-]\s*/, '').trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          default:
            return null;
        }
      })}

      {/* Sources */}
      <section className="mt-12 pt-8" style={{ borderTop: '1px solid #ccc' }}>
        <h2 className="font-display font-bold text-[1.5rem] text-text-primary mb-4">
          Quellen
        </h2>
        <div className="space-y-4">
          {sources.map((source, i) => (
            <div key={i} className="p-4 rounded-md" style={{ backgroundColor: '#f8f6f1', border: '1px solid #eee' }}>
              <p className="font-body text-[0.875rem] text-text-primary leading-relaxed">
                {source.apa_citation}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className="inline-block font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded"
                  style={{ backgroundColor: '#eee', color: '#555' }}
                >
                  {source.type}
                </span>
                {source.wikipedia_url && (
                  <a
                    href={source.wikipedia_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[0.75rem] text-text-secondary hover:underline"
                  >
                    Wikipedia ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Further Exploration */}
      <section className="mt-10">
        <h2 className="font-display font-bold text-[1.5rem] text-text-primary mb-4">
          Vertiefung
        </h2>
        <div className="space-y-3">
          {further_exploration.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-md flex flex-col gap-1"
              style={{ backgroundColor: '#f8f6f1', border: '1px solid #eee' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block font-body font-medium text-[0.75rem] uppercase px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${tabColor}33`, color: tabColor }}
                >
                  {item.category}
                </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-semibold text-[1rem] text-text-primary hover:underline"
                >
                  {item.title}
                </a>
              </div>
              <p className="font-body text-[0.875rem] text-text-secondary leading-relaxed">
                {item.relevance}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <div className="mt-12">
        <Link
          to="/"
          className="font-body text-[0.875rem] text-text-secondary hover:text-text-primary transition-colors"
        >
          ← Zurück zur Uebersicht
        </Link>
      </div>
    </article>
  );
}
