import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

interface NotebookPageProps {
  children: ReactNode
}

export default function NotebookPage({ children }: NotebookPageProps) {
  const pageRef = useRef<HTMLDivElement>(null)
  const [holes, setHoles] = useState<number[]>([])

  useEffect(() => {
    const calculateHoles = () => {
      const pageElement = pageRef.current
      if (pageElement) {
        const pageHeight = pageElement.scrollHeight
        const holePositions: number[] = []
        const spacing = 220
        let position = 100

        while (position < pageHeight) {
          holePositions.push(position)
          position += spacing
        }

        setHoles((currentHoles) =>
          currentHoles.length === holePositions.length &&
          currentHoles.every((hole, index) => hole === holePositions[index])
            ? currentHoles
            : holePositions,
        )
      }
    }

    let frameId: number | null = null
    const scheduleCalculation = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId)
      }

      frameId = requestAnimationFrame(() => {
        frameId = null
        calculateHoles()
      })
    }

    scheduleCalculation()
    window.addEventListener('resize', scheduleCalculation)

    const pageElement = pageRef.current
    if (pageElement) {
      const observer = new ResizeObserver(scheduleCalculation)
      observer.observe(pageElement)

      return () => {
        observer.disconnect()
        window.removeEventListener('resize', scheduleCalculation)
        if (frameId !== null) {
          cancelAnimationFrame(frameId)
        }
      }
    }

    return () => {
      window.removeEventListener('resize', scheduleCalculation)
      if (frameId !== null) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div ref={pageRef} className="relative" id="notebook-page">
      <div className="absolute left-0 top-0 w-4 sm:w-8 z-10 pointer-events-none" style={{ height: '100%' }}>
        {holes.map((position) => (
          <div
            key={position}
            className="absolute left-1 sm:left-2 w-2 sm:w-3 h-2 sm:h-3 rounded-full border-2 border-[#ccc] bg-bg-outer shadow-sm"
            style={{ top: `${position}px` }}
          />
        ))}
      </div>

      <div className="pl-3 sm:pl-8 min-h-[100dvh]">
        {children}
      </div>
    </div>
  )
}
