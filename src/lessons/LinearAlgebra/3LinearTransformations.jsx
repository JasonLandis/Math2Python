import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function LinearTransformations() {
  return (
    <>
      <div>
        Let's say we have the following basis vectors <strong>i</strong> and <strong>j</strong>, and some
        other vector <strong>v</strong> in this coordinate system.
      </div>
      <div>
        <Equation math={String.raw`
          i = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \qquad
          j = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
          \qquad
          v = \begin{bmatrix} 2 \\ 3 \end{bmatrix}
        `} />
      </div>
      <div>
        A <strong>linear transformation</strong> moves every vector in the space in a way that keeps
        all lines straight, keeps grid lines parallel and evenly spaced, and keeps the origin in place.
        Because of this, knowing where the basis vectors land is enough to know where every other
        vector lands.
      </div>
      <div>
        Now let's say this system goes through a linear transformation that brings the basis
        vectors <strong>i</strong> and <strong>j</strong> to the new vectors <strong>i'</strong> and <strong>j'</strong> below.
      </div>
      <div>
        <Equation math={String.raw`
          i' = \begin{bmatrix} 1 \\ 3 \end{bmatrix}
          \qquad
          j' = \begin{bmatrix} -2 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        We can deduce where the linear transformation brings vector <strong>v</strong> because
        we know where both of the basis vectors landed. Since <strong>v</strong> is 2 times <strong>i</strong> plus
        3 times <strong>j</strong>, the transformed vector <strong>v'</strong> is 2 times <strong>i'</strong> plus
        3 times <strong>j'</strong>.
      </div>
      <div>
        <Equation math={String.raw`
          v = 2i + 3j
          \qquad
          v' =
          2 \begin{bmatrix} 1 \\ 3 \end{bmatrix} +
          3 \begin{bmatrix} -2 \\ 2 \end{bmatrix} =
          \begin{bmatrix} -4 \\ 12 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[2],
              [3]])

transformed_i = np.array([[1],
                          [3]])

transformed_j = np.array([[-2],
                          [2]])

i_calc = v[0, 0] * transformed_i
j_calc = v[1, 0] * transformed_j
transformed_vector = i_calc + j_calc

print("Transformed basis vector i scaled by the x-coordinate of vector v:")
print(i_calc, '\\n')

print("Transformed basis vector j scaled by the y-coordinate of vector v:")
print(j_calc, '\\n')

print("Transformed original vector (sum of vectors above):")
print(transformed_vector)`
        } editable={true} />
      </div>
      <div>
        The transformed basis vectors can also be represented as a matrix <strong>M</strong>. The first column of this
        matrix contains <strong>i'</strong> and the second column of this matrix contains <strong>j'</strong>.
      </div>
      <div>
        <Equation math={String.raw`
          v = \begin{bmatrix} 2 \\ 3 \end{bmatrix}
          \qquad
          M =
          \begin{bmatrix}
            1 & -2 \\
            3 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        Multiplying a matrix by a vector scales each column of the matrix by the matching coordinate
        of the vector and then adds the results together. This is exactly the calculation done in the
        code above.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix}
            a & b \\
            c & d
          \end{bmatrix}
          \begin{bmatrix} x \\ y \end{bmatrix} =
          x \begin{bmatrix} a \\ c \end{bmatrix} +
          y \begin{bmatrix} b \\ d \end{bmatrix}
        `} />
      </div>
      <div>
        Now, you can multiply the transformation matrix by the original vector <strong>v</strong> to
        determine where <strong>v</strong> lands following the linear transformation.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix}
            1 & -2 \\
            3 & 2
          \end{bmatrix}
          \begin{bmatrix} 2 \\ 3 \end{bmatrix} =
          \begin{bmatrix} -4 \\ 12 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[2],
              [3]])

M = np.array([[1, -2],
              [3, 2]])

print("Landing spot of original vector v:")
print(M @ v)`
        } editable={true} />
      </div>
      <div>
        <Note>
          In NumPy, the <strong>@</strong> operator performs matrix multiplication, while
          the <strong>*</strong> operator multiplies matching entries element by element.
          Using <strong>*</strong> here would not raise an error, but it would give the wrong result.
          Also, notice how both code snippets give the same transformed vector <strong>v'</strong>.
        </Note>
      </div>
    </>
  )
}
