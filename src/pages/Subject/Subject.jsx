import { Link } from 'react-router-dom';
import { InlineMath } from 'react-katex';
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
        <InlineMath math={String.raw`\textit{${lessons[subject].verbiage}}`} />
      </div>
      <div className='subject-links'>
        {Object.entries(lessons[subject]["lessons"]).map(([key, value]) => (
          <Link key={key} to={key}>
            <div>{ value.title }</div>
          </Link>
        ))}
      </div>
      <ToTop />
    </div>
  )
}
