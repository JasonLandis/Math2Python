import { InlineMath } from 'react-katex';
import Back from '../../components/Back/Back';
import 'katex/dist/katex.min.css';
import './About.scss';

export default function About() {
  return (
    <div className='global-container'>
      <Back destination='/' text='Subjects' />
      <div className='global-title'>
        <InlineMath math="\textit{About}" />
      </div>
      <div>This is a website where I represent interesting Math subjects using Python. The sources where I get the information from are listed with each lesson.</div>
    </div>
  )
}
