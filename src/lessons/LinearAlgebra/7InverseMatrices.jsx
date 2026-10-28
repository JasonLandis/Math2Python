import { BlockMath } from 'react-katex';
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
        multiply both sides of the equation by the inverse of <strong>A</strong>,
        written as <strong>A<sup>-1</sup></strong>. Since <strong>A<sup>-1</sup>A</strong> equals the
        identity matrix <strong>I</strong> (explained below), which leaves any vector unchanged,
        we are left with <strong>x</strong> on its own.
      </div>
      <div>
        <BlockMath math="\boldsymbol{A^{-1}Ax = A^{-1}v}" />
      </div>
      <div>
        <BlockMath math="\boldsymbol{Ix = A^{-1}v}" />
      </div>
      <div>
        <BlockMath math="\boldsymbol{x = A^{-1}v}" />
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
        <BlockMath math={String.raw`
          \boldsymbol{x}
          \enspace = \enspace
          \begin{bmatrix}
            1 & 0 & 0 \\
            -1 & 1 & 0 \\
            0 & -1 & 1
          \end{bmatrix}
          \begin{bmatrix} 4 \\ 2 \\ -1 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 4 \\ -2 \\ -3 \end{bmatrix}
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

A_inv = np.linalg.inv(A)

print("Inverted matrix A:")
print(A_inv, '\\n')

x = A_inv @ v
print("Vector x:")
print(x, '\\n')

print("Verify vector v:")
print(A @ x)`
        } editable={true} />
      </div>
      <div>
        Multiplying a matrix with its inverse will give you the <strong>identity matrix</strong>. The
        identity matrix is an n x n square matrix with 1s on the main diagonal and 0s everywhere else.
        As a transformation, the identity matrix leaves every vector exactly where it is, since its
        columns show that the basis vectors stay in place. This is why multiplying by <strong>A<sup>-1</sup></strong> undoes <strong>A</strong>.
        The order does not matter here: both <strong>A<sup>-1</sup>A</strong> and <strong>AA<sup>-1</sup></strong> equal <strong>I</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{I_n} = \begin{bmatrix}
            1 & 0 & \cdots & 0 \\
            0 & 1 & \cdots & 0 \\
            \vdots & \vdots & \ddots & \vdots \\
            0 & 0 & \cdots & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[1, 0, 0],
              [1, 1, 0],
              [1, 1, 1]])

A_inv = np.linalg.inv(A)

print("3D identity matrix:")
print(A @ A_inv)`
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
      <div>
        <Note>
          In standard Python, NumPy raises a <strong>LinAlgError</strong> when you try to invert a matrix
          with a determinant of 0. In the browser version of Python used on this site, that error can't be
          raised, so NumPy returns a matrix filled with nan (not a number) instead.
        </Note>
      </div>
      <div>
        The <strong>column space</strong> of a matrix is the span of its columns. The column space
        of the matrix below is 2D because the set of all linear combinations that can be
        produced by the columns of the matrix as vectors is all of 2D space.
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
        The columns of this matrix, [1, 2] and [2, 4], are the same linearly dependent vectors from
        the linear combinations lesson. Both have a y-coordinate that is twice the x-coordinate, so
        the column space of <strong>A</strong> is just the line y = 2x. The vector <strong>v</strong> = [1, 0] is
        not on that line, so it is not in the column space.
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
      <div>
        <Note>
          Unlike <strong>np.linalg.inv()</strong>, which fails if the determinant of a given matrix is
          0, <strong>np.linalg.pinv()</strong> always returns a best-fit solution for <strong>x</strong>.
          We can then reconstruct <strong>v</strong> by computing <strong>Ax</strong> and compare it to the
          original. If both vectors match, <strong>v</strong> lies in the column space of <strong>A</strong>. Try updating
          vector <strong>v</strong> above to be some vector that is in the column space of <strong>A</strong>.
        </Note>
      </div>
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

print("Rank of matrix C:", np.linalg.matrix_rank(C))

D = np.array([[1, 2],
              [2, 4]])

print("Rank of matrix D (the column space example above):", np.linalg.matrix_rank(D))`
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
        there are infinitely many vectors that get squished down to the origin. For a full rank matrix,
        the only vector that lands on the origin is the zero vector itself, so the null space contains
        only the zero vector.
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
      <div>
        <Note>
          In the example above, there are infinitely many vectors in the null space. More specifically,
          any vector that follows the pattern <strong>[0, 0, z]</strong> is in the null space. Try updating
          the z coordinate of vector <strong>x</strong> above and notice how the output vector continues
          to be the zero vector.
        </Note>
      </div>
    </>
  )
}
