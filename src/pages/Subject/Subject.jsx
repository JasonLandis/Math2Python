import { Link } from 'react-router-dom';
import { BlockMath } from 'react-katex';
import Back from '../../components/Back/Back';
import ToTop from '../../components/ToTop/ToTop';
import { lessons } from '../../lessons/lessons';
import 'katex/dist/katex.min.css';
import './Subject.scss'

export default function Subject({ subject }) {
  return (
    <div className='global-container'>
      <Back destination='/' text='Subjects' />
      <div className='global-title'>
        {lessons[subject].title}
      </div>
      <div className='subject-grid'>
        {Object.entries(lessons[subject]["lessons"]).map(([key, value]) => (
          <Link key={key} to={key}>
            <div className='subject-lesson-title'>{ value.title }</div>
            <BlockMath math={value.representation} />
          </Link>
        ))}
      </div>
      <ToTop />
    </div>
  )
}
