import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function NonsquareMatrices() {
  return (
    <>
      <div>
        Below is a 3x2 matrix. It has 3 rows and 2 columns. You can think of its columns as two
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
        The number of rows is the dimension of the <strong>output space</strong>, and the number of columns
        is the dimension of the <strong>input space</strong>. Therefore, the matrix above describes a linear
        transformation that takes 2D vectors and outputs 3D vectors. Every 2D input lands somewhere on a
        flat plane that passes through the origin in 3D space, so the column space is a 2D plane inside
        3D space rather than all of 3D space.
      </div>
      <div>
        The rank of the matrix is at most 2, since two vectors can't span more than 2D space. It's
        exactly 2 here because the two columns, [1, -2, -1] and [2, 3, 1], are linearly independent.
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
        coordinate. It represents a linear transformation that squishes 3D space down onto 2D
        space. Since a whole dimension is lost, there is an entire line of 3D vectors that lands on
        the origin. In other words, this matrix has a 1D null space. For example, the
        vector [10, 9, -7] lands on the origin.
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
        The rank of the matrix is at most 2, since 2D vectors can't span more than 2D space. It's
        exactly 2 here because the first two columns, [1, 2] and [2, -3], are linearly independent.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

B = np.array([[1, 2, 4],
              [2, -3, -1]])

print("Rank:", np.linalg.matrix_rank(B))`
        } editable={true} />
      </div>
      <div>
        <Note>
          The maximum possible rank of a matrix is <strong>min(m, n)</strong> where m is the number of
          rows and n is the number of columns of the matrix.
        </Note>
      </div>
      <div>
        When computing <strong>AB</strong>, which applies <strong>B</strong> first, the output
        dimension of <strong>B</strong> must match the input dimension of <strong>A</strong>.
        Below, <strong>A</strong> has an input dimension of 2 and <strong>B</strong> has an output
        dimension of 2. The size of the resulting matrix will be 3x3, since <strong>A</strong> has an
        output dimension of 3 and <strong>B</strong> has an input dimension of 3.
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

print("Composition matrix:")
print(A @ B)`
        } editable={true} />
      </div>
      <div>
        <Note>
          Try changing the print statement in the code snippet above to <strong>B @ A</strong> and
          notice how the shape of the composition matrix changes to be 2x2. Unlike <strong>AB</strong>,
          the matrix <strong>BA</strong> is full rank (rank 2). Going from 2D to 3D and back to 2D does not
          lose a dimension, but going from 3D to 2D and back to 3D does. This is explained below.
        </Note>
      </div>
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
        This also means the determinant of <strong>AB</strong> is 0, so <strong>AB</strong> cannot be inverted.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 2],
              [-2, 3],
              [-1, 1]])

B = np.array([[1, 2, 4],
              [2, -3, -1]])

AB = A @ B

print("Rank:", np.linalg.matrix_rank(AB))
print("Determinant:", np.linalg.det(AB))`
        } editable={true} />
      </div>
      <div>
        <Note>
          The determinant above may print as a tiny number very close to 0 instead of exactly 0. This
          is the same floating-point rounding described in the determinant lesson.
        </Note>
      </div>
    </>
  )
}
