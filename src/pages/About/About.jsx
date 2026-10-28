import Back from '../../components/Back/Back';
import 'katex/dist/katex.min.css';
import './About.scss';

export default function About() {
  return (
    <div className='global-container'>
      <Back destination='/' text='Subjects' />
      <div className='global-title'>
        About
      </div>
      <div>
        This is a website where I represent math subjects I find interesting using Python. The purpose is
        to show how these math subjects can be applied in code. Each lesson lists its source, 
        and I highly recommend reading those directly, since my lessons aren't comprehensive. I will, 
        however, include key points and definitions along with the code snippets. Thanks for stopping by!
      </div>
      <br />
      <div>
        - Jason
      </div>
    </div>
  )
}
