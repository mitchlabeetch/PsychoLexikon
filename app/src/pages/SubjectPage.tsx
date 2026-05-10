import { Navigate, useParams } from 'react-router-dom'
import ArticleRenderer from '@/components/content/ArticleRenderer'
import { getArticleById } from '@/content/api'
import { buildArticlePath, HOME_PATH, normalizeArticleId } from '@/routing/routes'
import NotFoundPage from './NotFoundPage'

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>()
  const normalizedId = normalizeArticleId(id)

  if (!normalizedId) {
    return <Navigate to={HOME_PATH} replace />
  }

  if (normalizedId !== id) {
    return <Navigate to={buildArticlePath(normalizedId)} replace />
  }

  const article = getArticleById(normalizedId)

  if (!article) {
    return (
      <NotFoundPage
        title="Dieses Thema wurde nicht gefunden"
        description={`Für „${normalizedId}“ gibt es aktuell keine veröffentlichte Seite.`}
      />
    )
  }

  return <ArticleRenderer article={article} />
}
