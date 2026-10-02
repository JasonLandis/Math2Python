import { Link } from 'react-router-dom';
import './Back.scss'

export default function Back({destination, text}) {
  return (
      <Link to={destination} className='back'>← Back to {text}</Link>
  )
}
