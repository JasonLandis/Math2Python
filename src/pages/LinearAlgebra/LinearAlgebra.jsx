import { Link } from 'react-router-dom';
import '../Topic.css'

export default function Topic() {
  return (
    <div className='topic-container'>
      <Link to={'Vectors'} className='topic-link'>1. Vectors</Link>
      <Link to={'Vectors'} className='topic-link'>2. Vectors</Link>
      <Link to={'Vectors'} className='topic-link'>3. Vectors</Link>
      <Link to={'Vectors'} className='topic-link'>4. Vectors</Link>
      <Link to={'Vectors'} className='topic-link'>5. Vectors</Link>
    </div>
  )
}
