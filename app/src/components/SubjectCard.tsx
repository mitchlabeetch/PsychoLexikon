import { Link } from 'react-router-dom'
import type { SubjectData } from '@/data/subjects'

interface SubjectCardProps {
  subject: SubjectData
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const { id, subject_meta } = subject
  const { title, discipline, tab_color } = subject_meta

  // Find the lead block text for teaser
  const leadBlock = subject.content_blocks.find((block) => block.type === 'lead')
  const teaser = leadBlock?.text ?? ''

  // Strip markdown bold markers for cleaner teaser display
  const cleanTeaser = teaser.replace(/\*\*/g, '').replace(/\*/g, '')

  return (
    <Link
      to={`/thema/${id}`}
      className="group relative block bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] h-full flex flex-col"
      style={{
        borderLeft: `4px solid ${tab_color}`,
        background: 'linear-gradient(135deg, #fefdfb 0%, #f9f7f3 100%)',
      }}
    >
      {/* Notebook-style decorative hole */}
      <div className="absolute top-4 -left-1 w-2 h-2 rounded-full border border-gray-300 bg-gray-100" />

      <div className="flex flex-col h-full">
        <span
          className="font-body font-medium text-[0.75rem] uppercase tracking-[0.05em] mb-2"
          style={{ color: tab_color }}
        >
          {discipline}
        </span>
        <h3 className="font-display font-bold text-[1.25rem] text-text-primary mb-2 leading-tight group-hover:text-opacity-80 transition-colors">
          {title}
        </h3>
        <p className="font-body text-[0.875rem] text-text-secondary leading-relaxed line-clamp-3 mb-4 flex-grow">
          {cleanTeaser}
        </p>
        <span className="font-body font-medium text-[0.875rem] text-text-primary group-hover:underline inline-flex items-center gap-1 mt-auto">
          Mehr lesen
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
