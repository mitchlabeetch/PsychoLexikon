import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import NotebookPage from './NotebookPage'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const categories = [
    { label: 'Bio / Neuro', color: '#98d4bb', subjects: ['01', '02'] },
    { label: 'Gedächtnis', color: '#c7b8ea', subjects: ['03'] },
    { label: 'Lernen / Entw.', color: '#f4b8c5', subjects: ['04', '06'] },
    { label: 'Persönlichkeit', color: '#a8d8ea', subjects: ['05', '07', '08'] },
    { label: 'Methoden', color: '#ffe6a7', subjects: ['09', '10', '11'] },
    { label: 'Motivation', color: '#d4a8a8', subjects: ['12'] },
  ]

  return (
    <div className="min-h-[100dvh] bg-bg-outer flex justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-[900px] bg-bg-page rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* Right-edge tabs - sticky and linked to first subject in each category */}
        <div className="absolute right-0 top-0 flex flex-col gap-3 z-20 pt-12 pr-0 sticky" style={{ position: 'sticky', top: '12px' }}>
          {categories.map((tab) => (
            <Link
              key={tab.label}
              to={`/thema/${tab.subjects[0]}`}
              className="px-1.5 py-3 text-[clamp(0.5rem,1vh,0.7rem)] font-body font-medium text-[#1a1a1a] cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-95 rounded-l-lg shadow-sm"
              style={{
                writingMode: 'vertical-rl',
                backgroundColor: tab.color,
              }}
              title={`Springe zu ${tab.label}`}
            >
              {tab.label}
            </Link>
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
