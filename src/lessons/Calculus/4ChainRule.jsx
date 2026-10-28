import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function ChainRule() {
  return (
    <>
      <div>
        Hello World
      </div>
      <div>
        <Equation math={String.raw`Hello World`} />
      </div>
      <div>
        <CodeBlock code={
`print('Hello World')`
        } editable={true} />
      </div>
    </>
  )
}
