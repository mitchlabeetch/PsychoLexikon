import { Link, Navigate, useParams } from 'react-router-dom'
import SubjectCard from '@/components/SubjectCard'
import { listArticlesByCategory } from '@/content/api'
import { HOME_PATH } from '@/routing/routes'
import { getCategoryBySlug } from '@/content/taxonomy'
import NotFoundPage from './NotFoundPage'

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) {
    return <Navigate to={HOME_PATH} replace />
  }

  const category = getCategoryBySlug(slug)
  if (!category) {
    return (
      <NotFoundPage
        title="Diese Kategorie wurde nicht gefunden"
        description={`Für „${slug}“ gibt es aktuell keine veröffentlichte Kategorieseite.`}
      />
    )
  }

  const articles = listArticlesByCategory(category.id)

  return (
    <section className="font-body text-text-primary">
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 sm:gap-2 font-body text-[0.75rem] sm:text-[0.875rem] text-text-muted flex-wrap text-wrap">
          <li>
            <Link to={HOME_PATH} className="hover:underline">
              PsychoLexicon
            </Link>
          </li>
          <li>/</li>
          <li className="truncate">{category.label}</li>
        </ol>
      </nav>

      <header className="mb-10">
        <span
          className="mb-4 inline-block rounded-full px-3 py-1 font-body text-[0.7rem] font-medium uppercase tracking-wide"
          style={{ backgroundColor: `${category.color}33`, color: category.color }}
        >
          Kategorie
        </span>
        <h1 className="mb-3 font-display text-[1.5rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2rem]">
          {category.label}
        </h1>
        <p className="max-w-[720px] text-[0.9rem] leading-relaxed text-text-secondary sm:text-[1rem]">
          {category.description}
        </p>
        <p className="mt-3 text-[0.75rem] text-text-secondary">
          {articles.length} {articles.length === 1 ? 'Artikel' : 'Artikel'} in dieser Kategorie
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <SubjectCard key={article.id} subject={article} />
        ))}
      </div>
    </section>
  )
}
