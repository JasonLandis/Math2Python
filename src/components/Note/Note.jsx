import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Note.scss'

export default function Note({children}) {
  return (
    <div className='note'>
      <BlockMath math="\boldsymbol{Note}" />
      {children}
    </div>
  )
}
