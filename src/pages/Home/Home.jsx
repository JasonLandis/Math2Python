import { Link } from 'react-router-dom';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Home.scss';

export default function Home() {
  return (
    <div className='global-container'>
      <div className='global-title'>
        <InlineMath math="\textit{Subjects}" />
      </div>
      <div className='home-grid'>
        <Link to={'LinearAlgebra'}>Linear Algebra</Link>
        <Link to={'Calculus'}>Calculus</Link>
      </div>
    </div>
  )
}
