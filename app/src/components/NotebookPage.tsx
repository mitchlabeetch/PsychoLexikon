import type { ReactNode } from 'react'

interface NotebookPageProps {
  children: ReactNode
}

export default function NotebookPage({ children }: NotebookPageProps) {
  return (
    <div className="relative" id="notebook-page">
      <div
        className="absolute left-0 top-0 w-4 sm:w-8 z-10 pointer-events-none"
        style={{
          height: '100%',
          backgroundImage: 'radial-gradient(circle at center, #2d2d2d 3px, transparent 4px)',
          backgroundSize: '100% 220px',
          backgroundPosition: 'left 100px',
          backgroundRepeat: 'repeat-y'
        }}
      />

      <div className="pl-3 sm:pl-8 min-h-[100dvh]">
        {children}
      </div>
    </div>
  )
}
