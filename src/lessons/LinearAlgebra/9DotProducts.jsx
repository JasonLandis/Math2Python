import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function DotProducts() {
  return (
    <>
      <div>
        To calculate the <strong>dot product</strong> of two vectors means pairing up matching
        coordinates, multiplying each pair, and adding the results. This can only be done
        on two vectors of the same dimension.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix} 2 \\ -2 \\ 3 \end{bmatrix} \cdot
          \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix} =
          2 \cdot 1 + (-2) \cdot 3 + 3 \cdot 4 = 8
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([2, -2, 3])

w = np.array([1, 3, 4])

print("Manual dot product calculation:", v[0] * w[0] + v[1] * w[1] + v[2] * w[2])
print("Calculating the dot product using NumPy:", np.dot(v, w))`
        } editable={true} />
      </div>
      <div>
        <Note>
          Previous lessons used column vectors with shape 3x1. Here the vectors are flat 1D arrays,
          since np.dot works directly on those. With column vectors, v @ w would
          fail because a 3x1 matrix can't multiply another 3x1 matrix. Instead, you'd
          write v.T @ w, turning v on its side into a 1x3 matrix. That idea
          comes back at the end of this lesson.
        </Note>
      </div>
      <div>
        Geometrically, the dot product measures how much two vectors point in the same direction.
        If the dot product of two vectors is positive, like in the example above, it means that the
        vectors point in generally the same direction. If the dot product of two vectors is 0, it means
        that the vectors are perpendicular.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([1, 2])

w = np.array([2, -1])

print("Dot product:", np.dot(v, w))`
        } editable={true} />
      </div>
      <div>
        If the dot product of two vectors is negative, it means that the vectors point in generally opposite directions.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([1, 2])

w = np.array([-2, -1])

print("Dot product:", np.dot(v, w))`
        } editable={true} />
      </div>
      <div>
        <Note>
          Try switching around v and w in the code above.
          Notice how the result is the same. The order does not matter, which means the dot
          product is <strong>commutative</strong>.
        </Note>
      </div>
      <div>
        To visualize the dot product, imagine projecting one vector onto the other, then
        multiplying the length of that projection by the magnitude of the vector you projected onto.
        If the projection points in the opposite direction of the vector you projected onto, its
        length counts as negative. This is why vectors pointing in generally opposite directions
        have a negative dot product.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([4, 1])
w = np.array([2, -1])

v_mag = np.linalg.norm(v)
w_mag = np.linalg.norm(w)

dot = np.dot(v, w)

proj_v_mag = dot / w_mag
proj_w_mag = dot / v_mag

print("Magnitude of v:", v_mag)
print("Magnitude of w:", w_mag)
print("Magnitude of projected v (onto w):", proj_v_mag)
print("Magnitude of projected w (onto v):", proj_w_mag)
print("Dot product calculated using NumPy:", dot)
print("Dot product calculated by projecting w onto v:", v_mag * proj_w_mag)
print("Dot product calculated by projecting v onto w:", w_mag * proj_v_mag)`
        } editable={true} />
      </div>
      <div>
        <Note>
          Notice that the code above gives the same result whether we compute v · w or w · v.
          This is because the dot product is commutative.
        </Note>
      </div>
      <div>
        Any linear transformation A that maps vectors down to a single number (1D) is
        equivalent to taking the dot product with some fixed vector w. That
        vector w is the single row of the 1x2 matrix, turned on its side into a vector.
        This relationship is known as <strong>duality</strong>.
      </div>
      <div>
        To see why, remember that the columns of a transformation matrix show where the basis vectors
        land. The 1x2 matrix [3, -2] sends i to 3 and j to -2 on the
        number line. Applying it to a vector multiplies each coordinate by where its basis vector lands
        and adds the results, which is exactly the dot product with [3, -2].
      </div>
      <div>
        <Equation math={String.raw`
          A = \begin{bmatrix} 3 & -2 \end{bmatrix}
          \qquad
          w = \begin{bmatrix} 3 \\ -2 \end{bmatrix}
          \qquad
          v = \begin{bmatrix} 1 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          i \rightarrow 3
          \qquad
          j \rightarrow -2
          \qquad
          v = 1i + 4j \rightarrow 1(3) + 4(-2)
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \textbf{Matrix multiplication: } \allowbreak
          \begin{bmatrix} 3 & -2 \end{bmatrix} \begin{bmatrix} 1 \\ 4 \end{bmatrix} =
          (3)(1) + (-2)(4) = -5
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \textbf{Dot product: } \allowbreak \begin{bmatrix} 3 \\ -2 \end{bmatrix} \cdot
          \begin{bmatrix} 1 \\ 4 \end{bmatrix} =
          (3)(1) + (-2)(4) = -5
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [4]])

w = np.array([[3],
              [-2]])

# Same as vector w, but represented as a linear transformation matrix
A = np.array([[3, -2]])

print("w turned on its side:", w.T, '\\n')

print("Matrix multiplication:", A @ v)
print("Dot product:", w.T @ v)`
        } editable={true} />
      </div>
    </>
  )
}
