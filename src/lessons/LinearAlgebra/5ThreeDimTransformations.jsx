import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function ThreeDimTransformations() {
  return (
    <>
      <div>
        Any time you see a matrix, you can imagine it as describing some linear transformation.
        All of the rules described in the previous lessons apply in any number of dimensions.
      </div>
      <div>
        In 3D, there is a third basis vector <strong>k</strong> alongside <strong>i</strong> and <strong>j</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{i} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{j} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{k} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        A 3D linear transformation is described by a 3x3 matrix. The first, second, and third
        columns of the matrix are <strong>i'</strong>, <strong>j'</strong>, and <strong>k'</strong>, where <strong>i</strong>, <strong>j</strong>, and <strong>k</strong> land
        after the transformation. The following is an example of a 3x3 matrix transforming a vector.
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
        Just like in 2D, this is the same as scaling each column of the matrix by the
        matching coordinate of the vector and adding the results together.
      </div>
      <div>
        <BlockMath math={String.raw`
          2 \begin{bmatrix} 2 \\ -1 \\ -2 \end{bmatrix}
          \enspace + \enspace
          1 \begin{bmatrix} 4 \\ 0 \\ 3 \end{bmatrix}
          \enspace + \enspace
          (-3) \begin{bmatrix} 5 \\ 3 \\ 3 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -7 \\ -11 \\ -10 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[2],
              [1],
              [-3]])

M = np.array([[2, 4, 5],
              [-1, 0, 3],
              [-2, 3, 3]])

i_calc = v[0, 0] * M[:, [0]]
j_calc = v[1, 0] * M[:, [1]]
k_calc = v[2, 0] * M[:, [2]]

print("Sum of the scaled columns:")
print(i_calc + j_calc + k_calc, '\\n')

print("Output vector using matrix multiplication:")
print(M @ v)`
        } editable={true} />
      </div>
      <div>
        <Note>
          <strong>M[:, [0]]</strong> selects a column of the matrix. The <strong>:</strong> selects
          every row, and <strong>[0]</strong> selects the first column. Putting the column index inside a
          list keeps the result as a 3x1 column vector. Writing <strong>M[:, 0]</strong> instead would
          return a flat 1D array, which prints as a row.
        </Note>
      </div>
      <div>
        Composition works the same way in 3D, and the order in which transformations are
        applied still matters.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

P = np.array([[0, -2, 2],
              [5, 1, 5],
              [1, 4, -1]])

Q = np.array([[3, 1, 0],
              [-1, 2, 1],
              [0, 1, 4]])

print("P @ Q:")
print(P @ Q, '\\n')

print("Q @ P:")
print(Q @ P)`
        } editable={true} />
      </div>
    </>
  )
}
