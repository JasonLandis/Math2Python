import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function Eigenvectors() {
  return (
    <>
      <div>
        Eigenvectors are vectors within a transformation that only scale by some value. These 
        values are the eigenvalues of those eigenvectors.
      </div>
      <div>
        To solve for the eigenvalues we use the formula det(A - λI) = 0. (3-λ)(2-λ) - (1)(0) = 0. 
        (3-λ)(2-λ) = 0. λ = 3 or λ = 2.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

I = np.array([[1, 0],
              [0, 1]])

eigen = np.linalg.eig(A)

print("Example with 2 real eigenvectors:")
print("Eigenvectors of A:")
print(eigen.eigenvectors)
print("")

print("Eigenvalues of A:")
print(eigen.eigenvalues)
print("")

print("Checking if the formula holds true for each solution:")
print("Each eigenvector here is just one example of a vector on a span of infinitely many eigenvectors:")
for x in range(len(eigen.eigenvalues)):
    print("Solution:", x + 1)
    print(f"{A @ eigen.eigenvectors[:, x]} = {eigen.eigenvalues[x] * eigen.eigenvectors[:, x]}")`
        } editable={true} />
      </div>
      <div>
        # To solve for the eigenvalues we use the formula det(A - λI) = 0
# (2-λ)(4-λ) - (3)(-1) = 0
# (2-λ)(4-λ) + 3 = 0
# λ² - 6λ + 11 = 0
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[2, 3],
              [-1, 4]])

I = np.array([[1, 0],
              [0, 1]])

coefficients = [1, -6, 11]
roots = np.roots(coefficients)

print("Example with no real eigenvectors (only imaginary):")
print("Manually calculating the eigenvalues:")
print(roots)
print("")

eigen = np.linalg.eig(A)

print("Eigenvectors of A:")
print(eigen.eigenvectors)
print("")

print("Eigenvalues of A:")
print(eigen.eigenvalues)
print("")

print("Checking if the formula holds true for each solution:")
for x in range(len(eigen.eigenvalues)):
    print("Solution:", x + 1)
    print(f"{A @ eigen.eigenvectors[:, x]} = {eigen.eigenvalues[x] * eigen.eigenvectors[:, x]}")`
        } editable={true} />
      </div>
      <div>
        Below is an example in 3 dimensions.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[0, -1, 0],
              [1,  0, 0],
              [0,  0, 1]])

eigen = np.linalg.eig(A)

print("3d rotation example (Only one real eigenvector):")
print("Eigenvectors of A:")
print(eigen.eigenvectors)
print("")

print("Eigenvalues of A:")
print(eigen.eigenvalues)`
        } editable={true} />
      </div>
      <div>
        Below is an example where the basis vectors are both eigenvectors.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[-1, 0],
              [0, 2]])

eigen = np.linalg.eig(A)

print("Example where the basis vectors are both eigenvectors (Diagonal matrix):")
print("Eigenvectors of A:")
print(eigen.eigenvectors)
print("")

print("Eigenvalues of A:")
print(eigen.eigenvalues)`
        } editable={true} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

# We know vectors [1, 0] and [-1, 1] are eigen vectors of the matrix above.
changeOfBasis = np.array([[1, -1],
                          [0, 1]])

eigenBasis = np.linalg.inv(changeOfBasis) @ A @ changeOfBasis

print("Example involving a change of basis to where both basis vectors are eigenvectors:")
print("This only works if you know there are a combination of eigenvectors that span the full space:")
print("Eigenbasis matrix:")
print(eigenBasis)
print("")

eigen = np.linalg.eig(eigenBasis)

print("Eigenvectors of A:")
print(eigen.eigenvectors)
print("")

print("Eigenvalues of A:")
print(eigen.eigenvalues)`
        } editable={true} />
      </div>
    </>
  )
}
