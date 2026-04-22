import type { ReactNode } from 'react'
import NotebookPage from './NotebookPage'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] bg-bg-outer flex justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-[900px] bg-bg-page rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* Right-edge tabs */}
        <div className="absolute right-0 top-12 bottom-12 flex flex-col justify-between z-10">
          {[
            { label: 'Bio / Neuro', color: '#98d4bb' },
            { label: 'Wahrnehmung', color: '#c7b8ea' },
            { label: 'Lernen / Entw.', color: '#f4b8c5' },
            { label: 'Persönlichkeit', color: '#a8d8ea' },
            { label: 'Methoden', color: '#ffe6a7' },
            { label: 'Motivation', color: '#d4a8a8' },
          ].map((tab) => (
            <div
              key={tab.label}
              className="px-1.5 py-3 text-[clamp(0.5rem,1vh,0.7rem)] font-body font-medium text-[#1a1a1a] cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-95 rounded-r-lg"
              style={{
                writingMode: 'vertical-rl',
                backgroundColor: tab.color,
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="pr-10 sm:pr-12">
          <NotebookPage>
            <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-12">
              {children}
            </div>
          </NotebookPage>
        </div>
      </div>
    </div>
  )
}
