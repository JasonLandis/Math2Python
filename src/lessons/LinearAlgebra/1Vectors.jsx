import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function Vectors() {
  return (
    <>
      <div>
        Below is a 2-dimensional vector. You can think of it as having an x-coordinate of 1
        and a y-coordinate of 2.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 1 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        This vector has 1 column and 2 rows. Here is how this vector can be represented in
        Python using numpy.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

vector = np.array([[1], 
                   [2]])`
        } editable={false} />
      </div>
      <div>
        2 vectors in the same dimension can be added together. You can think of this as
        the x-coordinates of the vector being added together and the y-coordinates of the
        vector being added together.
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
        Vectors can be scaled by some constant. We call this constant a scalar.
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
        The following is an example of a 3-dimensional vector.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

vector1 = np.array([[1], 
                    [2], 
                    [3]])

vector2 = np.array([[4], 
                    [2], 
                    [-1]])

scalar = 4

print((vector1 + vector2) * scalar)`
        } editable={true} />
      </div>
    </>
  )
}
