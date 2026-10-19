import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function AbstractVectorSpaces() {
  return (
    <>
      <div>
        A matrix transformation is linear because it satisfies two properties: 
        additivity, where transforming a sum of vectors gives the same result as summing 
        the transformed vectors, and homogeneity, where scaling a vector before or after 
        transforming it gives the same result. These hold for any matrix, which is why 
        matrices can represent linear maps. The order of adding, scaling, 
        and transforming doesn't matter.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v_1} = \begin{bmatrix} 2 \\ 3 \\ -1 \end{bmatrix}
          \quad\quad
          \boldsymbol{v_2} = \begin{bmatrix} -1 \\ 2 \\ 3 \end{bmatrix}
          \quad\quad
          \boldsymbol{A} = \begin{bmatrix} 
            2 & 3 & 1 \\ 
            4 & -2 & -2 \\ 
            1 & -1 & 3 
          \end{bmatrix}
          \quad\quad
          \boldsymbol{c} = 3
        `}/>
      </div>
      <div>
        <BlockMath math={String.raw`
          \textbf{Additivity:\enspace} \boldsymbol{A(v_1 + v_2) \enspace = \enspace Av_1 + Av_2}
          \enspace = \enspace
          \begin{bmatrix} 19 \\ -10 \\ 2 \end{bmatrix}
        `}/>
      </div>
      <div>
        <BlockMath math={String.raw`
          \textbf{Homogeneity:\enspace} \boldsymbol{A(cv_1) \enspace = \enspace c(Av_1)}
          \enspace = \enspace
          \begin{bmatrix} 36 \\ 12 \\ -12 \end{bmatrix}
        `}/>
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v1 = np.array([[2],
              [3],
              [-1]])

v2 = np.array([[-1],
               [2],
               [3]])

A = np.array([[2, 3, 1],
              [4, -2, -2],
              [1, -1, 3]])

c = 3

print("Adding, then applying the transformation:")
print(A @ (v1 + v2), '\\n')

print("Applying the transformation, then adding:")
print((A @ v1) + (A @ v2), '\\n')

print("Scaling, then applying the transformation:")
print(A @ (v1 * c), '\\n')

print("Applying the transformation, then scaling:")
print(c * (A @ v1))`
        } editable={true} />
      </div>
      <div>
        Differentiation is linear, so it can be written as a matrix. Here, a polynomial is stored as 
        a coefficient vector in the basis <strong>{`{1, x, x², x³}`}</strong>, so <strong>v</strong> represents <strong>-1 + 4x - 3x² + 2x³</strong>. 
        Each column of <strong>A</strong> encodes what the derivative does to one basis 
        element <strong>(1 → 0, x → 1, x² → 2x, x³ → 3x²)</strong>, which is just the power 
        rule: multiply each coefficient by its power and shift it down one slot. 
        Moving <strong>v</strong> through the linear transformation <strong>A</strong> gives a new coefficient vector 
        representing a polynomial that is the derivative of the original polynomial.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{-1 + 4x - 3x² + 2x³}
          \quad \boldsymbol{\rightarrow} \quad
          \begin{bmatrix} -1 \\ 4 \\ -3 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 
            0 & 1 & 0 & 0 \\ 
            0 & 0 & 2 & 0 \\ 
            0 & 0 & 0 & 3 \\ 
            0 & 0 & 0 & 0 
          \end{bmatrix}
          \begin{bmatrix} -1 \\ 4 \\ -3 \\ 2 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 4 \\ -6 \\ 6 \\ 0 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix} 4 \\ -6 \\ 6 \\ 0 \end{bmatrix}
          \quad \boldsymbol{\rightarrow} \quad
          \boldsymbol{4 - 6x + 6x²}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[0, 1, 0, 0],
              [0, 0, 2, 0],
              [0, 0, 0, 3],
              [0, 0, 0, 0]])

v = np.array([[-1],
              [4],
              [-3],
              [2]])

print("The derivative:")
print(A @ v)`
        } editable={true} />
      </div>
    </>
  )
}
