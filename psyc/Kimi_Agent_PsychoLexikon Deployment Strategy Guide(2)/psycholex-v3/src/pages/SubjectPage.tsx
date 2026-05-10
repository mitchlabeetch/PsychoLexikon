import { Navigate, useParams } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'
import Subject01 from './Subject01'
import Subject02 from './Subject02'
import Subject03 from './Subject03'
import Subject04 from './Subject04'
import Subject05 from './Subject05'
import Subject06 from './Subject06'
import Subject07 from './Subject07'
import Subject08 from './Subject08'
import Subject09 from './Subject09'
import Subject10 from './Subject10'
import Subject11 from './Subject11'
import Subject12 from './Subject12'

const subjectPages = {
  '01': Subject01,
  '02': Subject02,
  '03': Subject03,
  '04': Subject04,
  '05': Subject05,
  '06': Subject06,
  '07': Subject07,
  '08': Subject08,
  '09': Subject09,
  '10': Subject10,
  '11': Subject11,
  '12': Subject12,
} as const

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>()
  const normalizedId = id?.match(/^\d{1,2}$/) ? id.padStart(2, '0') : id

  if (!normalizedId) {
    return <Navigate to="/" replace />
  }

  if (normalizedId !== id) {
    return <Navigate to={`/thema/${normalizedId}`} replace />
  }

  const SubjectComponent = subjectPages[normalizedId as keyof typeof subjectPages]

  if (!SubjectComponent) {
    return (
      <NotFoundPage
        title="Dieses Thema wurde nicht gefunden"
        description={`Für „${normalizedId}“ gibt es aktuell keine veröffentlichte Seite.`}
      />
    )
  }

  return <SubjectComponent />
}
