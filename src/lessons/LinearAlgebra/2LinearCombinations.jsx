import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function LinearCombinations() {
  return (
    <>
      <div>
        Let's say we have the 2 basis vectors below.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\^i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{\^j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        If you scale each of these basis vectors by some scalar and then add the two resultant vectors together,
        you get a new vector that is a linear combination of those basis vectors.
      </div>
      <div>
        <BlockMath math={String.raw`
          3 \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \enspace + \enspace
          4 \begin{bmatrix} 0 \\ 1 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 3 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([[1], 
              [0]])

j = np.array([[0], 
              [1]])

scaledI = 3 * i # Scalar of 3 applied to basis vector i
scaledJ = 4 * j # Scalar of 4 applied to basis vector j

linearCombination = scaledI + scaledJ
print(linearCombination)`
        } editable={true} />
      </div>
      <div>
        The set of all possible vectors that can be reached with linear combinations of a 
        given pair of vectors is called the <strong>span</strong> of those two vectors.
      </div>
      <div>
        Below is an example of two vectors that are linearly dependent.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          and
          \begin{bmatrix} 2 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        Notice that both of the vectors above have a y-coordinate that
        is twice as much as the x-coordinate. Because of this, the vectors
        fall on the same line. Any linear combination of these vectors will
        also fall on this line.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([[1], 
              [2]])

j = np.array([[2], 
              [4]])

scaledI = -2 * i
scaledJ = 5 * j

linearCombination = scaledI + scaledJ
print(linearCombination)`
        } editable={true} />
      </div>
      <div>
        One method to compute the rank of a matrix. Adjust the values of the
        vectors below and notice how the matrix rank changes.
      </div>
            <div>
        <CodeBlock code={
`import numpy as np

i = np.array([[1], 
              [2]])

j = np.array([[2], 
              [4]])

print(np.linalg.matrix_rank(np.array([i, j]).T))`
        } editable={true} />
      </div>
    </>
  )
}
