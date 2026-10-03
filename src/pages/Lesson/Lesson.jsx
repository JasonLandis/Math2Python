import { InlineMath } from 'react-katex';
import Back from '../../components/Back/Back';
import ToTop from '../../components/ToTop/ToTop';
import { lessons } from '../../lessons/lessons';
import 'katex/dist/katex.min.css';
import './Lesson.scss';

export default function Lesson({ subject, lesson }) {
  const { Component } = lessons[subject].lessons[lesson];

  return (
    <div className='global-container'>
      <Back destination={`/${subject}`} text={lessons[subject].verbiage} />
      <div className='global-title'>
        <InlineMath math={String.raw`\textit{${lessons[subject].lessons[lesson].title}}`} />
      </div>
      <div className='lesson-sources'>
        {(lessons[subject].lessons[lesson].sources).map((source) => (
          <a href={source} target='_blank'>{source}</a>
        ))}
      </div>
      <div class='lesson-body'>
        <Component />
      </div>
      <ToTop />
    </div>
  )
}
