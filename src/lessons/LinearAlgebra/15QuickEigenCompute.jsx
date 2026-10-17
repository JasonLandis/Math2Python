import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function QuickEigenCompute() {
  return (
    <>
      <div>
        Below is a quick method in which eigenvalues can be computed.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np
import math

A = np.array([[2, 7],
              [1, 8]])

m = (A[0][0] + A[1][1]) / 2

# (2)(8) - (7)(1)
p = np.linalg.det(A)

eig1 = m + math.sqrt(m ** 2 - p)
eig2 = m - math.sqrt(m ** 2 - p)

print("Caculating the eigenvalues manually using the quick trick:")
print("Eigenvalue 1:", eig1)
print("Eigenvalue 2:", eig2)
print("")

print("Calculating the eigenvalues using the built-in method:")
print(np.linalg.eigvals(A))`
        } editable={true} />
      </div>
    </>
  )
}
