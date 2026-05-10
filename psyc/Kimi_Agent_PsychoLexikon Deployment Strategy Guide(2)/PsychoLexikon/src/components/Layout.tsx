import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import NotebookPage from './NotebookPage'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const categories = [
    { label: 'Bio / Neuro', color: '#98d4bb', subjects: ['01', '02'] },
    { label: 'Gedächtnis', color: '#c7b8ea', subjects: ['03'] },
    { label: 'Lernen / Entw.', color: '#f4b8c5', subjects: ['04', '06'] },
    { label: 'Persönlichkeit', color: '#a8d8ea', subjects: ['05', '07', '08'] },
    { label: 'Methoden', color: '#ffe6a7', subjects: ['09', '10', '11'] },
    { label: 'Motivation', color: '#d4a8a8', subjects: ['12'] },
  ]
  const activeCategory = categories.find((category) =>
    category.subjects.some((subjectId) => pathname === `/thema/${subjectId}`),
  )?.label

  const renderTab = (tab: (typeof categories)[number], compact = false) => (
    <NavLink
      key={tab.label}
      to={`/thema/${tab.subjects[0]}`}
      className={({ isActive }) =>
        [
          'font-body font-medium text-[#1a1a1a] transition-all duration-200 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/20',
          compact
            ? 'rounded-full px-4 py-2 text-sm shadow-sm'
            : 'rounded-l-lg px-1.5 py-3 text-[clamp(0.5rem,1vh,0.7rem)] shadow-sm hover:scale-105',
          isActive || activeCategory === tab.label ? 'translate-x-[-2px] shadow-[0_8px_20px_rgba(0,0,0,0.14)]' : '',
        ].join(' ')
      }
      style={{
        backgroundColor: tab.color,
        writingMode: compact ? 'horizontal-tb' : 'vertical-rl',
      }}
      title={`Springe zu ${tab.label}`}
    >
      {tab.label}
    </NavLink>
  )

  return (
    <div className="min-h-[100dvh] bg-bg-outer flex justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1100px]">
        <div className="mb-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {categories.map((tab) => renderTab(tab, true))}
        </div>

        <div className="flex items-start gap-4 lg:gap-6">
          <div className="relative min-w-0 flex-1 bg-bg-page rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="pr-4 sm:pr-6">
              <NotebookPage>
                <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-12">
                  {children}
                </div>
              </NotebookPage>
            </div>
          </div>

          <div className="sticky top-6 hidden lg:flex lg:flex-col lg:gap-3">
            {categories.map((tab) => renderTab(tab))}
          </div>
        </div>
      </div>
    </div>
  )
}
