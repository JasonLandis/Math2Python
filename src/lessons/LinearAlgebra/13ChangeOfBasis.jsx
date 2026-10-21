import { BlockMath } from 'react-katex';
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
        the <strong>change of basis</strong> matrix. <strong>A</strong> represents this matrix 
        below. Its purpose is to translate a vector's coordinates 
        in System 2 into the same vector's coordinates in System 1.
      </div>
      <div>
        <BlockMath math={String.raw`
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
        <BlockMath math={String.raw`
          \boldsymbol{A} = \begin{bmatrix} 
            2 & -1 \\ 
            1 & 3 
          \end{bmatrix}
        `} />
      </div>
      <Note>
        Note that in System 2's own language, its basis vectors are simply the standard basis vectors. 
        They only appear skewed above because they are written in System 1's language.
      </Note>
      <div>
        Now let's say we have some vector written in System 2's language.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v_2} = \begin{bmatrix} -2 \\ 4 \end{bmatrix}
        `} />
      </div>
      <div>
        We can find this vector's coordinates in System 1's language by applying the change 
        of basis matrix to it as a linear transformation.
      </div>
      <div>
        <BlockMath math={String.raw`
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

A = np.array([i2, j2]).T

v2 = np.array([-2, 4])

print("Vector v2 written in System 1's language:")
print(A @ v2)`
        } editable={true} />
      </div>
      <div>
        Now suppose we have a vector written in System 1's language. We can find its 
        coordinates in System 2's language by applying the inverse of the change of basis matrix to it.
        In the example below, we are reusing the result of the calculation above since
        we know it's written in System 1's language.
      </div>
      <div>
        <BlockMath math={String.raw`
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

A = np.array([i2, j2]).T

v1 = np.array([-8, 10])

print("Vector v1 written in System 2's language:")
print(np.linalg.inv(A) @ v1)`
        } editable={true} />
      </div>
      <Note>
        Notice how we successfully converted a vector from System 2 to System 1, then
        back to System 2 in the two code snippets above.
      </Note>
      <div>
        Now suppose we have a vector written in System 2's language, and we want to know where 
        it lands after a linear transformation. We only have that transformation's matrix written 
        in System 1's language (here, a 90° rotation), along with the change of basis matrix. 
        So we first convert the vector to System 1's language, apply the transformation, then 
        convert the result back to System 2's language.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v_2} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}
          \quad\quad
          \boldsymbol{A} =
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
        <BlockMath math={String.raw`
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
        <CodeBlock code={
`import numpy as np

v2 = np.array([1, 2])

i2 = np.array([2, 1])
j2 = np.array([-1, 3])

A = np.array([i2, j2]).T

T1 = np.array([[0, -1], 
              [1, 0]])

print("Vector v2 following the transformation, in System 2's language:")
print(np.linalg.inv(A) @ T1 @ A @ v2)`
        } editable={true} />
      </div>
      <Note>
        You can think of the composition matrix <strong>A⁻¹T₁A</strong> as linear
        transformation <strong>T₁</strong>, but expressed in System 2's language.
      </Note>
    </>
  )
}