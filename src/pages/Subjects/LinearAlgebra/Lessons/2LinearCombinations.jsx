import { InlineMath, BlockMath } from 'react-katex';
import CodeBlock from '../../../../components/CodeBlock/CodeBlock'
import Back from '../../../../components/Back/Back';
import ToTop from '../../../../components/ToTop/ToTop';
import { lessons } from '../lessons';
import 'katex/dist/katex.min.css';
import '../../../Lesson.scss'

const codeBlock1 = `import numpy as np

vector = np.array([1, 2])

vector = np.array([[1], [2]])`

const codeBlock2 = `import numpy as np

vector1 = np.array([[1], [2]])

vector2 = np.array([[3], [-1]])

result = vector1 + vector2
print('Vector addition:')
print(f'{vector1.flatten()} + {vector2.flatten()} = {result.flatten()}')
print('OR')
print(result)`;

const codeBlock3 = `import numpy as np

vector = np.array([[1], [2]])
scaleVal = 3

scaledResult = scaleVal * vector
print('Scalar multiplication:')
print(f'{vector.flatten()} * {scaleVal} = {scaledResult.flatten()}')
print('OR')
print(scaledResult)`;

const codeBlock4 = `import numpy as np

vector1 = np.array([[1], 
                    [2], 
                    [3]])

vector2 = np.array([[4], 
                    [2], 
                    [-1]])

result = vector1 + vector2
scaleVal = 4
scaledResult = result * scaleVal
print('3 Dimensions:')
print(f'{vector1.flatten()} + {vector2.flatten()} = {result.flatten()}')
print(f'{result.flatten()} * {scaleVal} = {scaledResult.flatten()}')
print('OR')
print(scaledResult)`

export default function LinearCombinations() {
  return (
    <div className='global-container'>
      <Back destination='/LinearAlgebra' text='Linear Algebra' />
      <div className='global-title'>
        <InlineMath math={String.raw`\textit{${lessons["LinearCombinations"].title}}`} />
      </div>
      <div className='lesson-source'>
        <a href={lessons["LinearCombinations"].source} target='_blank'>{lessons["LinearCombinations"].source}</a>
      </div>
      <div class='lesson-body'>
        <div><BlockMath math={String.raw`\begin{bmatrix} 1 \\ 2 \end{bmatrix}`} /></div>
        <section>The above is a vector that can be described using numpy in the following ways</section>
        <div><CodeBlock code={codeBlock1} editable={false} /></div>
        <section>Vectors can be added together</section>
        <div><CodeBlock code={codeBlock2} editable={true} /></div>
        <section>Vectors can be scaled by some constant</section>
        <div><CodeBlock code={codeBlock3} editable={true} /></div>
        <section>The following is an example of a 3-dimensional vector</section>
        <div><BlockMath math={String.raw`\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}`} /></div>
        <div><CodeBlock code={codeBlock4} editable={true} /></div>
      </div>
      <ToTop />
    </div>
  )
}
