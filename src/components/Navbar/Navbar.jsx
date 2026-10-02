import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav>
      <span style={{ fontSize: 18 }}><InlineMath math="\textit{Math + 2 = Python}" /></span>
      <span style={{ fontSize: 15, opacity: 0.8 }}><InlineMath math="\textit{Describing mathematical concepts in code}" /></span>
    </nav>
  )
}
