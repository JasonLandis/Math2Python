import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function ThreeDimTransformations() {
  return (
    <>
      <div>
        Any time you see a matrix. You can imagine it as describing some linear transformation. 
        The following is an example of this in 3 dimensions. All of the rules described in the
        previous lesson apply for all dimensions.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            2 & 4 & 5 \\
            -1 & 0 & 3 \\
            -2 & 3 & 3
          \end{bmatrix}
          \begin{bmatrix} 2 \\ 1 \\ -3 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -7 \\ -11 \\ -10 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

vector = np.array([[2], 
                   [1], 
                   [-3]])

matrix = np.array([[2, 4, 5], 
                   [-1, 0, 3], 
                   [-2, 3, 3]])

print('Output vector:')
print(matrix @ vector)`
        } editable={true} />
      </div>
    </>
  )
}
