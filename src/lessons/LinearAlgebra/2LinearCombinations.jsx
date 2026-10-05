import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function LinearCombinations() {
  return (
    <>
      <div>
        Let's say we have the two basis vectors below.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        If you scale each of these basis vectors by some scalar and then add the two resultant vectors together,
        you get a new vector that is a <strong>linear combination</strong> of those basis vectors.
      </div>
      <div>
        <BlockMath math={String.raw`
          3 \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \enspace + \enspace
          4 \begin{bmatrix} 0 \\ 1 \end{bmatrix}
          \enspace = \enspace
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
print(linear_combination)`
        } editable={true} />
      </div>
      <div>
        The set of all possible vectors that can be reached with linear combinations of a 
        given pair of vectors is called the <strong>span</strong> of those two vectors.
      </div>
      <div>
        The two basis vectors above can be described as <strong>linearly independent</strong> because
        the span of those two 2-dimensional vectors is all vectors in 2-dimensional space. Also, one
        of the vectors cannot be described as some linear combination of the other.
      </div>
      <div>
        The two vectors below can be described as <strong>linearly dependent</strong> because 
        the span of these two 2-dimensional vectors is just a single 1-dimensional line. Also, 
        vector <strong>j</strong> can be written as some linear combination of vector <strong>i</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat i} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat j} = \begin{bmatrix} 2 \\ 4 \end{bmatrix}
          \quad\quad\quad\quad
          2 \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \enspace = \enspace
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

i = np.array([[1], 
              [2]])

j = np.array([[2], 
              [4]])

scaled_i = -2 * i
scaled_j = 5 * j

linear_combination = scaled_i + scaled_j
print(linear_combination)`
        } editable={true} />
      </div>
      <div>
        In three dimensions, we can take the following as our basis vectors.
        These vectors are linearly independent since any one of these vectors
        cannot be represented as a linear combination of the others.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat } = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat j} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat k} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        Now let's say we have the following vectors.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\hat i} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat j} = \begin{bmatrix} 2 \\ -1 \\ 4 \end{bmatrix}
          \quad\quad
          \boldsymbol{\hat k} = \begin{bmatrix} 4 \\ 3 \\ 10 \end{bmatrix}
        `} />
      </div>
      <div>
        These vectors are linearly dependent because vector <strong>k</strong> can be written
        as a linear combination of vector <strong>i</strong> and <strong>j</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          2 \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}
          \enspace + \enspace
          \begin{bmatrix} 2 \\ -1 \\ 4 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 4 \\ 3 \\ 10 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([[1], 
              [2],
              [3]])

j = np.array([[2], 
              [-1],
              [4]])

k = np.array([[4], 
              [3],
              [10]])

print((2 * i) + j)`
        } editable={true} />
      </div>
    </>
  )
}
