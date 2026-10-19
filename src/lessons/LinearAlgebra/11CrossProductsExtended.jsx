import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function CrossProductsExtended() {
  return (
    <>
      <div>
        You can calculate the cross product of two vectors by placing them as the columns of a 
        matrix, then taking determinants of that matrix's 2x2 submatrices. Specifically, each 
        determinant gives one coordinate (x, y, or z) of the cross product.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v} = \begin{bmatrix} 4 \\ -1 \\ 3 \end{bmatrix}
          \quad\quad
          \boldsymbol{w} = \begin{bmatrix} -2 \\ 2 \\ 1 \end{bmatrix}
          \quad\quad
          \boldsymbol{A} = \begin{bmatrix} 
            4 & -2 \\ 
            -1 & 2 \\ 
            3 & 1 
          \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{p} 
          \enspace = \enspace
          \begin{bmatrix}
            \text{det}\left(
              \begin{bmatrix} 
                -1 & 2 \\ 
                3 & 1 
              \end{bmatrix}
            \right) \\[2ex]
            \text{det}\left(
              \begin{bmatrix} 
                3 & 1 \\ 
                4 & -2 
              \end{bmatrix}
            \right) \\[2ex]
            \text{det}\left(
              \begin{bmatrix} 
                4 & -2 \\ 
                -1 & 2 
              \end{bmatrix}
            \right)
          \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix}
            (-1)(1) - (2)(3) \\
            (3)(-2) - (1)(4) \\
            (4)(2) - (-2)(-1)
          \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -7 \\ -10 \\ 6 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v} \times \boldsymbol{w} 
          \enspace = \enspace 
          \boldsymbol{p}
          \enspace = \enspace 
          \begin{bmatrix} -7 \\ -10 \\ 6 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = [4, -1, 3]
w = [-2, 2, 1]
A = np.array([v, w]).T

first_sub_matrix = np.array([[A[1][0], A[1][1]], [A[2][0], A[2][1]]])
second_sub_matrix = np.array([[A[2][0], A[2][1]], [A[0][0], A[0][1]]])
third_sub_matrix = np.array([[A[0][0], A[0][1]], [A[1][0], A[1][1]]])

p1 = np.linalg.det(first_sub_matrix) # x coordinate of p
p2 = np.linalg.det(second_sub_matrix) # y coordinate of p
p3 = np.linalg.det(third_sub_matrix) # z coordinate of p

p = np.array([p1, p2, p3])

print("Calculating vector p using vectors v and w as columns of a matrix:")
print(p, '\\n')

print("Calculating vector p as the cross product of v and w:")
print(np.cross(v, w))`
        } editable={true} />
      </div>
      <div>
        For any 3D vectors <strong>u</strong>, <strong>v</strong>, and <strong>w</strong>, the 
        determinant of the matrix with columns <strong>u</strong>, <strong>v</strong>, <strong>w</strong> equals 
        the dot product of <strong>u</strong> with the cross product of <strong>v</strong> and <strong>w</strong>.
        This is another example of duality. In the example below we are labeling the cross product 
        of <strong>v</strong> and <strong>w</strong> as vector <strong>p</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{u} = \begin{bmatrix} 1 \\ -2 \\ 3 \end{bmatrix}
          \quad\quad
          \boldsymbol{v} = \begin{bmatrix} -2 \\ 3 \\ 4 \end{bmatrix}
          \quad\quad
          \boldsymbol{w} = \begin{bmatrix} -1 \\ 2 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v}\times\boldsymbol{w} 
          \enspace = \enspace
          \begin{bmatrix} -2 \\ 3 \\ 4 \end{bmatrix}
          \times
          \begin{bmatrix} -1 \\ 2 \\ 1 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -5 \\ -2 \\ -1 \end{bmatrix}
          \enspace = \enspace
          \boldsymbol{p}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \text{det}\left(
            \begin{bmatrix} 
              1 & -2 & -1 \\ 
              -2 & 3 & 2 \\
              3 & 4 & 1 
            \end{bmatrix}
          \right)
          \enspace = \enspace
          \boldsymbol{u} \cdot\ \boldsymbol{p}
          \enspace = \enspace
          \begin{bmatrix} 1 \\ -2 \\ 3 \end{bmatrix}
          \cdot
          \begin{bmatrix} -5 \\ -2 \\ -1 \end{bmatrix}
          \enspace = \enspace -4
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = [-2, 3, 4]
w = [-1, 2, 1]

u = np.array([1,
              -2,
              3])

matrix = np.array([u, v, w]).T

p = np.linalg.cross(v, w)
print("Cross product of v and w:")
print(p, '\\n')

print("Determinant of the matrix with columns u, v, w:", np.linalg.det(matrix))
print("Dot product of vectors u and p:", np.dot(u, p))`
        } editable={true} />
      </div>
    </>
  )
}
