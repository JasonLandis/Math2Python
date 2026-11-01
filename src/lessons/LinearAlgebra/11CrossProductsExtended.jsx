import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function CrossProductsExtended() {
  return (
    <>
      <div>
        You can calculate the cross product of two vectors by placing them as the columns of a
        matrix, then taking determinants of that matrix's 2x2 submatrices. Each submatrix is formed by
        removing one row at a time, and each determinant gives one coordinate (x, y, or z) of the cross product.
      </div>
      <div>
        <Equation math={String.raw`
          v = \begin{bmatrix} 4 \\ -1 \\ 3 \end{bmatrix}
          \qquad
          w = \begin{bmatrix} -2 \\ 2 \\ 1 \end{bmatrix}
          \qquad
          A =
          \begin{bmatrix}
            4 & -2 \\
            -1 & 2 \\
            3 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          p =
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
          \end{bmatrix} =
          \begin{bmatrix} (-1)(1) - (2)(3) \\ (3)(-2) - (1)(4) \\ (4)(2) - (-2)(-1) \end{bmatrix} =
          \begin{bmatrix} -7 \\ -10 \\ 6 \end{bmatrix}
        `} />
      </div>
      <div>
        For the y-coordinate, the remaining rows are taken in the order z, x instead of x, z. Swapping
        two rows flips the sign of a determinant, so this matches the minus sign in the cross product
        formula. In fact, each of these determinants is exactly one line of the cross product formula
        from the previous lesson. For example, the x-coordinate is shown below.
      </div>
      <div>
        <Equation math={String.raw`
          v_2 w_3 - v_3 w_2 =
          \text{det}\left(
            \begin{bmatrix}
              v_2 & w_2 \\
              v_3 & w_3
            \end{bmatrix}
          \right)
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          v \times w = p = \begin{bmatrix} -7 \\ -10 \\ 6 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

def det_2x2(m):
    return m[0, 0] * m[1, 1] - m[0, 1] * m[1, 0]

v = np.array([4, -1, 3])
w = np.array([-2, 2, 1])
A = np.array([v, w]).T

first_sub_matrix = np.array([[A[1, 0], A[1, 1]], [A[2, 0], A[2, 1]]])
second_sub_matrix = np.array([[A[2, 0], A[2, 1]], [A[0, 0], A[0, 1]]])
third_sub_matrix = np.array([[A[0, 0], A[0, 1]], [A[1, 0], A[1, 1]]])

p1 = det_2x2(first_sub_matrix) # x coordinate of p
p2 = det_2x2(second_sub_matrix) # y coordinate of p
p3 = det_2x2(third_sub_matrix) # z coordinate of p

p = np.array([p1, p2, p3])

print("Calculating vector p using vectors v and w as columns of a matrix:")
print(p, '\\n')

print("Calculating vector p as the cross product of v and w:")
print(np.cross(v, w))`
        } editable={true} />
      </div>
      <div>
        In textbooks, you will often see the cross product written as the determinant of a 3x3 matrix
        with the basis vectors i, j, and k in the first
        column. This isn't a real determinant since the first column contains vectors instead of numbers,
        but expanding it the usual way gives exactly the same calculation as above.
      </div>
      <div>
        <Equation math={String.raw`
          v \times w =
          \text{det}\left(
            \begin{bmatrix}
              i & v_1 & w_1 \\
              j & v_2 & w_2 \\
              k & v_3 & w_3
            \end{bmatrix}
          \right) =
          i(v_2 w_3 - v_3 w_2) - j(v_1 w_3 - v_3 w_1) +
          k(v_1 w_2 - v_2 w_1)
        `} />
      </div>
      <div>
        For any 3D vectors u, v, and w, the
        determinant of the matrix with columns u, v, w equals
        the dot product of u with the cross product of v and w.
        This is another example of duality.
      </div>
      <div>
        To see why, fix v and w and let u vary. The
        function below takes a 3D vector u and returns a single number, and it is linear.
        From the dot products lesson, any linear transformation from 3D space down to a single number is
        the same as taking the dot product with some fixed vector p.
      </div>
      <div>
        <Equation math={String.raw`
          f(u) =
          \text{det}\left(\begin{bmatrix} u & v & w \end{bmatrix}\right) =
          p \cdot u
        `} />
      </div>
      <div>
        Geometrically, this determinant is the volume of the slanted box (called a parallelepiped)
        formed by the three vectors. That volume is the area of the base formed by v and w,
        times the height of u above that base. The only vector whose dot product
        with u gives "base area times height" is the one that is perpendicular
        to v and w and has a length equal to the base area. That is
        exactly v × w.
      </div>
      <div>
        Now let's take a new set of vectors. In the example below, we are labeling the cross product
        of v and w as vector p.
      </div>
      <div>
        <Equation math={String.raw`
          u = \begin{bmatrix} 1 \\ -2 \\ 3 \end{bmatrix}
          \qquad
          v = \begin{bmatrix} -2 \\ 3 \\ 4 \end{bmatrix}
          \qquad
          w = \begin{bmatrix} -1 \\ 2 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          v \times w =
          \begin{bmatrix} -2 \\ 3 \\ 4 \end{bmatrix} \times
          \begin{bmatrix} -1 \\ 2 \\ 1 \end{bmatrix} =
          \begin{bmatrix} -5 \\ -2 \\ -1 \end{bmatrix} =
          p
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \text{det}\left(
            \begin{bmatrix}
              1 & -2 & -1 \\
              -2 & 3 & 2 \\
              3 & 4 & 1
            \end{bmatrix}
          \right) =
          u \cdot p =
          \begin{bmatrix} 1 \\ -2 \\ 3 \end{bmatrix} \cdot
          \begin{bmatrix} -5 \\ -2 \\ -1 \end{bmatrix} =
          -4
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

u = np.array([1, -2, 3])
v = np.array([-2, 3, 4])
w = np.array([-1, 2, 1])

M = np.array([u, v, w]).T

p = np.cross(v, w)
print("Cross product of v and w:")
print(p, '\\n')

print("Determinant of the matrix with columns u, v, w:", np.linalg.det(M))
print("Dot product of vectors u and p:", np.dot(u, p))`
        } editable={true} />
      </div>
    </>
  )
}
