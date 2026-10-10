import { BlockMath, InlineMath } from 'react-katex';
import Note from '../../components/Note/Note';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function TheDeterminant() {
  return (
    <>
      <div>
        The <strong>determinant</strong> is a single number calculated from a square matrix 
        that tells you how much a linear transformation stretches or squishes space.
      </div>
      <div>
        The formula for calculating the determinant of a 2x2 matrix is as follows.
      </div>
      <div>
        <BlockMath math={String.raw`
          \text{det}
          \left(
          \begin{bmatrix}
            a & b \\
            c & d
          \end{bmatrix}
          \right)
          \enspace = \enspace
          \text{ad - bc}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

matrix = np.array([[3, 1], 
                   [-2, 2]])

determinant = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
print('Determinant calculated manually:', determinant)
print("")

print('Determinant calculated using numpy:', np.linalg.det(matrix))`
        } editable={true} />
      </div>
      <div>
        For any given 2x2 matrix, if either <strong>b</strong> or <strong>c</strong> is 0, one basis vector lies exactly on an axis.
        That fixes a clean base and height for the parallelogram, so its area (the determinant) is just that 
        scale factor times the other vector's component along the same axis: <strong>a</strong> * <strong>d</strong>.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

matrix = np.array([[1, 0], 
                   [-2, 3]])

determinant = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]

print("Example where b is 0 (it's just a * d):", determinant)`
        } editable={true} />
      </div>
      <div>
        Below is an algebraic description of how the formula <strong>ad</strong> - <strong>bc</strong> can
        be derived for calculating the determinant of a 2x2 matrix.
       </div>
      <div style={{textAlign: 'center'}}>
        <div><InlineMath math="(a + b) * (c + d) - (a*c - b*d - 2*b*c)" /></div>
        <div><InlineMath math="(ac + ad + bc + bd) - (a*c - b*d - 2*b*c)" /></div>
        <div><InlineMath math="ac + ad + bc + bd - ac - bd - 2bc" /></div>
        <div><InlineMath math="ad + bc - 2bc" /></div>
        <div><InlineMath math="ad - bc" /></div>
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

matrix = np.array([[1, 3], 
                   [2, 4]])

determinant = (
    (matrix[0][0] + matrix[0][1]) * (matrix[1][0] + matrix[1][1])
    - matrix[0][0] * matrix[1][0]
    - matrix[0][1] * matrix[1][1]
    - 2 * matrix[0][1] * matrix[1][0]
)

print('Determinant calculated the long way manually:', determinant)
print("")

print('Determinant calculated using numpy:', np.linalg.det(matrix))`
        } editable={true} />
      </div>
      <Note>
        A negative determinant means that space was inverted.
      </Note>
      <div>
        Below is how you would calculate the determinant of a 3x3 matrix.
      </div>
      <div>
        <BlockMath math={String.raw`
          \text{det}
            \left(
              \begin{bmatrix}
                a & b & c \\
                d & e & f \\
                g & h & i
              \end{bmatrix}
            \right)
          \enspace = \enspace
          \text{a} * \text{det}
            \left(
              \begin{bmatrix}
                e & f \\
                h & i
              \end{bmatrix}
            \right)
          \enspace - \enspace
          \text{b} * \text{det}
            \left(
              \begin{bmatrix}
                d & f \\
                g & i
              \end{bmatrix}
            \right)
          \enspace + \enspace
          \text{c} * \text{det}
            \left(
              \begin{bmatrix}
                d & e \\
                g & h
              \end{bmatrix}
            \right)
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

matrix = np.array([[1, -1, 2], 
                   [2, 4, -3], 
                   [3, 2, 5]])

first_sub_matrix = np.array([[matrix[1][1], matrix[1][2]], 
                             [matrix[2][1], matrix[2][2]]])

second_sub_matrix = np.array([[matrix[1][0], matrix[1][2]], 
                              [matrix[2][0], matrix[2][2]]])

third_sub_matrix = np.array([[matrix[1][0], matrix[1][1]], 
                             [matrix[2][0], matrix[2][1]]])

first_calc = matrix[0][0] * np.linalg.det(first_sub_matrix)
second_calc = matrix[0][1] * np.linalg.det(second_sub_matrix)
third_calc = matrix[0][2] * np.linalg.det(third_sub_matrix)

print('Determinant calculated manually:', first_calc - second_calc + third_calc)
print("")

print('Determinant calculated using numpy:', np.linalg.det(matrix))`
        } editable={true} />
      </div>
      <div>
        The determinant of the composition matrix of two matrices is the same as the product
        of the determinants of those two matrices.
      </div>
      <div>
        <BlockMath math={String.raw`
          \text{det}
            \left(
              \begin{bmatrix}
                a & b \\
                c & d
              \end{bmatrix}
              \begin{bmatrix}
                e & f \\
                g & h
              \end{bmatrix}
            \right)
          \enspace = \enspace
          \text{det}
            \left(
              \begin{bmatrix}
                a & b \\
                c & d
              \end{bmatrix}
            \right)
          \enspace * \enspace
          \text{det}
            \left(
              \begin{bmatrix}
                e & f \\
                g & h
              \end{bmatrix}
            \right)
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

m1 = np.array([[-1, 0], 
               [3, 2]])

m2 = np.array([[4, -1], 
               [0, 3]])

print('m1 @ m2:')
print(m1 @ m2)
print("")

print('det(m1 * m2):')
print(np.linalg.det(m1 @ m2))
print("")

print('det(m1) * det(m2):')
print(np.linalg.det(m1) * np.linalg.det(m2))`
        } editable={true} />
      </div>
    </>
  )
}
