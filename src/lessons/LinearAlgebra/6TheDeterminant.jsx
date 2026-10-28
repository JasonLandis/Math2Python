import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function TheDeterminant() {
  return (
    <>
      <div>
        The <strong>determinant</strong> is a single number calculated from a square matrix
        that tells you the factor by which a linear transformation scales areas (in 2D)
        or volumes (in 3D).
      </div>
      <div>
        The formula for calculating the determinant of a 2x2 matrix is as follows.
      </div>
      <div>
        <Equation math={String.raw`
          \text{det}\left(
            \begin{bmatrix}
              a & b \\
              c & d
            \end{bmatrix}
          \right) =
          ad - bc
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

M = np.array([[3, 1],
              [-2, 2]])

determinant = M[0, 0] * M[1, 1] - M[0, 1] * M[1, 0]
print("Determinant calculated manually:", determinant)
print("Determinant calculated using NumPy:", np.linalg.det(M))`
        } editable={true} />
      </div>
      <div>
        <Note>
          NumPy computes the determinant through a series of floating-point operations,
          and because computers store decimals in binary with limited precision, tiny rounding errors accumulate and turn
          an exact 8 into 8.000000000000002. You will see many examples of this when using NumPy.
        </Note>
      </div>
      <div>
        For any given 2x2 matrix, if either <strong>b</strong> or <strong>c</strong> is 0, one of the transformed
        basis vectors lies exactly on an axis. If <strong>c</strong> is 0, <strong>i'</strong> lies on the x-axis
        with length <strong>a</strong>, and the height of the parallelogram is the y-coordinate of <strong>j'</strong>,
        which is <strong>d</strong>. If <strong>b</strong> is 0, <strong>j'</strong> lies on the y-axis with
        length <strong>d</strong>, and the width of the parallelogram is the x-coordinate of <strong>i'</strong>,
        which is <strong>a</strong>. Either way, the area (the determinant) is <strong>a</strong> · <strong>d</strong>.
      </div>
      <div>
        <Equation math={String.raw`
          c = 0: 
          \begin{bmatrix}
            a & b \\
            0 & d
          \end{bmatrix}
          \qquad
          i' = \begin{bmatrix} a \\ 0 \end{bmatrix}
          \qquad
          j' = \begin{bmatrix} b \\ d \end{bmatrix}
          \qquad
          \text{area} = \underbrace{a}_{\text{base}} \cdot \underbrace{d}_{\text{height}} = ad - b \cdot 0
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          b = 0: 
          \begin{bmatrix}
            a & 0 \\
            c & d
          \end{bmatrix}
          \qquad
          i' = \begin{bmatrix} a \\ c \end{bmatrix}
          \qquad
          j' = \begin{bmatrix} 0 \\ d \end{bmatrix}
          \qquad
          \text{area} = \underbrace{d}_{\text{base}} \cdot \underbrace{a}_{\text{width}} = ad - 0 \cdot c
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

M = np.array([[1, 0],
              [-2, 3]])

determinant = M[0, 0] * M[1, 1] - M[0, 1] * M[1, 0]

print("Example where b is 0 (it's just a * d):", determinant)`
        } editable={true} />
      </div>
      <div>
        Below is an algebraic description of how the formula <strong>ad</strong> - <strong>bc</strong> can
        be derived for calculating the determinant of a 2x2 matrix. Here, (<strong>a</strong> + <strong>b</strong>)(<strong>c</strong> + <strong>d</strong>) is
        the area of the rectangle surrounding the parallelogram. Subtracting the two pairs of corner
        triangles (<strong>ac</strong> and <strong>bd</strong>) and the two corner rectangles (2<strong>bc</strong>) leaves
        the area of the parallelogram.
      </div>
      <div>
        <Equation math={String.raw`
          (a + b) \cdot (c + d) - (ac + bd + 2bc)
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          (ac + ad + bc + bd) - (ac + bd + 2bc)
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          ac + ad + bc + bd - ac - bd - 2bc
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          ad + bc - 2bc
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          ad - bc
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

M = np.array([[1, 3],
              [2, 4]])

determinant = (
    (M[0, 0] + M[0, 1]) * (M[1, 0] + M[1, 1])
    - M[0, 0] * M[1, 0]
    - M[0, 1] * M[1, 1]
    - 2 * M[0, 1] * M[1, 0]
)

print("Determinant calculated the long way manually:", determinant)
print("Determinant calculated using NumPy:", np.linalg.det(M))`
        } editable={true} />
      </div>
      <div>
        <Note>
          A negative determinant means the orientation of space was flipped, as if it had been
          turned over. The determinant in the example above is negative, so that is what happens here.
        </Note>
      </div>
      <div>
        A determinant of 0 means the transformation squishes space into a lower dimension, such as
        a line or a single point. This happens when the columns of the matrix are linearly dependent.
        Since information is lost, a transformation like this cannot be undone.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

M = np.array([[2, 4],
              [1, 2]])

determinant = M[0, 0] * M[1, 1] - M[0, 1] * M[1, 0]
print("Determinant calculated manually:", determinant)
print("Determinant calculated using NumPy:", np.linalg.det(M))`
        } editable={true} />
      </div>
      <div>
        In 3D, the determinant tells you the factor by which a linear transformation
        scales volumes. Below is how you would calculate the determinant of a 3x3 matrix.
      </div>
      <div>
        <Equation math={String.raw`
          \text{det}\left(
            \begin{bmatrix}
              a & b & c \\
              d & e & f \\
              g & h & i
            \end{bmatrix}
          \right) =
          a \cdot
          \text{det}\left(
            \begin{bmatrix}
              e & f \\
              h & i
            \end{bmatrix}
          \right) -
          b \cdot
          \text{det}\left(
            \begin{bmatrix}
              d & f \\
              g & i
            \end{bmatrix}
          \right) +
          c \cdot
          \text{det}\left(
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

def det_2x2(m):
    return m[0, 0] * m[1, 1] - m[0, 1] * m[1, 0]

M = np.array([[1, -1, 2],
              [2, 4, -3],
              [3, 2, 5]])

# First submatrix: cross out the top row and the 1st column
#   [ x   x   x ]
#   [ x   4  -3 ]   ->   [ 4  -3 ]
#   [ x   2   5 ]        [ 2   5 ]
first_sub_M = np.array([[M[1, 1], M[1, 2]],
                        [M[2, 1], M[2, 2]]])

# Second submatrix: cross out the top row and the 2nd column
#   [ x   x   x ]
#   [ 2   x  -3 ]   ->   [ 2  -3 ]
#   [ 3   x   5 ]        [ 3   5 ]
second_sub_M = np.array([[M[1, 0], M[1, 2]],
                         [M[2, 0], M[2, 2]]])

# Third submatrix: cross out the top row and the 3rd column
#   [ x   x   x ]
#   [ 2   4   x ]   ->   [ 2   4 ]
#   [ 3   2   x ]        [ 3   2 ]
third_sub_M = np.array([[M[1, 0], M[1, 1]],
                        [M[2, 0], M[2, 1]]])

# Multiply each top-row entry by the determinant of its submatrix
first_calc = M[0, 0] * det_2x2(first_sub_M)
second_calc = M[0, 1] * det_2x2(second_sub_M)
third_calc = M[0, 2] * det_2x2(third_sub_M)

# The signs alternate: + first, - second, + third
print("Determinant calculated manually:", first_calc - second_calc + third_calc)
print("Determinant calculated using NumPy:", np.linalg.det(M))`
        } editable={true} />
      </div>
      <div>
        The determinant of the composition matrix of two matrices is the same as the product
        of the determinants of those two matrices. This is because applying <strong>M<sub>1</sub></strong> scales
        areas by det(<strong>M<sub>1</sub></strong>), then applying <strong>M<sub>2</sub></strong> scales them again
        by det(<strong>M<sub>2</sub></strong>), so the total scaling is the product of the two.
      </div>
      <div>
        <Equation math={String.raw`
          \text{det}\left(
            \begin{bmatrix}
              a & b \\
              c & d
            \end{bmatrix}
            \begin{bmatrix}
              e & f \\
              g & h
            \end{bmatrix}
          \right) =
          \text{det}\left(
            \begin{bmatrix}
              a & b \\
              c & d
            \end{bmatrix}
          \right) \cdot
          \text{det}\left(
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

print("m1 @ m2:")
print(m1 @ m2, '\\n')

print("det(m1 @ m2):", np.linalg.det(m1 @ m2))
print("det(m1) * det(m2):", np.linalg.det(m1) * np.linalg.det(m2))`
        } editable={true} />
      </div>
    </>
  )
}
