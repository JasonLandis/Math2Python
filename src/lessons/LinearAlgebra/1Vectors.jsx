import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function Vectors() {
  return (
    <>
      <div>
        Below is a 2D vector. You can think of it as having an x-coordinate of 1 and
        a y-coordinate of 2.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix} 1 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [2]])`
        } editable={false} />
      </div>
      <div>
        <Note>
          Using NumPy to represent vectors in Python beats using standard lists because NumPy can
          efficiently handle calculations done on vectors.
        </Note>
      </div>
      <div>
        Two vectors in the same dimension can be added together. You can think of this as
        the x-coordinates of the vectors being added together and the y-coordinates of the
        vectors being added together.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix} 1 \\ 2 \end{bmatrix} +
          \begin{bmatrix} 3 \\ -1 \end{bmatrix} =
          \begin{bmatrix} 4 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [2]])

w = np.array([[3],
              [-1]])

print("Vector addition:")
print(v + w)`
        } editable={true} />
      </div>
      <div>
        Vectors can also be scaled by some constant. We call this constant a <strong>scalar</strong>.
        When a vector is scaled, both the x and y coordinates of that vector are multiplied
        by that scalar.
      </div>
      <div>
        <Equation math={String.raw`
          3 \begin{bmatrix} 1 \\ 2 \end{bmatrix} =
          \begin{bmatrix} 3 \\ 6 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [2]])

scalar = 3

print("Vector scalar multiplication:")
print(scalar * v)`
        } editable={true} />
      </div>
      <div>
        Both vector addition and scalar multiplication rules above apply to vectors of
        any dimension. Below is an example of the rules being applied to a 3D vector.
      </div>
      <div>
        <Equation math={String.raw`
          3 \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} +
          (-2) \begin{bmatrix} 3 \\ -3 \\ 4 \end{bmatrix} =
          \begin{bmatrix} -3 \\ 12 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [2],
              [3]])

scalar1 = 3

w = np.array([[3],
              [-3],
              [4]])

scalar2 = -2

print("Result:")
print(scalar1 * v + scalar2 * w)`
        } editable={true} />
      </div>
    </>
  )
}
