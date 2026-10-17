import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function CrossProducts() {
  return (
    <>
      <div>
        The <strong>cross product</strong> of two 3D vectors is a new vector perpendicular to both, whose magnitude 
        equals the area of the parallelogram spanned by those two vectors.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v} = \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix}
          \quad\quad
          \boldsymbol{w} = \begin{bmatrix} 3 \\ -1 \\ 5 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v} \times \mathbf{w} 
          \enspace = \enspace
          \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix} \times \begin{bmatrix} 3 \\ -1 \\ 5 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix}
            (2)(5) - (5)(-1) \\
            (5)(3) - (1)(5) \\
            (1)(-1) - (2)(3)
          \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 15 \\ 10 \\ -7 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np
import math

v = np.array([1, 
              2, 
              5])

w = np.array([3, 
              -1, 
              5])

cross = np.linalg.cross(v, w)
print("Cross product:")
print(cross, '\\n')

print("Calculating the magnitude of the cross product:")
print(f"√({cross[0]}² + {cross[1]}² + {cross[2]}²):", math.sqrt(cross[0]**2 + cross[1]**2 + cross[2]**2))
print("Using numpy:", np.linalg.norm(cross))`
        } editable={true} />
      </div>
      <Note>
        The cross product above isn't displayed as a column vector because it's a 1D array, but 
        you can still read it as a vector with x, y, and z coordinates.
      </Note>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([1, 
              2, 
              5])

w = np.array([3, 
              -1, 
              5])

cross = np.array([v[1] * w[2] - w[1] * v[2],
                  v[2] * w[0] - w[2] * v[0],
                  v[0] * w[1] - w[0] * v[1]])

print("Calculating the cross product manually:")
print(cross)`
        } editable={true} />
      </div>
      <div>
        The dot product of a vector with itself always equals its magnitude squared. 
        Intuitively, projecting a vector onto itself just gives back the same vector.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([-3, 
              2, 
              -4])

print("Dot product:", np.dot(v, v))
print("Magnitude of vector v squared:", np.linalg.norm(v)**2)`
        } editable={true} />
      </div>
      <div>
        The area of the parallelogram spanned by two vectors is equal to the magnitude of 
        the cross product of those vectors.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([-1, 
              -2, 
              -3])

w = np.array([1, 
              4, 
              2])

area = np.sqrt(np.dot(v, v) * np.dot(w, w) - np.dot(v, w)**2)
print("Area of the parallelogram:", area)
print("Magnitude of the cross product:", np.linalg.norm(np.linalg.cross(v, w)))`
        } editable={true} />
      </div>
    </>
  )
}
