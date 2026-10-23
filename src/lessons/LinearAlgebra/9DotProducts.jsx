import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function DotProducts() {
  return (
    <>
      <div>
        To calculate the <strong>dot product</strong> of two vectors means pairing up all the 
        coordinates, multiplying those pairs together, and adding the result. This can only be done
        on two vectors of the same dimension.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 2 \\ -2 \\ 3 \end{bmatrix} 
          \cdot
          \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}
          = 2 \cdot 1 + (-2) \cdot 3 + 3 \cdot 4 = 8
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v1 = np.array([2, 
               -2, 
               3])

v2 = np.array([1, 
               3, 
              4])

print("Manual dot product calculation:", v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2])
print("Calculating the dot product using NumPy:", np.dot(v1, v2))`
        } editable={true} />
      </div>
      <Note>
        I've usually described vectors as arrays with shape 2x1. In the example above, I instantiated them 
        as flat 1D arrays instead. The dot product multiplies the vectors together, and as matrices they 
        would be 2x1 @ 2x1, which is invalid because the inner dimensions don't match.
      </Note>
      <div>
        Geometrically, the dot product measures how much two vectors point in the same direction.
        If the dot product of two vectors is 0, it means that the vectors are perpendicular.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v1 = np.array([1, 
               2])

v2 = np.array([2, 
               -1])

print("Dot product:", np.dot(v1, v2))`
        } editable={true} />
      </div>
      <div>
        If the dot product of two vectors is negative, it means that the vectors generally
        point in the opposite direction.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v1 = np.array([1, 
               2])

v2 = np.array([-2, 
               -1])

print("Dot product:", np.dot(v1, v2))`
        } editable={true} />
      </div>
      <Note>
        Try switching around <strong>v1</strong> and <strong>v2</strong> in the function above.
        Notice how the result is the same and order does not matter.
      </Note>
      <div>
        To visualize the dot product, imagine projecting one vector onto the other, then 
        multiplying the length of that projection by the magnitude of the vector you projected onto.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np
import math

v = np.array([4, 
              1])

w = np.array([2, 
              -1])

# Using the pythagorean theorem to calculate the magnitude of each vector
v_mag = math.sqrt(v[0] ** 2 + v[1] ** 2)
w_mag = math.sqrt(w[0] ** 2 + w[1] ** 2)

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
        Any linear transformation <strong>A</strong> that maps vectors down to a single number (1D) is 
        equivalent to taking the dot product with some fixed vector <strong>w</strong>. That 
        vector <strong>w</strong> is just the transformation matrix read as a vector. 
        This relationship is known as <strong>duality</strong>.
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

print("Matrix multiplication:", A @ v)
print("Dot product:", np.dot(v.flatten(), w.flatten()))`
        } editable={true} />
      </div>
    </>
  )
}
