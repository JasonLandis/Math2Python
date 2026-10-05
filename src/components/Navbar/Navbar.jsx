import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav>
      <span style={{ fontSize: 22 }}><InlineMath math="\textit{Math 2 Python}" /></span>
      <input />
      <div>About</div>
      <div>Github</div>
      <div>Toggle</div>
    </nav>
  )
}
