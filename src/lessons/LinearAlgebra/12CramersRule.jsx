import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function CramersRule() {
  return (
    <>
      <div>
        If you are given a transformed vector, and a linear transformation, you can find 
        the original vector (where the transformed vector was before the transformation) 
        by applying <strong>Cramer's rule</strong>.
      </div>
      <div>
        To solve for the x-coordinate of the original vector, you can substitue the transformed 
        vector into the first column of the transformation matrix, then solve for the determinant 
        of that matrix, and divide it by the determinant of the base transformation matrix. 
        This can be done repeatedly for all coordinates.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{i} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}
          \quad\quad
          \boldsymbol{j} = \begin{bmatrix} -1 \\ 3 \end{bmatrix}
          \quad\quad
          \boldsymbol{A} = 
          \begin{bmatrix} 
            2 & -1 \\ 
            1 & 3 
          \end{bmatrix}
          \quad\quad
          \boldsymbol{v} = \begin{bmatrix} -6 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{x} 
          \enspace = \enspace
          \frac{
            \text{det}
            \left(
              \begin{bmatrix} 
                -6 & -1 \\ 
                4 & 3 
              \end{bmatrix}
            \right)
          }{\text{det}
            \left(
              \begin{bmatrix} 
                2 & -1 \\ 
                1 & 3 
              \end{bmatrix}
            \right)
          }
          \enspace = \enspace
          \frac{-14}{7}
          \enspace = \enspace
          -2
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{y} 
          \enspace = \enspace
          \frac{
            \text{det}
            \left(
              \begin{bmatrix} 
                2 & -6 \\ 
                1 & 4 
              \end{bmatrix}
            \right)
          }{\text{det}
            \left(
              \begin{bmatrix} 
                2 & -1 \\ 
                1 & 3 
              \end{bmatrix}
            \right)
          }
          \enspace = \enspace
          \frac{14}{7}
          \enspace = \enspace
          2
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \text{original vector} 
          \enspace = \enspace
          \begin{bmatrix} \boldsymbol{x} \\ \boldsymbol{y} \end{bmatrix} 
          \enspace = \enspace 
          \begin{bmatrix} -2 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([2, 
              1]) 

j = np.array([-1, 
              3])

A = np.array([i, j]).T

v = np.array([-6, 4])

det_A = np.linalg.det(A)
print("Determinant of A:", det_A, '\\n')

x = np.linalg.det(np.array([v, j]).T) / det_A
print("x-coordinate of original vector:", x)

y = np.linalg.det(np.array([i, v]).T) / det_A
print("y-coordinate of original vector:", y, '\\n')

original_vector = np.array([x, y])
print("Original vector:")
print(original_vector, '\\n')

print("Verifying the original vector is correct:")
print(f"{A @ original_vector} == {v}")`
        } editable={true} />
      </div>
      <div>
        Below is an example of Cramer's Rule being applied in 3 dimensions.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([1, 0, 3])
j = np.array([0, 1, 0])
k = np.array([0, 5, 6])

A = np.array([i, j, k]).T

v = np.array([-1, 5, -4])

det_A = np.linalg.det(A)

print("Determinant of A:", det_A, '\\n')

x = np.linalg.det(np.array([v, j, k]).T) / det_A
print("x-coordinate of original vector:", x)

y = np.linalg.det(np.array([i, v, k]).T) / det_A
print("y-coordinate of original vector:", y)

z = np.linalg.det(np.array([i, j, v]).T) / det_A
print("z-coordinate of original vector:", z, '\\n')

original_vector = np.array([x, y, z])
print("Original vector:")
print(original_vector, '\\n')

print("Verifying the original vector is correct:")
print(f"{A @ original_vector} == {v}")`
        } editable={true} />
      </div>
    </>
  )
}
