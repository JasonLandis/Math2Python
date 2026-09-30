import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <InlineMath math="\text{Math}" />-2-<code>Python</code>
    </nav>
  )
}
