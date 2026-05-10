import { Link } from 'react-router-dom'

interface NotFoundPageProps {
  title?: string
  description?: string
}

export default function NotFoundPage({
  title = 'Seite nicht gefunden',
  description = 'Die gewünschte Seite existiert nicht oder wurde verschoben.',
}: NotFoundPageProps) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-[560px] flex-col items-center justify-center py-12 text-center">
      <span className="mb-4 rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-text-secondary shadow-sm">
        404
      </span>
      <h1 className="mb-3 font-display text-[2.5rem] font-bold text-text-primary">{title}</h1>
      <p className="mb-8 font-body text-[1rem] leading-relaxed text-text-secondary">{description}</p>
      <Link
        to="/"
        className="rounded-full bg-[#1a1a1a] px-5 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-[#2d2d2d]"
      >
        Zur Startseite
      </Link>
    </section>
  )
}
