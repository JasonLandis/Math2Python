import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function Eigenvectors() {
  return (
    <>
      <div>
        An <strong>eigenvector</strong> of a linear transformation is a nonzero vector that stays on its own
        line (its span) during the transformation. It only gets stretched, squished, or flipped. The factor
        it gets scaled by is its <strong>eigenvalue</strong>, written as λ. Below, A represents
        the linear transformation and v represents an eigenvector.
      </div>
      <div>
        <Equation math={String.raw`
          Av = \lambda v
        `} />
      </div>
      <div>
        To solve for the eigenvalues, we can rewrite λv as λIv,
        where I is the identity matrix, and move everything to one side.
      </div>
      <div>
        <Equation math={String.raw`
          Av - \lambda Iv = 0 \Rightarrow
          (A - \lambda I)v = 0
        `} />
      </div>
      <div>
        We need a nonzero vector v that the matrix A - λI sends
        to the origin. From the inverse matrices lesson, that only happens when the matrix squishes space
        into a lower dimension, which means its determinant must be 0. This gives us the formula below.
      </div>
      <div>
        <Equation math={String.raw`
          A =
          \begin{bmatrix}
            3 & 1 \\
            0 & 2
          \end{bmatrix}
          \qquad
          I =
          \begin{bmatrix}
            1 & 0 \\
            0 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \text{det}\left(A - \lambda I\right) = 0
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \text{det}\left(
            \begin{bmatrix}
              3 & 1 \\
              0 & 2
            \end{bmatrix} -
            \lambda \begin{bmatrix}
              1 & 0 \\
              0 & 1
            \end{bmatrix}
          \right) =
          0
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \text{det}\left(
            \begin{bmatrix}
              3 - \lambda & 1 \\
              0 & 2 - \lambda
            \end{bmatrix}
          \right) =
          0
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          (3 - \lambda)(2 - \lambda) - (1)(0) = 0
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          (3 - \lambda)(2 - \lambda) = 0
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \lambda = 3 \text{ or } \lambda = 2
        `} />
      </div>
      <div>
        To find the eigenvector for each eigenvalue, plug the eigenvalue back
        into (A - λI)v = 0 and solve for v.
      </div>
      <div>
        <Equation math={String.raw`
          \lambda = 3: \begin{bmatrix}
            0 & 1 \\
            0 & -1
          \end{bmatrix}
          \begin{bmatrix} x \\ y \end{bmatrix} = 0 \Rightarrow
          y = 0 \Rightarrow
          v = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \lambda = 2: \begin{bmatrix}
            1 & 1 \\
            0 & 0
          \end{bmatrix}
          \begin{bmatrix} x \\ y \end{bmatrix} = 0 \Rightarrow
          x = -y \Rightarrow
          v = \begin{bmatrix} -1 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

eigen = np.linalg.eig(A)

print("Eigenvectors of A:")
print(eigen.eigenvectors, '\\n')

print("Eigenvalues of A:")
print(eigen.eigenvalues)`
        } editable={true} />
      </div>
      <div>
        <Note>
          In the output above, the eigenvectors are the columns [1, 0] and [-0.7071, 0.7071],
          with corresponding eigenvalues 3 and 2, respectively. Any scaled copy of an
          eigenvector is also an eigenvector, so [-0.7071, 0.7071] points along the same line
          as [-1, 1]. NumPy always picks the version with a length of 1.
        </Note>
      </div>
      <div>
        By the defining property of eigenvectors, applying a linear transformation A to an
        eigenvector gives the same result as multiplying that eigenvector by its eigenvalue.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

eigen = np.linalg.eig(A)

for n in range(len(eigen.eigenvalues)):
    print(f"Eigenvector {n + 1}: {eigen.eigenvectors[:, n]}\\n")

    print("Applying transformation A:")
    print(A @ eigen.eigenvectors[:, n], '\\n')

    print("Scaling by its eigenvalue:", eigen.eigenvalues[n])
    print(eigen.eigenvalues[n] * eigen.eigenvectors[:, n], '\\n')`
        } editable={true} />
      </div>
      <div>
        Below is an example of solving for the eigenvalues and eigenvectors in 3D.
        The transformation matrix A represents a 90° counterclockwise rotation about
        the z-axis. Intuitively, a rotation should have an eigenvector being its axis of rotation, which
        stays fixed as everything else turns about the origin. Since the axis isn't stretched at all,
        its eigenvalue is 1.
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
      <div>
        <Note>
          The output above may look confusing because NumPy returns all eigenvectors and their eigenvalues,
          including complex ones. Python writes the imaginary unit as j, so you can tell an
          eigenvalue or eigenvector is complex if it has a nonzero j component. In this example,
          only one eigenvalue/eigenvector pair is real (λ = 1 with
          eigenvector [0, 0, 1]), so this transformation has only one real eigenvector and eigenvalue.
        </Note>
      </div>
      <div>
        A <strong>diagonal matrix</strong> is a square matrix where every entry off the main diagonal is zero.
        The eigenvectors of a diagonal matrix are the standard basis vectors, and each eigenvalue is the
        corresponding diagonal entry of the matrix. Intuitively, you can think of a diagonal matrix as
        being a transformation that scales each basis vector by its own diagonal entry.
      </div>
      <div>
        <Equation math={String.raw`
          A =
          \begin{bmatrix}
            -1 & 0 \\
            0 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \lambda_1 = -1 \rightarrow \begin{bmatrix} 1 \\ 0 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \lambda_2 = 2 \rightarrow \begin{bmatrix} 0 \\ 1 \end{bmatrix}
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
        If you know the eigenvectors of some matrix A, you can use them as the basis vectors
        of a new coordinate system. This set of basis vectors is called the <strong>eigenbasis</strong>. The
        change of basis matrix B has those eigenvectors as its columns.
        Just like in the change of basis lesson, B⁻¹AB is the transformation A written
        in the eigenbasis's language. In that language, each basis vector is an eigenvector that only gets
        scaled, so B⁻¹AB is a diagonal matrix, and the eigenvalues can be read directly off the diagonal.
      </div>
      <div>
        Not every matrix has an eigenbasis. You need enough eigenvectors to span the whole space. For example,
        a 2D rotation has no real eigenvectors at all, and a shear such as [[1, 1], [0, 1]] only has
        a single line of eigenvectors.
      </div>
      <div>
        <Equation math={String.raw`
          A =
          \begin{bmatrix}
            3 & 1 \\
            0 & 2
          \end{bmatrix}
          \qquad
          \text{eigenvectors of }A \rightarrow
          \begin{bmatrix} 1 \\ 0 \end{bmatrix} \text{ and } \begin{bmatrix} -1 \\ 1 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          B =
          \begin{bmatrix}
            1 & -1 \\
            0 & 1
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          B^{-1}AB =
          \begin{bmatrix}
            3 & 0 \\
            0 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \lambda_1 = 3
          \qquad
          \lambda_2 = 2
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

print("Eigenvalues of A (read off the diagonal):")
print(np.diag(diagonal_matrix))`
        } editable={true} />
      </div>
      <div>
        One reason diagonal matrices are so useful is that they make repeated transformations easy to
        calculate. Applying A many times in a row (A<sup>n</sup>) is hard to
        calculate directly. But if D = B⁻¹AB, then A<sup>n</sup> = BD<sup>n</sup>B⁻¹,
        and D<sup>n</sup> is just each diagonal entry raised to the n.
      </div>
      <div>
        <Equation math={String.raw`
          A^n = BD^nB^{-1}
          \qquad
          D^n =
          \begin{bmatrix}
            3^n & 0 \\
            0 & 2^n
          \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[3, 1],
              [0, 2]])

B = np.array([[1, -1],
              [0, 1]])

n = 10

D_n = np.diag([3 ** n, 2 ** n])

print("A to the power of 10 using the eigenbasis:")
print(B @ D_n @ np.linalg.inv(B), '\\n')

print("A to the power of 10 calculated directly:")
print(np.linalg.matrix_power(A, n))`
        } editable={true} />
      </div>
    </>
  )
}
