import { Link } from 'react-router-dom';
import { InlineMath } from 'react-katex';
import { lessons } from '../../lessons/lessons';
import 'katex/dist/katex.min.css';
import './Home.scss';

export default function Home() {
  return (
    <div className='global-container'>
      <div className='global-title'>
        <InlineMath math="\textit{Subjects}" />
      </div>
      <div className='home-grid'>
        {Object.entries(lessons).map(([key, value]) => (
          <Link key={key} to={key}>
            <div>{ value.title }</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
