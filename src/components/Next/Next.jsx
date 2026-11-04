import { Link } from 'react-router-dom';
import './Next.scss'

export default function Next({destination}) {
  return (
      <Link to={destination} className='next'>Next →</Link>
  )
}
