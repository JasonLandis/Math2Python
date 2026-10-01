import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav>
      <span style={{ fontSize: 20 }}><InlineMath math="\text{Math}" /></span><span style={{ fontSize: 18 }}>&nbsp;~ 2 ~&nbsp;</span><code style={{ fontSize: 22 }}>Python</code>
    </nav>
  )
}
