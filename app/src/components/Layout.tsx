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

  const renderTab = (tab: (typeof categories)[number]) => (
    <NavLink
      key={tab.label}
      to={`/thema/${tab.subjects[0]}`}
      className={({ isActive }) =>
        [
          'font-body font-medium text-[#1a1a1a] transition-all duration-300 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/20',
          'rounded-r-lg px-1.5 py-3 text-[clamp(0.5rem,1vh,0.7rem)] shadow-sm hover:translate-x-1 tab-vertical',
          isActive || activeCategory === tab.label ? 'translate-x-1 shadow-[0_8px_20px_rgba(0,0,0,0.14)]' : '',
        ].join(' ')
      }
      style={{
        backgroundColor: tab.color,
      }}
      title={`Springe zu ${tab.label}`}
    >
      {tab.label}
    </NavLink>
  )

  return (
    <div className="min-h-[100dvh] bg-bg-outer flex justify-center overflow-x-clip px-3 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1100px] relative">
        <div className="relative flex items-start gap-1.5 sm:gap-3">
          {/* Book — higher stacking order so it covers the tabs */}
          <div className="relative min-w-0 flex-1 bg-bg-page rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-visible z-10">
            <NotebookPage>
              <div className="px-3 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-12">
                {children}
              </div>
            </NotebookPage>
          </div>

          {/* Tabs — sibling of the book, lower z-index so book overlaps them */}
          <div className="absolute top-0 right-0 h-full z-0" style={{ transform: 'translateX(50%)' }}>
            <div className="sticky top-6 flex flex-col gap-1 sm:gap-3 ml-2 sm:ml-4 mt-6 pointer-events-auto">
              {categories.map((tab) => renderTab(tab))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
