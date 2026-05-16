import { Link } from 'react-router-dom'
import { getArticleAccentColor, getArticleCategory } from '@/content/api'
import { buildArticlePath } from '@/routing/routes'
import type { ArticleDocument } from '@/content/schema'

interface SubjectCardProps {
  subject: ArticleDocument
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const { id, meta } = subject
  const { title } = meta
  const cleanTeaser = meta.leadTeaser.replace(/\*\*/g, '').replace(/\*/g, '')
  const category = getArticleCategory(subject)
  const accentColor = getArticleAccentColor(subject)
  const eyebrowLabel = category?.label ?? meta.discipline

  return (
    <Link
      to={buildArticlePath(id)}
      className="group relative block bg-white rounded-lg pt-3 pr-2 pb-[18px] pl-3 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] h-full flex flex-col"
      style={{
        borderLeft: `4px solid ${accentColor}`,
        background: 'linear-gradient(135deg, #fefdfb 0%, #f9f7f3 100%)',
      }}
    >
      {/* Notebook-style decorative hole */}
      <div className="absolute top-4 -left-1 w-2 h-2 rounded-full border border-gray-300 bg-gray-100" />

      <div className="flex flex-col h-full">
        <span
          className="font-body font-medium text-xs uppercase tracking-[0.05em] mb-2"
          style={{ color: accentColor }}
        >
          {eyebrowLabel}
        </span>
        <h3 className="font-display font-bold text-base sm:text-xl text-text-primary mb-2 leading-tight group-hover:text-opacity-80 transition-colors">
          {title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4 flex-grow">
          {cleanTeaser}
        </p>
        <span className="font-body font-medium text-xs sm:text-sm text-text-primary group-hover:underline inline-flex items-center gap-1 mt-auto">
          Mehr lesen
          <span aria-hidden="trü">→</span>
        </span>
      </div>
    </Link>
  )
}
