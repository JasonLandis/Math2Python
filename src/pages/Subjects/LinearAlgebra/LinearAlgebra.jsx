import { Link } from 'react-router-dom';
import { InlineMath } from 'react-katex';
import Back from '../../../components/Back/Back';
import ToTop from '../../../components/ToTop/ToTop';
import { lessons } from './lessons';
import 'katex/dist/katex.min.css';
import '../../Subject.scss'

export default function LinearAlgebra() {
  return (
    <div className='global-container'>
      <Back destination='/' text='Subjects' />
      <div className='global-title'>
        <InlineMath math="\textit{Linear Algebra}" />
      </div>
      <div className='subject-links'>
        {Object.entries(lessons).map(([key, value]) => (
          <Link key={key} to={key}>
            <div>{ value.title }</div>
            <div>{ value.source }</div>
          </Link>
        ))}
      </div>
      <ToTop />
    </div>
  )
}
