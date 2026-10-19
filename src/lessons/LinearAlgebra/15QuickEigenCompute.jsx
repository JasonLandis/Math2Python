import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function QuickEigenCompute() {
  return (
    <>
      <div>
        For a 2x2 matrix, the two eigenvalues have a neat relationship. They add up to the sum of the 
        matrix's diagonal entries, and they multiply to give its determinant. Knowing the sum tells 
        you their average, so you can picture the two eigenvalues as sitting equally far above and 
        below that average. All that's left is figuring out how far, and the product gives you that. The 
        farther apart the two values are from the average, the smaller their product becomes, so you 
        can work backward from the known product to find the exact distance. Add that distance to the 
        average for one eigenvalue and subtract it for the other.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} = \begin{bmatrix} 2 & 7 \\ 1 & 8 \end{bmatrix}
          \quad\quad
          \text{average} = \frac{2 + 8}{2} = 5
          \quad\quad
          \text{det}(\boldsymbol{A}) = (2)(8) - (7)(1) = 9
        `}/>
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\lambda_1} = 5 + \sqrt{5^2 - 9} = 5 + \sqrt{16} = 9
          \quad\quad
          \boldsymbol{\lambda_2} = 5 - \sqrt{5^2 - 9} = 5 - \sqrt{16} = 1
        `}/>
      </div>
      <div>
        <CodeBlock code={
`import numpy as np
import math

A = np.array([[2, 7],
              [1, 8]])

average = (A[0][0] + A[1][1]) / 2

det_A = np.linalg.det(A)

eig1 = average + math.sqrt(average ** 2 - det_A)
eig2 = average - math.sqrt(average ** 2 - det_A)

print("Eigenvalues using the quick trick:")
print("Eigenvalue 1:", eig1)
print("Eigenvalue 2:", eig2, '\\n')

print("Eigenvalues using numpy's built-in method:")
print(np.linalg.eigvals(A))`
        } editable={true} />
      </div>
      <Note>
        This quick trick is specific to 2x2 matrices because it relies on there being 
        exactly two eigenvalues whose sum and product you know.
      </Note>
    </>
  )
}
