import { BlockMath } from 'react-katex';
import Note from '../../components/Note/Note';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function MatrixMultiplication() {
  return (
    <>
      <div>
        Let's say we have two linear transformation matrices.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{m1} =
          \begin{bmatrix}
            3 & -2 \\
            4 & 1
          \end{bmatrix}
          \quad\quad\quad\quad
          \boldsymbol{m2} =
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        Let's say we want to find out where the following vector <strong>v</strong> lands
        following both of these transformations.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat v} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}
        `} />
      </div>
      <div>
        We can compute this by applying one transformation after the other. We find out the transformed
        vector <strong>v</strong> following the first transformation, then apply the second transformation
        to that transformed vector.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            3 & -2 \\
            4 & 1
          \end{bmatrix}
          \begin{bmatrix} 1 \\ 3 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -3 \\ 7 \end{bmatrix}
          \enspace\rightarrow\enspace
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
          \begin{bmatrix} -3 \\ 7 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -19 \\ 23 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1], 
              [3]])

m1 = np.array([[3, -2], 
               [4, 1]])

m2 = np.array([[4, -1], 
               [-3, 2]])

m1_vector = m1 @ v
print('Vector v after the first transformation:')
print(m1_vector)
print("")

m2_vector = m2 @ m1_vector
print('Vector v after the second transformation:')
print(m2_vector)`
        } editable={true} />
      </div>
      <div>
        Another way to do this is to first calculate the <strong>composition matrix</strong> that
        describes both linear transformations.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
          \begin{bmatrix}
            3 & -2 \\
            4 & 1
          \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix}
            8 & -8 \\
            -1 & 9
          \end{bmatrix}
        `} />
      </div>
      <Note>
        When represented mathematically and programatically, think of the transformations 
        as being applied from right to left. Notice how the matrix <strong>m1</strong> above
        is to the right of matrix <strong>m2</strong>. Transformation matrix <strong>m1</strong> is
        being applied first here.
      </Note>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1], 
              [3]])

m1 = np.array([[3, -2], 
               [4, 1]])

m2 = np.array([[4, -1], 
               [-3, 2]])

comp_matrix = m2 @ m1
print('Composition matrix:')
print(comp_matrix)
print("")

final_vector = comp_matrix @ v
print('Transformed vector v:')
print(final_vector)`
        } editable={true} />
      </div>
      <Note>
        Notice how the final transformed vector <strong>v</strong> here is the same when calculated 
        in both code snippets.
      </Note>
      <div>
        The order in which transformations are applied matter. As you can see below,
        we get two different composition matrices depending on the order in which the
        transformations are applied.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

m1 = np.array([[3, 2], 
               [1, -2]])

m2 = np.array([[2, -4], 
               [-1, 2]])

print('m1 @ m2:')
print(m1 @ m2)
print("")

print('m2 @ m1:')
print(m2 @ m1)`
        } editable={true} />
      </div>
      <div>
        However, as long as the order of matrices is consistent, the order in which they are multiplied
        together does not matter. You can think of this as the order in which linear transformations
        are applied never changes. You're just computing composition matrices at different points.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[4, -1], 
              [2, 3]])

B = np.array([[-1, 1], 
              [1, 2]])

C = np.array([[0, 3], 
              [4, 2]])

print('A(BC):')
print(A @ (B @ C))
print("")

print('(AB)C:')
print((A @ B) @ C)`
        } editable={true} />
      </div>
    </>
  )
}
