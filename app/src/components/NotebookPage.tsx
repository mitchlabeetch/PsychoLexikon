import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface NotebookPageProps {
  children: ReactNode
}

export default function NotebookPage({ children }: NotebookPageProps) {
  const [holes, setHoles] = useState<number[]>([])

  useEffect(() => {
    // Calculate holes based on page height dynamically
    const calculateHoles = () => {
      const pageElement = document.getElementById('notebook-page')
      if (pageElement) {
        const pageHeight = pageElement.scrollHeight
        const holePositions: number[] = []
        const spacing = 220 // pixels between holes
        let position = 100 // start position

        while (position < pageHeight) {
          holePositions.push(position)
          position += spacing
        }

        setHoles(holePositions)
      }
    }

    // Initial calculation
    calculateHoles()

    // Recalculate on window resize
    window.addEventListener('resize', calculateHoles)

    // Use MutationObserver to detect content changes
    const pageElement = document.getElementById('notebook-page')
    if (pageElement) {
      const observer = new MutationObserver(calculateHoles)
      observer.observe(pageElement, {
        childList: true,
        subtree: true,
        attributes: true,
      })

      return () => {
        observer.disconnect()
        window.removeEventListener('resize', calculateHoles)
      }
    }

    return () => window.removeEventListener('resize', calculateHoles)
  }, [])

  return (
    <div className="relative" id="notebook-page">
      {/* Binder holes on left edge - continuous every 220px */}
      <div className="absolute left-0 top-0 w-8 z-10 pointer-events-none" style={{ height: '100%' }}>
        {holes.map((position) => (
          <div
            key={position}
            className="absolute left-2 w-3 h-3 rounded-full border-2 border-[#ccc] bg-bg-outer shadow-sm"
            style={{ top: `${position}px` }}
          />
        ))}
      </div>

      <div className="pl-10">
        {children}
      </div>
    </div>
  )
}
