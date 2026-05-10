import { useParams } from 'react-router-dom'
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

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>()

  switch (id) {
    case '01':
      return <Subject01 />
    case '02':
      return <Subject02 />
    case '03':
      return <Subject03 />
    case '04':
      return <Subject04 />
    case '05':
      return <Subject05 />
    case '06':
      return <Subject06 />
    case '07':
      return <Subject07 />
    case '08':
      return <Subject08 />
    case '09':
      return <Subject09 />
    case '10':
      return <Subject10 />
    case '11':
      return <Subject11 />
    case '12':
      return <Subject12 />
    default:
      return (
        <div className="py-12">
          <h1 className="font-display font-bold text-[2rem] text-text-primary mb-4">
            Thema {id}
          </h1>
          <p className="font-body text-text-secondary">
            Dieses Thema ist noch nicht verfügbar.
          </p>
        </div>
      )
  }
}
