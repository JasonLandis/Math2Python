import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function NonsquareMatrices() {
  return (
    <>
      <div>
        Below is a 3x2 matrix. It has 3 rows and 2 columns. You can think of it's columns as two
        vectors, each having an x, y, and z coordinate.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            1 & 2 \\
            -2 & 3 \\
            -1 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        The number of rows a matrix has is the <strong>output space</strong> and the number of columns
        a matrix has is the <strong>input space</strong>. Therefore, the matrix above describes a linear 
        transformation that transforms 2D space into 3D space. The rank of the matrix is 2 because
        two 3D vectors can only ever span a maximum of 2D space.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 2],
              [-2, 3],
              [-1, 1]])

print("Rank:", np.linalg.matrix_rank(A))`
        } editable={true} />
      </div>
      <div>
        Below is a 2x3 matrix. You can think of its columns as three vectors, each having an x and y 
        coordinate. It represents a linear transformation that transforms 3D space into
        2D space. The rank of the matrix is 2 because three 2D vectors can only ever span
        a maximum of 2D space.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            1 & 2 & 4 \\
            2 & -3 & -1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 2, 4],
              [2, -3, -1]])

print("Rank:", np.linalg.matrix_rank(A))`
        } editable={true} />
      </div>
      <Note>
        The maximum possible rank of a matrix is <strong>min(m, n)</strong> where m and n are the rows
        and columns of the matrix.
      </Note>
      <div>
        When multiplying two matrices together <strong>A</strong> and <strong>B</strong>, the output space 
        of <strong>B</strong> must match the input space of <strong>A</strong>. Below, <strong>A</strong> has an input 
        space of 2 and <strong>B</strong> has an output space of 2. The size of the resulting matrix will
        be 3x3, since <strong>A</strong> has an output space of 3 and <strong>B</strong> has an input
        space of 3.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} = 
          \begin{bmatrix} 
            1 & 2 \\ 
            -2 & 3 \\ 
            -1 & 1 
          \end{bmatrix}
          \quad\quad
          \boldsymbol{B} = 
          \begin{bmatrix} 
            1 & 2 & 4 \\ 
            2 & -3 & -1 
          \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 
            1 & 2 \\ 
            -2 & 3 \\ 
            -1 & 1 
          \end{bmatrix}
          \begin{bmatrix} 
            1 & 2 & 4 \\ 
            2 & -3 & -1 
          \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 
            5 & -4 & 2 \\ 
            4 & -13 & -11 \\ 
            1 & -5 & -5 
          \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 2],
              [-2, 3],
              [-1, 1]])

B = np.array([[1, 2, 4],
              [2, -3, -1]])

print("Composition Matrix:")
print(A @ B)`
        } editable={true} />
      </div>
      <Note>
        Try changing the print statement in the code snippet above to <strong>B @ A</strong> and
        notice how the shape of the composition matrix changes to be 2x2.
      </Note>
      <div>
        Now we have a new 3x3 matrix <strong>AB</strong> that represents the composition of 
        matrices <strong>A</strong> and <strong>B</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{AB} = 
          \begin{bmatrix} 
            5 & -4 & 2 \\ 
            4 & -13 & -11 \\ 
            1 & -5 & -5 
          \end{bmatrix}
        `} />
      </div>
      <div>
        You might assume the matrix above has rank 3 because it has 3 rows and 3 columns.
        However, it represents the composition of <strong>A</strong> and <strong>B</strong>. 
        Matrix <strong>B</strong> squishes space from 3D down to 2D, then matrix <strong>A</strong> maps 
        space back up from 2D to 3D. The dimension lost in linear transformation <strong>B</strong> can
        never be recovered, so the rank is at most 2 and the columns must be linearly dependent.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

AB = np.array([[5, -4, 2],
              [4, -13, -11],
              [1, -5, -5]])

print("Rank:", np.linalg.matrix_rank(AB))`
        } editable={true} />
      </div>
    </>
  )
}
