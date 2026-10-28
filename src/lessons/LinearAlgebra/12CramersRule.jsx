import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function CramersRule() {
  return (
    <>
      <div>
        If you are given a transformed vector and a linear transformation, you can find
        the original vector (where the transformed vector was before the transformation)
        by applying <strong>Cramer's rule</strong>. This solves the same equation <strong>Ax = v</strong> from
        the inverse matrices lesson, just in a different way. Since Cramer's rule divides by the
        determinant of <strong>A</strong>, it only works when that determinant is not 0. When the
        determinant is 0, there is no unique original vector.
      </div>
      <div>
        To solve for the x-coordinate of the original vector, you can substitute the transformed
        vector into the first column of the transformation matrix, then calculate the determinant
        of that matrix, and divide it by the determinant of the original matrix <strong>A</strong>.
        For the y-coordinate, replace the second column instead. This can be done for every coordinate.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{i'} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}
          \quad\quad
          \boldsymbol{j'} = \begin{bmatrix} -1 \\ 3 \end{bmatrix}
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
          x
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
          y
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
          \boldsymbol{x}
          \enspace = \enspace
          \begin{bmatrix} x \\ y \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -2 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        To see why this works, take the original vector <strong>x</strong> = [x, y]. The parallelogram
        formed by <strong>i</strong> and <strong>x</strong> has a base of 1 and a height of y, so its
        signed area is exactly y.
      </div>
      <div>
        <BlockMath math={String.raw`
          \text{det}
          \left(
            \begin{bmatrix}
              1 & x \\
              0 & y
            \end{bmatrix}
          \right)
          \enspace = \enspace
          y
        `} />
      </div>
      <div>
        The transformation scales every area by det(<strong>A</strong>), so after the transformation
        that parallelogram has an area of det(<strong>A</strong>) times y. After the transformation,
        the parallelogram is formed by <strong>i'</strong> (the first column of <strong>A</strong>)
        and <strong>v</strong> (the known output), so its area is also the determinant of the matrix
        with columns <strong>i'</strong> and <strong>v</strong>. Setting these equal and dividing by
        det(<strong>A</strong>) gives Cramer's rule.
      </div>
      <div>
        <BlockMath math={String.raw`
          \text{det}(\boldsymbol{A}) \cdot y
          \enspace = \enspace
          \text{det}
          \left(
            \begin{bmatrix}
              \boldsymbol{i'} & \boldsymbol{v}
            \end{bmatrix}
          \right)
          \quad\quad\Longrightarrow\quad\quad
          y
          \enspace = \enspace
          \frac{
            \text{det}
            \left(
              \begin{bmatrix}
                \boldsymbol{i'} & \boldsymbol{v}
              \end{bmatrix}
            \right)
          }{\text{det}(\boldsymbol{A})}
        `} />
      </div>
      <div>
        The x-coordinate works the same way. The parallelogram formed by <strong>x</strong> and <strong>j</strong> has
        a signed area of x, and after the transformation it is formed by <strong>v</strong> and <strong>j'</strong>.
        That is why <strong>v</strong> replaces the first column for x and the second column for y.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

transformed_i = np.array([2, 1])
transformed_j = np.array([-1, 3])

A = np.array([transformed_i, transformed_j]).T

v = np.array([-6, 4])

det_A = np.linalg.det(A)
print("Determinant of A:", det_A, '\\n')

x = np.linalg.det(np.array([v, transformed_j]).T) / det_A
print("x-coordinate of original vector:", x)

y = np.linalg.det(np.array([transformed_i, v]).T) / det_A
print("y-coordinate of original vector:", y, '\\n')

original_vector = np.array([x, y])
print("Original vector:")
print(original_vector, '\\n')

print("Verifying the original vector is correct:", np.allclose(A @ original_vector, v))`
        } editable={true} />
      </div>
      <div>
        Below is an example of Cramer's rule being applied in 3D.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} =
          \begin{bmatrix}
            1 & 0 & 0 \\
            0 & 1 & 5 \\
            3 & 0 & 6
          \end{bmatrix}
          \quad\quad
          \boldsymbol{v} = \begin{bmatrix} -1 \\ 7 \\ 3 \end{bmatrix}
          \quad\quad
          \text{det}(\boldsymbol{A}) = 6
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          x = \frac{-6}{6} = -1
          \quad\quad
          y = \frac{12}{6} = 2
          \quad\quad
          z = \frac{6}{6} = 1
          \quad\quad\quad
          \boldsymbol{x} = \begin{bmatrix} -1 \\ 2 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

transformed_i = np.array([1, 0, 3])
transformed_j = np.array([0, 1, 0])
transformed_k = np.array([0, 5, 6])

A = np.array([transformed_i, transformed_j, transformed_k]).T

v = np.array([-1, 7, 3])

det_A = np.linalg.det(A)

print("Determinant of A:", det_A, '\\n')

x = np.linalg.det(np.array([v, transformed_j, transformed_k]).T) / det_A
print("x-coordinate of original vector:", x)

y = np.linalg.det(np.array([transformed_i, v, transformed_k]).T) / det_A
print("y-coordinate of original vector:", y)

z = np.linalg.det(np.array([transformed_i, transformed_j, v]).T) / det_A
print("z-coordinate of original vector:", z, '\\n')

original_vector = np.array([x, y, z])
print("Original vector:")
print(original_vector, '\\n')

print("Verifying the original vector is correct:", np.allclose(A @ original_vector, v), '\\n')

print("Using np.linalg.solve:", np.linalg.solve(A, v))`
        } editable={true} />
      </div>
      <div>
        <Note>
          Cramer's rule is mostly useful for understanding how linear systems work. In practice, you
          would use <strong>np.linalg.solve(A, v)</strong>, which is faster and handles floating-point
          rounding better.
        </Note>
      </div>
    </>
  )
}
