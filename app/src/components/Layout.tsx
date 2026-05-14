import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getArticleById, getArticleCategory } from '@/content/api'
import { buildCategoryPath } from '@/routing/routes'
import { getCategoryBySlug, listCategories } from '@/content/taxonomy'
import NotebookPage from './NotebookPage'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const bookRef = useRef<HTMLDivElement>(null)
  const tabsContainerRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const categories = listCategories()
  const activeCategoryId = (() => {
    const categoryMatch = pathname.match(/^\/kategorie\/([^/]+)$/)
    if (categoryMatch) {
      return getCategoryBySlug(categoryMatch[1])?.id
    }

    const articleMatch = pathname.match(/^\/thema\/([^/]+)$/)
    if (articleMatch) {
      const article = getArticleById(articleMatch[1])
      return article ? getArticleCategory(article)?.id : undefined
    }

    return undefined
  })()

  // Calculate dynamic position for tabs based on book div's right edge
  useEffect(() => {
    const updatePosition = () => {
      if (bookRef.current && tabsContainerRef.current) {
        const bookRect = bookRef.current.getBoundingClientRect()
        const tabsRect = tabsContainerRef.current.getBoundingClientRect()
        
        // Position tabs to start 16px left of book's right edge
        const bookRightEdge = bookRect.right
        const desiredTabsLeft = bookRightEdge - 16
        const currentTabsLeft = tabsRect.left
        
        const offset = desiredTabsLeft - currentTabsLeft
        setTranslateX(offset)
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  const renderTab = (tab: (typeof categories)[number]) => (
    <NavLink
      key={tab.id}
      to={buildCategoryPath(tab.slug)}
      className={({ isActive }) =>
        [
          'font-body font-medium text-[#1a1a1a] transition-all duration-300 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/20',
          'rounded-r-lg px-1.5 py-3 text-[clamp(0.5rem,1vh,0.7rem)] shadow-sm hover:translate-x-1 tab-vertical',
          isActive || activeCategoryId === tab.id ? 'translate-x-1 shadow-[0_8px_20px_rgba(0,0,0,0.14)]' : '',
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
    <div className="min-h-[100dvh] bg-bg-outer flex justify-center overflow-x-clip pl-3 pr-6 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1100px] relative">
        <div className="relative flex items-stretch gap-0">
          {/* Book — higher stacking order so it covers the tabs */}
          <div ref={bookRef} className="relative min-w-0 flex-1 pb-16 bg-bg-page rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-visible z-10">
            <NotebookPage>
              <div className="px-1.5 py-8 text-[10px] sm:px-10 sm:py-12 sm:text-base lg:px-16 lg:py-12">
                {children}
              </div>
            </NotebookPage>
          </div>

          {/* Tabs — always on the right, vertical at all breakpoints */}
          <div ref={tabsContainerRef} className="z-0 shrink-0" style={{ transform: `translateX(${translateX}px)` }}>
            <div className="sticky top-6 flex flex-col gap-1 sm:gap-3 mt-6 pointer-events-auto">
              {categories.map((tab) => renderTab(tab))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
