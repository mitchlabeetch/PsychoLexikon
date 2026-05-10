import type { ReactNode } from 'react'

interface NotebookPageProps {
  children: ReactNode
}

export default function NotebookPage({ children }: NotebookPageProps) {
  return (
    <div className="relative">
      {/* Binder holes on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none">
        {[15, 50, 85].map((pct) => (
          <div
            key={pct}
            className="absolute left-2 w-3 h-3 rounded-full border-2 border-[#ccc] bg-bg-outer"
            style={{ top: `${pct}%`, transform: 'translateY(-50%)' }}
          />
        ))}
      </div>

      <div className="pl-10">
        {children}
      </div>
    </div>
  )
}
