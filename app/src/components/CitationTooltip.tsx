import { useState, useRef, useCallback, useEffect } from 'react';

interface CitationTooltipProps {
  citation: string;
  children?: React.ReactNode;
}

export default function CitationTooltip({ citation, children }: CitationTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(true);
    requestAnimationFrame(() => {
      if (triggerRef.current && tooltipRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - triggerRect.bottom;
        if (spaceBelow < tooltipRect.height + 12 && triggerRect.top > tooltipRect.height + 12) {
          setFlipped(true);
        } else {
          setFlipped(false);
        }
      }
    });
  }, []);

  const hide = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 100);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    if (visible) {
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [visible]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const displayText = children || (citation ? citation.split('.')[0] + ' et al.' : 'Quelle');

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        className="font-mono text-mono-sm text-red cursor-help"
        style={{ borderBottom: '2px dotted #DC2626' }}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        tabIndex={0}
        role="button"
        aria-describedby={visible ? 'citation-tooltip' : undefined}
      >
        {displayText}
      </span>
      {visible && (
        <div
          id="citation-tooltip"
          ref={tooltipRef}
          role="tooltip"
          className={[
            'absolute z-tooltip rounded-lg p-4 max-w-[400px] w-max',
            'animate-fade-in',
            flipped ? 'bottom-full mb-3' : 'top-full mt-3',
          ].join(' ')}
          style={{
            background: '#FEFDFB',
            border: '1px solid #DC2626',
            boxShadow: '0 4px 16px rgba(220, 38, 38, 0.12)',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          onMouseEnter={() => { if (timerRef.current) clearTimeout(timerRef.current); }}
          onMouseLeave={hide}
        >
          <div
            className={[
              'absolute left-1/2 -translate-x-1/2 w-0 h-0',
              flipped ? 'top-full -mt-px' : 'bottom-full -mb-px',
            ].join(' ')}
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              ...(flipped
                ? { borderTop: '8px solid #DC2626', borderBottom: 'none' }
                : { borderBottom: '8px solid #DC2626', borderTop: 'none' }),
            }}
          />
          <p className="font-mono text-caption text-ink">{citation}</p>
        </div>
      )}
    </span>
  );
}
