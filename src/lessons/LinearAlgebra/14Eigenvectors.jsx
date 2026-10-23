import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function Eigenvectors() {
  return (
    <>
      <div>
        <strong>Eigenvectors</strong> are vectors within a transformation that only scale by some value. These 
        values are the <strong>eigenvalues</strong> of those eigenvectors. We can solve for the eigenvalues
        by using the formula below. <strong>A</strong> represents the linear transformation, and <strong>I</strong> represents
        the identity matrix.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} = 
          \begin{bmatrix}
            3 & 1 \\
            0 & 2
          \end{bmatrix}
          \quad\quad
          \boldsymbol{I} =
          \begin{bmatrix}
            1 & 0 \\
            0 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \det\left(\boldsymbol{A}-\lambda\boldsymbol{I}\right) = 0
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \det\left(
            \begin{bmatrix}
              3 & 1 \\
              0 & 2
            \end{bmatrix}
            - \lambda
            \begin{bmatrix}
              1 & 0 \\
              0 & 1
            \end{bmatrix}
          \right) = 0
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \det\left(
            \begin{bmatrix}
              3 - \lambda & 1 \\
              0 & 2 - \lambda
            \end{bmatrix}
          \right) = 0
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          (3 - \lambda)(2 - \lambda) - (1)(0) = 0
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          (3 - \lambda)(2 - \lambda) = 0
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \lambda = 3 \quad \text{or} \quad \lambda = 2
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

I = np.array([[1, 0],
              [0, 1]])

eigen = np.linalg.eig(A)

print("Eigenvectors of A:")
print(eigen.eigenvectors, '\\n')

print("Eigenvalues of A:")
print(eigen.eigenvalues, '\\n')

print("Checking if the formula holds true for each solution:")
for x in range(len(eigen.eigenvalues)):
    print("Solution:", x + 1)
    print(f"{A @ eigen.eigenvectors[:, x]} = {eigen.eigenvalues[x] * eigen.eigenvectors[:, x]}\\n")`
        } editable={true} />
      </div>
      <Note>
        In the output above, the eigenvectors are <strong>[1, 0]</strong> and <strong>[-0.7071, 0.7071]</strong>, 
        with corresponding eigenvalues <strong>3</strong> and <strong>2</strong>, respectively.
      </Note>
      <div>
        By the defining property of eigenvectors, applying a linear transformation <strong>A</strong> to an 
        eigenvector gives the same result as multiplying that eigenvector by its eigenvalue.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

I = np.array([[1, 0],
              [0, 1]])

eigen = np.linalg.eig(A)

for x in range(len(eigen.eigenvalues)):
    print(f"Eigenvector {x + 1}: {eigen.eigenvectors[:, x]}\\n")

    print("Applying transformation A:")
    print(A @ eigen.eigenvectors[:, x], '\\n')

    print("Scaling by its eigenvalue:", eigen.eigenvalues[x])
    print(eigen.eigenvalues[x] * eigen.eigenvectors[:, x], '\\n')`
        } editable={true} />
      </div>
      <div>
        Below is an example of solving for the eigenvalues and eigenvectors in three dimensions. 
        The transformation matrix <strong>A</strong> represents a rotation. Intuitively, a rotation 
        should have an eigenvector being its axis of rotation, which stays fixed as everything 
        else turns about the origin.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[0, -1, 0],
              [1,  0, 0],
              [0,  0, 1]])

eigen = np.linalg.eig(A)

print("Eigenvectors of A:")
print(eigen.eigenvectors, '\\n')

print("Eigenvalues of A:")
print(eigen.eigenvalues)`
        } editable={true} />
      </div>
      <Note>
        The output above may look confusing because NumPy returns all eigenvectors and their eigenvalues, 
        including complex ones. You can tell an eigenvalue or eigenvector is complex if it has a 
        nonzero <strong>j</strong> (imaginary) component. In this example, only one eigenvalue/eigenvector pair is 
        real (<strong>λ = 1</strong> with eigenvector <strong>[0, 0, 1]</strong>), so this transformation has 
        only one real eigenvector and eigenvalue.
      </Note>
      <div>
        A <strong>diagonal matrix</strong> is a square matrix where every entry off the main diagonal is zero. 
        The eigenvectors of a diagonal matrix are the standard basis vectors, and each eigenvalue is the 
        corresponding diagonal entry of the matrix. Intuitively, you can think of a diagonal matrix as 
        being a transformation that simply scales all of the basis vectors.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} = 
          \begin{bmatrix}
            -1 & 0 \\
            0 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\lambda_1} \enspace = \enspace -1
          \enspace \rightarrow \enspace
          \begin{bmatrix} 1 \\ 0 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\lambda_2} \enspace = \enspace 2
          \enspace \rightarrow \enspace
          \begin{bmatrix} 0 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[-1, 0],
              [0, 2]])

eigen = np.linalg.eig(A)

print("Eigenvectors of A:")
print(eigen.eigenvectors, '\\n')

print("Eigenvalues of A:")
print(eigen.eigenvalues)`
        } editable={true} />
      </div>
      <div>
        If you know the eigenvectors of some matrix <strong>A</strong>, you can build a change-of-basis 
        matrix <strong>B</strong> with those eigenvectors as its columns. This is called 
        the <strong>eigenbasis</strong>. Transforming <strong>A</strong> into that 
        basis <strong>(B⁻¹AB)</strong> gives a diagonal matrix, and the eigenvalues 
        can be read directly off the diagonal.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{A} = 
          \begin{bmatrix}
            3 & 1 \\
            0 & 2
          \end{bmatrix}
          \quad\quad
          \text{eigenvectors of }\boldsymbol{A} 
          \enspace \rightarrow \enspace
          \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \enspace \text{and} \enspace
          \begin{bmatrix} -1 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{B} = 
          \begin{bmatrix}
            1 & -1 \\
            0 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{B^{-1}AB} = 
          \begin{bmatrix}
            3 & 0 \\
            0 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\lambda_1} = 3
          \quad\quad
          \boldsymbol{\lambda_2} = 2
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

B = np.array([[1, -1],
              [0, 1]])

diagonal_matrix = np.linalg.inv(B) @ A @ B

print("Diagonal matrix:")
print(diagonal_matrix, '\\n')

eigen = np.linalg.eig(diagonal_matrix)

print("Eigenvalues of A:")
print(eigen.eigenvalues)`
        } editable={true} />
      </div>
    </>
  )
}
