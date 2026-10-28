import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function ChangeOfBasis() {
  return (
    <>
      <div>
        Let's say we have two coordinate systems. System 1 uses the standard basis vectors,
        while System 2 uses a different set of basis vectors, described in System 1's coordinates.
        Stacking System 2's basis vectors as columns of a matrix gives
        the <strong>change of basis</strong> matrix. <strong>B</strong> represents this matrix
        below. Its purpose is to translate a vector's coordinates
        in System 2 into the same vector's coordinates in System 1.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{i_1} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \quad
          \boldsymbol{j_1} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
          \quad\quad\quad
          \boldsymbol{i_2} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}
          \quad
          \boldsymbol{j_2} = \begin{bmatrix} -1 \\ 3 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{B} = \begin{bmatrix}
            2 & -1 \\
            1 & 3
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Note>
          In System 2's own language, <strong>i<sub>2</sub></strong> = [1, 0] and <strong>j<sub>2</sub></strong> = [0, 1].
          They only appear skewed above because they are written in System 1's language.
        </Note>
      </div>
      <div>
        Now let's say we have some vector written in System 2's language. The subscript tells you which
        language a vector's coordinates are written in. Below, <strong>v<sub>1</sub></strong> and <strong>v<sub>2</sub></strong> are
        the same arrow, just described in two different ways.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{v_2} = \begin{bmatrix} -2 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        This vector means "-2 of <strong>i<sub>2</sub></strong> plus 4 of <strong>j<sub>2</sub></strong>". Since we
        know <strong>i<sub>2</sub></strong> and <strong>j<sub>2</sub></strong> in System 1's coordinates, we can
        find the vector in System 1's language by scaling and adding them, just like in the linear
        transformations lesson.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{v_1}
          \enspace = \enspace
          -2 \begin{bmatrix} 2 \\ 1 \end{bmatrix}
          \enspace + \enspace
          4 \begin{bmatrix} -1 \\ 3 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -8 \\ 10 \end{bmatrix}
        `} />
      </div>
      <div>
        This is exactly the same as applying the change of basis matrix to the vector as a linear
        transformation.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix}
            2 & -1 \\
            1 & 3
          \end{bmatrix}
          \begin{bmatrix} -2 \\ 4 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -8 \\ 10 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i2 = np.array([2, 1])
j2 = np.array([-1, 3])

B = np.array([i2, j2]).T

v2 = np.array([-2, 4])

print("Vector v2 converted to System 1's language (v1):")
print(B @ v2)`
        } editable={true} />
      </div>
      <div>
        Now suppose we have a vector written in System 1's language. We can find its
        coordinates in System 2's language by applying the inverse of the change of basis matrix to it.
        In the example below, we are reusing the result of the calculation above since
        we know it's written in System 1's language.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{B^{-1}}
          \enspace = \enspace
          \frac{1}{7}
          \begin{bmatrix}
            3 & 1 \\
            -1 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix}
            2 & -1 \\
            1 & 3
          \end{bmatrix}^{-1}
          \begin{bmatrix} -8 \\ 10 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -2 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i2 = np.array([2, 1])
j2 = np.array([-1, 3])

B = np.array([i2, j2]).T

v1 = np.array([-8, 10])

print("Vector v1 converted to System 2's language (v2):")
print(np.linalg.inv(B) @ v1)`
        } editable={true} />
      </div>
      <div>
        <Note>
          Notice how we successfully converted a vector from System 2 to System 1, then
          back to System 2 in the two code snippets above.
        </Note>
      </div>
      <div>
        Now suppose we have a vector written in System 2's language, and we want to know where
        it lands after a linear transformation. We only have that transformation's matrix written
        in System 1's language (here, a 90° counterclockwise rotation), along with the change of basis matrix.
        So we first convert the vector to System 1's language, apply the transformation, then
        convert the result back to System 2's language.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{v_2} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \quad\quad
          \boldsymbol{B} =
          \begin{bmatrix}
            2 & -1 \\
            1 & 3
          \end{bmatrix}
          \quad\quad
          \boldsymbol{T_1} =
          \begin{bmatrix}
            0 & -1 \\
            1 & 0
          \end{bmatrix}
        `} />
      </div>
      <div>
        Remember that matrices are applied from right to left. Reading the formula below from right to
        left, <strong>B</strong> translates the vector to System 1's language, <strong>T<sub>1</sub></strong> rotates
        it, and <strong>B<sup>-1</sup></strong> translates the result back to System 2's language.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix}
            2 & -1 \\
            1 & 3
          \end{bmatrix}^{-1}
          \begin{bmatrix}
            0 & -1 \\
            1 & 0
          \end{bmatrix}
          \begin{bmatrix}
            2 & -1 \\
            1 & 3
          \end{bmatrix}
          \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -3 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        The three matrices on the left can be combined into a single composition matrix. This new
        matrix <strong>T<sub>2</sub></strong> is the same rotation, but written in System 2's language.
        Once it's calculated, it can be applied directly to any vector written in System 2's language.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{T_2}
          \enspace = \enspace
          \boldsymbol{B^{-1}T_1B}
          \enspace = \enspace
          \frac{1}{7}
          \begin{bmatrix}
            -1 & -10 \\
            5 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v2 = np.array([1, 2])

i2 = np.array([2, 1])
j2 = np.array([-1, 3])

B = np.array([i2, j2]).T

T1 = np.array([[0, -1],
               [1, 0]])

print("Vector v2 following the transformation, in System 2's language:")
print(np.linalg.inv(B) @ T1 @ B @ v2, '\\n')

T2 = np.linalg.inv(B) @ T1 @ B
print("The rotation written in System 2's language (T2):")
print(T2, '\\n')

print("Applying T2 directly to v2:")
print(T2 @ v2)`
        } editable={true} />
      </div>
      <div>
        <Note>
          You can think of the composition matrix <strong>B⁻¹T₁B</strong> as linear
          transformation <strong>T₁</strong>, but expressed in System 2's language.
        </Note>
      </div>
    </>
  )
}
