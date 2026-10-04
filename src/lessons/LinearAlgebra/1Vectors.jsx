import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function Vectors() {
  return (
    <>
      <div>
        Below is a 2-dimensional vector. You can think of it as having an x-coordinate of 1
        and a y-coordinate of 2. It has one row and two columns.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 1 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

vector = np.array([[1], 
                   [2]])`
        } editable={false} />
      </div>
      <div>
        <Note>
          Using numpy to represent vectors in Python beats using standard lists because numpy can
          efficiently handle calculations done on vectors.
        </Note>
      </div>
      <div>
        Two vectors in the same dimension can be added together. You can think of this as
        the x-coordinates of the vectors being added together and the y-coordinates of the
        vectors being added together.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \enspace + \enspace
          \begin{bmatrix} 3 \\ -1 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 4 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

vector1 = np.array([[1], 
                    [2]])

vector2 = np.array([[3], 
                    [-1]])

print(vector1 + vector2)`
        } editable={true} />
      </div>
      <div>
        Vectors can also be scaled by some constant. We call this constant a scalar.
        When a vector is scaled, both the x and y coordinates of that vector are multiplied
        by that scalar.
      </div>
      <div>
        <BlockMath math={String.raw`
          3 \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 3 \\ 6 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

vector = np.array([[1], 
                   [2]])

scalar = 3

print(vector * scalar)`
        } editable={true} />
      </div>
      <div>
        Both vector addition and vector multiplication rules above apply to vectors of 
        any dimension. Below is an example of the rules being applied to a 3-dimensional vector.
      </div>
      <div>
        <BlockMath math={String.raw`
          3 \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}
          \enspace + \enspace
          -2 \begin{bmatrix} 3 \\ -3 \\ 4 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -3 \\ 12 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

vector1 = np.array([[1], 
                    [2], 
                    [3]])

scalar1 = 3

vector2 = np.array([[3], 
                    [-3], 
                    [4]])

scalar2 = -2

print(vector1 * scalar1 + vector2 * scalar2)`
        } editable={true} />
      </div>
    </>
  )
}
