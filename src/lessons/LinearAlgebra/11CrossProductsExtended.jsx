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
        You can plug in any 3D vector u into the first column of a matrix with the 2nd and 3rd columns of 
        that matrix being vectors <strong>v</strong> and <strong>w</strong> respectively, and the 
        determinant of that matrix will be equal to the dot product of <strong>u</strong> and <strong>p</strong> where
        <strong>p</strong> is the cross product of vectors <strong>v</strong> and <strong>w</strong>. Another 
        example of Duality.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = [4, -1, 3]
w = [-2, 2, 1]

u = np.array([2,
              4,
              -1])

matrix = np.array([u, v, w]).T

print("Calculating the determinant of a matrix where the columns are u, v, and w respectively:")
print(np.linalg.det(matrix))
print("")

p = np.linalg.cross(v, w)

print("Calculating the dot product of vectors u and p (p is the cross product of v and w):")
print(np.dot(u, p))`
        } editable={true} />
      </div>
      <div>
        The cross product of two vectors is another vector that has a magnitude equal 
        to the area of those two vectors and a direction perpendicular to those two vectors 
        that obeys the right-hand rule.
      </div>
      <div>
        The dot product of two vectors is a scalar (number) equal to the magnitude of one vector
        multiplied by the magnitude of the other vector's projection onto it.
      </div>
      <div>
        The determinant of a 3x3 matrix is a scalar (number) equal to the volume of the parallelepiped
        formed by its three column vectors with a sign that's positive if those vectors follow a 
        right-handed orientation, and negative if left-handed.
      </div>
      <div>
        Volume of a parallelepiped formed by u, v, w: 1. p = v x w (cross product -- a vector, 
        perpendicular to v and w,with magnitude = area of the base parallelogram). 2. volume = u · p 
        (dot product -- projects u onto p's direction, multiplied by p's magnitude = base x height). 
        This whole calculation is equivalent to det([u, v, w]).
      </div>
    </>
  )
}
