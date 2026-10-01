import { Link } from 'react-router-dom';
import '../Topic.scss'

export default function Topic() {
  return (
    <div className='topic-container'>
      <Link to={'/'} className='back'>← Back</Link>
      <div className='topic-title'>Linear Algebra</div>
      <div className='topic-links'>
        <Link to={'Vectors'} className='topic-link'>Vectors</Link>
        <Link to={'Vectors'} className='topic-link'>2. Vectorsa sdfa sdf asdf asd f</Link>
        <Link to={'Vectors'} className='topic-link'>3. Vectors</Link>
        <Link to={'Vectors'} className='topic-link'>4. Vectors</Link>
        <Link to={'Vectors'} className='topic-link'>5. Vectors</Link>
      </div>
    </div>
  )
}
