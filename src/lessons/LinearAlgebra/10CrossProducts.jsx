import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function CrossProducts() {
  return (
    <>
      <div>
        The <strong>cross product</strong> of two 3D vectors is a new vector perpendicular to both, whose magnitude
        equals the area of the parallelogram spanned by those two vectors. It is calculated with the
        formula below.
      </div>
      <div>
        <Equation math={String.raw`
          v \times w =
          \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} \times
          \begin{bmatrix} w_1 \\ w_2 \\ w_3 \end{bmatrix} =
          \begin{bmatrix} v_2 w_3 - v_3 w_2 \\ v_3 w_1 - v_1 w_3 \\ v_1 w_2 - v_2 w_1 \end{bmatrix}
        `} />
      </div>
      <div>
        Below is an example using two specific vectors.
      </div>
      <div>
        <Equation math={String.raw`
          v = \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix}
          \qquad
          w = \begin{bmatrix} 3 \\ -1 \\ 5 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          v \times w =
          \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix} \times
          \begin{bmatrix} 3 \\ -1 \\ 5 \end{bmatrix} =
          \begin{bmatrix} (2)(5) - (5)(-1) \\ (5)(3) - (1)(5) \\ (1)(-1) - (2)(3) \end{bmatrix} =
          \begin{bmatrix} 15 \\ 10 \\ -7 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([1, 2, 5])

w = np.array([3, -1, 5])

cross = np.cross(v, w)
print("Cross product:")
print(cross, '\\n')

print("Calculating the magnitude of the cross product:")
print("Manually:", np.sqrt(cross[0]**2 + cross[1]**2 + cross[2]**2))
print("Using NumPy:", np.linalg.norm(cross), '\\n')

# A dot product of 0 means the vectors are perpendicular
print("Dot product of the cross product with v:", np.dot(cross, v))
print("Dot product of the cross product with w:", np.dot(cross, w))`
        } editable={true} />
      </div>
      <div>
        <Note>
          Like in the dot products lesson, the vectors here are flat 1D arrays, so the cross product
          is displayed as a row. You can still read it as a vector with x, y, and z coordinates.
        </Note>
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([1, 2, 5])

w = np.array([3, -1, 5])

cross = np.array([v[1] * w[2] - v[2] * w[1],
                  v[2] * w[0] - v[0] * w[2],
                  v[0] * w[1] - v[1] * w[0]])

print("Calculating the cross product manually:")
print(cross)`
        } editable={true} />
      </div>
      <div>
        Unlike the dot product, the order of the cross product matters. Swapping the vectors gives a
        vector of the same length pointing in the opposite direction.
      </div>
      <div>
        <Equation math={String.raw`
          w \times v = -(v \times w)
        `} />
      </div>
      <div>
        There are always two directions perpendicular to both vectors, and the <strong>right-hand
        rule</strong> tells you which one the cross product points in. Point the fingers of your right
        hand along v and curl them toward w. Your thumb points in the
        direction of v × w.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([1, 2, 5])

w = np.array([3, -1, 5])

print("v x w:", np.cross(v, w))
print("w x v:", np.cross(w, v))`
        } editable={true} />
      </div>
      <div>
        In 2D, the cross product is a single number instead of a vector. It equals the determinant of the
        matrix whose columns are v and w, which is the signed area of
        the parallelogram they span. Just like in 3D, swapping the order flips the sign.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix} 3 \\ 1 \end{bmatrix} \times
          \begin{bmatrix} 2 \\ 4 \end{bmatrix} =
          \text{det}\left(
            \begin{bmatrix}
              3 & 2 \\
              1 & 4
            \end{bmatrix}
          \right) =
          (3)(4) - (2)(1) = 10
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([3, 1])

w = np.array([2, 4])

print("v x w:", v[0] * w[1] - v[1] * w[0])
print("w x v:", w[0] * v[1] - w[1] * v[0])
print("Determinant of the matrix with columns v and w:", np.linalg.det(np.column_stack((v, w))))`
        } editable={true} />
      </div>
      <div>
        We can also calculate the area of the parallelogram using only dot products. To do that, we
        need one more fact: the dot product of a vector with itself always equals its magnitude squared.
        Intuitively, projecting a vector onto itself just gives back the same vector, so the dot product
        is its length times its own length.
      </div>
      <div>
        <Equation math={String.raw`
          v \cdot v = \lVert v \rVert^2
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([-3, 2, -4])

print("Dot product:", np.dot(v, v))
print("Magnitude of vector v squared:", np.linalg.norm(v)**2)`
        } editable={true} />
      </div>
      <div>
        The area of the parallelogram is the length of one side times the height, which
        is ‖v‖‖w‖ sin θ. Using the identity sin²θ = 1 - cos²θ and the formula from the
        dot products lesson, we can rewrite the area using only dot products.
      </div>
      <div>
        <Equation math={String.raw`
          \text{area}^2 = \lVert v \rVert^2 \lVert w \rVert^2 \sin^2\theta =
          \lVert v \rVert^2 \lVert w \rVert^2 (1 - \cos^2\theta)
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \text{area}^2 = \lVert v \rVert^2 \lVert w \rVert^2 -
          (\lVert v \rVert \lVert w \rVert \cos\theta)^2 =
          (v \cdot v)(w \cdot w) -
          (v \cdot w)^2
        `} />
      </div>
      <div>
        The code below calculates the area this way and checks that it matches the magnitude of the
        cross product.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([-1, -2, -3])

w = np.array([1, 4, 2])

area = np.sqrt(np.dot(v, v) * np.dot(w, w) - np.dot(v, w)**2)
print("Area of the parallelogram:", area)
print("Magnitude of the cross product:", np.linalg.norm(np.cross(v, w)))`
        } editable={true} />
      </div>
    </>
  )
}
