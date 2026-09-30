import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className='home-container'>
      <Link to={'LinearAlgebra'} className='home-link'>Linear Algebra</Link>
      <Link to={'Calculus'} className='home-link'>Calculus</Link>
    </div>
  )
}
