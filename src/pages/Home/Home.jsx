import { Link } from 'react-router-dom';
import './Home.scss';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-text'>
        This is a website where I apply interesting math subjects to code. Specifically Python.
      </div>
      <div className='home-grid'>
        <Link to={'LinearAlgebra'} className='home-link'>Linear Algebra</Link>
        <Link to={'Calculus'} className='home-link'>Calculus</Link>
      </div>
    </div>
  )
}
