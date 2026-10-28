import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function LinearCombinations() {
  return (
    <>
      <div>
        Let's say we have the two basis vectors below.
      </div>
      <div>
        <Equation math={String.raw`
          i = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \qquad
          j = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        If you scale some vectors by scalars and then add the resulting vectors together, you get a new
        vector that is a <strong>linear combination</strong> of those vectors. Below is a linear combination
        of the two basis vectors above.
      </div>
      <div>
        <Equation math={String.raw`
          3 \begin{bmatrix} 1 \\ 0 \end{bmatrix} +
          4 \begin{bmatrix} 0 \\ 1 \end{bmatrix} =
          \begin{bmatrix} 3 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([[1],
              [0]])

j = np.array([[0],
              [1]])

scaled_i = 3 * i # Scalar of 3 applied to basis vector i
scaled_j = 4 * j # Scalar of 4 applied to basis vector j

linear_combination = scaled_i + scaled_j
print("Linear combination:")
print(linear_combination)`
        } editable={true} />
      </div>
      <div>
        The set of all possible vectors that can be reached with linear combinations of a
        given set of vectors is called the <strong>span</strong> of those vectors.
      </div>
      <div>
        The two basis vectors above can be described as <strong>linearly independent</strong> because
        neither vector can be written as a linear combination of the other. As a result, the span of
        those two 2D vectors is all vectors in 2D space.
      </div>
      <div>
        The two vectors below can be described as <strong>linearly dependent</strong> because
        vector <strong>w</strong> can be written as a linear combination of vector <strong>v</strong>.
        As a result, the span of these two 2D vectors is just a single 1D line.
      </div>
      <div>
        <Equation math={String.raw`
          v = \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \qquad
          w = \begin{bmatrix} 2 \\ 4 \end{bmatrix}
          \qquad
          2 \begin{bmatrix} 1 \\ 2 \end{bmatrix} =
          \begin{bmatrix} 2 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        Notice that both vectors above have a y-coordinate that
        is twice as much as the x-coordinate. Because of this, the vectors
        fall on the same line. Any linear combination of these vectors will
        also fall on this line and have a y-coordinate that is twice as much
        as the x-coordinate.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [2]])

w = np.array([[2],
              [4]])

scaled_v = -2 * v
scaled_w = 5 * w

linear_combination = scaled_v + scaled_w
print("Linear combination:")
print(linear_combination)`
        } editable={true} />
      </div>
      <div>
        In 3D, we can take the following as our basis vectors.
        These vectors are linearly independent since none of these vectors
        can be represented as a linear combination of the others.
      </div>
      <div>
        <Equation math={String.raw`
          i = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}
          \qquad
          j = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}
          \qquad
          k = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        Now let's say we have the following vectors.
      </div>
      <div>
        <Equation math={String.raw`
          u = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}
          \qquad
          v = \begin{bmatrix} 2 \\ -1 \\ 4 \end{bmatrix}
          \qquad
          w = \begin{bmatrix} 4 \\ 3 \\ 10 \end{bmatrix}
        `} />
      </div>
      <div>
        These vectors are linearly dependent because vector <strong>w</strong> can be written
        as a linear combination of vectors <strong>u</strong> and <strong>v</strong>.
      </div>
      <div>
        <Equation math={String.raw`
          2 \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} +
          \begin{bmatrix} 2 \\ -1 \\ 4 \end{bmatrix} =
          \begin{bmatrix} 4 \\ 3 \\ 10 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

u = np.array([[1],
              [2],
              [3]])

v = np.array([[2],
              [-1],
              [4]])

print("Computing vector w as a linear combination of u and v:")
print((2 * u) + v)`
        } editable={true} />
      </div>
    </>
  )
}
