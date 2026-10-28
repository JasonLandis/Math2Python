import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Equation.scss'

// Rules for writing math passed to <Equation>:
// 1. Separate distinct ideas on the same line with \qquad so they can wrap on small screens.
// 2. Avoid adding manual spacing like \quad or \enspace; KaTeX spaces things well on its own.
// 3. Prefer basic arrows like \rightarrow over long ones like \Longrightarrow.
// 4. Write the math in the source so it's easy to read.

// Splits on top-level \qquad so each expression can wrap onto its own line
function splitOnQquads(math) {
  const parts = [];
  const tokens = /\\begin\{[^}]*\}|\\end\{[^}]*\}|(?<!\\)[{}]|\\qquad/g;
  let depth = 0;
  let start = 0;
  let match;

  while ((match = tokens.exec(math))) {
    const token = match[0];
    if (token === '{' || token.startsWith('\\begin')) depth++;
    else if (token === '}' || token.startsWith('\\end')) depth--;
    else if (depth === 0) {
      parts.push(math.slice(start, match.index));
      start = match.index + token.length;
    }
  }
  parts.push(math.slice(start));

  return parts.filter((part) => part.trim());
}

// Display math rendered in inline mode, which lets KaTeX break lines after =, +, arrows, etc.
export default function Equation({ math }) {
  return (
    <div className='equation'>
      {splitOnQquads(math).map((part, i) => (
        <InlineMath key={i} math={String.raw`\displaystyle ${part}`} />
      ))}
    </div>
  )
}
