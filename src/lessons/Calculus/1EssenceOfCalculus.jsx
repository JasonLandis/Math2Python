import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function EssenceOfCalculus() {
  return (
    <>
      <div>
        Hello World
      </div>
      <div>
        <BlockMath math={String.raw`Hello World`} />
      </div>
      <div>
        <CodeBlock code={
`print('Hello World')`
        } editable={true} />
      </div>
    </>
  )
}
