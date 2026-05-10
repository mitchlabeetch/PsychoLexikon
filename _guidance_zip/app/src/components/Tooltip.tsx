import { useState, useRef, useCallback } from 'react'

interface TooltipProps {
  content: string
  children: React.ReactNode
  variant?: 'blue' | 'red'
}

export default function Tooltip({ content, children, variant = 'blue' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const showTooltip = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const tooltipWidth = 320
      let left = rect.left + rect.width / 2 - tooltipWidth / 2
      left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8))
      setPosition({
        top: rect.bottom + 8,
        left,
      })
    }
    setIsVisible(true)
  }, [])

  const hideTooltip = useCallback(() => {
    setIsVisible(false)
  }, [])

  const bgColor = variant === 'blue' ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]'

  return (
    <span
      ref={triggerRef}
      className="relative inline cursor-help"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      <span
        className={
          variant === 'blue'
            ? 'bg-blue-100 text-[#1a1a1a] px-1 rounded'
            : 'bg-red-100 text-[#1a1a1a] px-1 rounded'
        }
      >
        {children}
      </span>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`fixed z-50 ${bgColor} text-[#f8f6f1] px-3 py-2 rounded-md text-[0.85rem] max-w-[320px] leading-relaxed shadow-lg transition-opacity duration-150`}
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {content}
        </div>
      )}
    </span>
  )
}
