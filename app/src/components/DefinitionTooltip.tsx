import { useState, useRef, useCallback, useEffect } from 'react';

interface DefinitionTooltipProps {
  term: string;
  definition?: string;
  children?: React.ReactNode;
}

export default function DefinitionTooltip({ term, definition, children }: DefinitionTooltipProps) {
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

  const displayText = children || term;

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        className="font-serif italic font-semibold text-blue cursor-help"
        style={{ borderBottom: '2px dotted #2563EB' }}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        tabIndex={0}
        role="button"
        aria-describedby={visible ? 'definition-tooltip' : undefined}
      >
        {displayText}
      </span>
      {visible && (
        <div
          id="definition-tooltip"
          ref={tooltipRef}
          role="tooltip"
          className={[
            'absolute z-tooltip rounded-lg p-4 max-w-[360px] w-max',
            'animate-fade-in',
            flipped ? 'bottom-full mb-3' : 'top-full mt-3',
          ].join(' ')}
          style={{
            background: '#FEFDFB',
            border: '1px solid #2563EB',
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.12)',
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
                ? { borderTop: '8px solid #2563EB', borderBottom: 'none' }
                : { borderBottom: '8px solid #2563EB', borderTop: 'none' }),
            }}
          />
          <p className="font-serif font-semibold text-body-sm text-blue mb-1">{term}</p>
          {definition && <p className="font-serif text-body-sm text-ink">{definition}</p>}
        </div>
      )}
    </span>
  );
}
