import { BlockMath, InlineMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function InverseMatrices() {
  return (
    <>
      <div>
        Let's say we know the placement of some vector after a linear transformation took place and
        we want to find out where that vector was before the linear transformation. Below, <strong>A</strong> represents 
        the transformation matrix, <strong>v</strong> represents the transformed vector, and <strong>x</strong> represents 
        the original vector.
      </div>
      <div>
        <BlockMath math="\boldsymbol{Ax = v}" />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} = \begin{bmatrix}
            1 & 0 & 0 \\
            1 & 1 & 0 \\
            1 & 1 & 1
          \end{bmatrix}
          \quad\quad
          \boldsymbol{v} = \begin{bmatrix} 4 \\ 2 \\ -1 \end{bmatrix}
          \quad\quad
          \boldsymbol{x} = \boldsymbol{?}
        `} />
      </div>
      <div>
        We can solve for <strong>x</strong> by applying the linear 
        transformation <strong>A</strong> to <strong>v</strong> in reverse. To do this, we
        multiply <strong>v</strong> with the inverse of <strong>A</strong>.
      </div>
      <div>
        <BlockMath math="\boldsymbol{A^{-1}v = x}" />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A^{-1}} = \begin{bmatrix}
            1 & 0 & 0 \\
            -1 & 1 & 0 \\
            0 & -1 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 0, 0],
              [1, 1, 0],
              [1, 1, 1]])

v = np.array([[4], 
              [2], 
              [-1]])

inverseA = np.linalg.inv(A)

print("Inverted matrix A:")
print(inverseA, '\\n')

x = inverseA @ v
print("Vector x:")
print(x, '\\n')

print("Verify vector v:")
print(A @ x)`
        } editable={true} />
      </div>
      <div>
        Multiplying a matrix with its own inversion will give you the <strong>identity matrix</strong>. The
        identity matrix is an n x n square matrix with 1s on the main diagonal and 0s everywhere else.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{I_n} = \begin{pmatrix} 
            1 & 0 & \cdots & 0 \\ 
            0 & 1 & \cdots & 0 \\ 
            \vdots & \vdots & \ddots & \vdots \\ 
            0 & 0 & \cdots & 1 
          \end{pmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 0, 0],
              [1, 1, 0],
              [1, 1, 1]])

inverseA = np.linalg.inv(A)

print("3D identity matrix:")
print(A @ inverseA)`
        } editable={true} />
      </div>
      <div>
        Inverting a matrix with a determinant of 0 is not possible. If a matrix has a determinant
        of 0, it means that it squishes space down into a lower dimension. That lost dimension
        cannot be recovered through an inversion.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 0, 0],
              [0, 1, 0],
              [0, 0, 0]])

print("The determinant of A:", np.linalg.det(A), '\\n')

print("Inverse of A is not possible:")
print(np.linalg.inv(A))`
        } editable={true} />
      </div>
      <Note>
        Using NumPy to represent the inverse of a matrix that has a determinant of 0 just reports nan for
        all entries of the matrix as seen in the code output above. At some point during the calcuation
        to invert the matrix, NumPy is dividing by the determinant, which in the case above, is 0.
      </Note>
      <div>
        The <strong>column space</strong> of a matrix is the span of its columns. The column space
        of the matrix below is 2 dimensions because the set of all linear combinations that can be 
        produced by the columns of the matrix as vectors is all of 2-dimensional space.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 
            1 & 3 \\ 
            -2 & 1 
          \end{bmatrix}
        `} />
      </div>
      <div>
        Now, going back to the equation above, <strong>Ax = v</strong>, what would happen if we 
        attempt to solve for <strong>x</strong> when <strong>v</strong> is not in the column 
        space of <strong>A</strong>? There is no solution for <strong>x</strong> because there does not exist a
        vector that, when moved through the linear transformation <strong>A</strong>, lands on vector <strong>v</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} = \begin{bmatrix}
            1 & 2 \\
            2 & 4
          \end{bmatrix}
          \quad\quad
          \boldsymbol{v} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{x} = \boldsymbol{?}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 2],
              [2, 4]])

v = np.array([[1],
              [0]])

x = np.linalg.pinv(A) @ v

print("Approximation for x:")
print(x, '\\n')

print("Reconstruction of v:")
print(A @ x)`
        } editable={true} />
      </div>
      <Note>
        Unlike <strong>np.linalg.inv()</strong>, which fails if the determinant of a given matrix is 
        0, <strong>np.linalg.pinv()</strong> always returns a best-fit solution for <strong>x</strong>.
        We can then reconstruct <strong>v</strong> by computing <strong>Ax</strong> and compare it to the 
        original. If both vectors match, <strong>v</strong> lies in the column space of A. Try updating 
        vector <strong>v</strong> above to be some vector that is in the column space of A.
      </Note>
      <div>
        The <strong>rank</strong> of a matrix is the number of linearly independent columns it 
        has (which always equals the number of linearly independent rows). It is also the dimension of 
        the column space.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 0, 0],
              [0, 1, 0],
              [0, 0, 1]])

print("Rank of matrix A:", np.linalg.matrix_rank(A))

B = np.array([[1, 0, 0],
              [0, 1, 0],
              [0, 0, 0]])

print("Rank of matrix B:", np.linalg.matrix_rank(B))

C = np.array([[1, 0, 0],
              [0, 0, 0],
              [0, 0, 0]])

print("Rank of matrix C:", np.linalg.matrix_rank(C))`
        } editable={true} />
      </div>
      <div>
        A matrix is <strong>full rank</strong> when its rank is as large as possible. In other words, 
        it has no redundant columns or rows. For a square matrix, this means it's invertible 
        and <strong>Ax = v</strong> has exactly one solution for every <strong>v</strong>.
      </div>
      <div>
        The <strong>null space</strong> of a matrix is the set of all vectors <strong>x</strong> for 
        which <strong>Ax = 0</strong>. When a transformation squishes space down into a lower dimension,
        there are infinitely many vectors that get squished down to the origin.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 0, 0],
              [0, 1, 0],
              [0, 0, 0]])

x = np.array([[0],
              [0],
              [1]])

print("Output vector:")
print(A @ x)`
        } editable={true} />
      </div>
      <Note>
        In the example above, there are infinitely many vectors in the null space. More specifically,
        any vector that follows the pattern <strong>[0, 0, z]</strong> is in the null space. Try updating 
        the z coordinate of vector <strong>x</strong> above and notice how the output vector continues 
        to be the vector at the origin.
      </Note>
    </>
  )
}
