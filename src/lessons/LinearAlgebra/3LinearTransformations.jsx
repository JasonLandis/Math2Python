import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function LinearTransformations() {
  return (
    <>
      <div>
        Let's say we have the following basis vectors <strong>i</strong> and <strong>j</strong>, and some
        other vector <strong>v</strong> within this system.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
          \quad\quad\quad
          \boldsymbol{\hat v} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}
        `} />
      </div>
      <div>
        Now let's say this system goes through a <strong>linear transformation</strong> that 
        brings the basis vectors to the following locations.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat i} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat j} = \begin{bmatrix} -2 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        We can deduce where the linear transformation brings vector <strong>v</strong> because
        we know where both of the basis vectors landed.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[2], 
              [3]])

transformed_i = np.array([[1], 
                          [3]])

transformed_j = np.array([[-2], 
                          [2]])

i_calc = v[0][0] * transformed_i
j_calc = v[1][0] * transformed_j
transformed_vector = i_calc + j_calc

print('Transformed basis vector i scaled by the x-coordinate of vector v:')
print(i_calc)
print('')

print('Transformed basis vector j scaled by the y-coordinate of vector v:')
print(j_calc)
print('')

print('Transformed original vector (sum of vectors above):')
print(transformed_vector)`
        } editable={true} />
      </div>
      <div>
        The transformed basis vectors can also be represented as a matrix. The first column of this
        matrix contains the transformed vector <strong>i</strong> and the second column of this
        matrix contains the transformed vector <strong>j</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat v} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}
          \quad\quad
          \text{transformation matrix} =
          \begin{bmatrix}
            1 & -2 \\
            3 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        Now, you can use matrix multiplication to determine the landing spot of the original
        vector <strong>v</strong> following the linear transformation.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            1 & -2 \\
            3 & 2
          \end{bmatrix}
          \begin{bmatrix} 2 \\ 3 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -4 \\ 12 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[2], 
              [3]])

transformation_matrix = np.array([[1, -2], 
                                  [3, 2]])

print(transformation_matrix @ v)`
        } editable={true} />
      </div>
      <div>
        <Note>
          Notice how the transformed vector <strong>v</strong> is the same as 
          determined through both code snippets.
        </Note>
      </div>
    </>
  )
}
