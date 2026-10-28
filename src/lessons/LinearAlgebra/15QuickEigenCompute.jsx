import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function QuickEigenCompute() {
  return (
    <>
      <div>
        For a 2x2 matrix, the two eigenvalues have a neat relationship. They add up to the sum of the
        matrix's diagonal entries, which is called the <strong>trace</strong>, and they multiply to give
        its determinant.
      </div>
      <div>
        To see why, look at the formula from the eigenvectors lesson. For a general 2x2
        matrix, det(A - λI) = 0 expands to the equation below. In an equation like this,
        the middle coefficient is the sum of the two solutions and the last term is their product.
      </div>
      <div>
        <Equation math={String.raw`
          A =
          \begin{bmatrix}
            a & b \\
            c & d
          \end{bmatrix}
          \qquad
          \lambda^2 - (a + d)\lambda + (ad - bc) = 0
        `}/>
      </div>
      <div>
        Let m be the mean of the two eigenvalues (half the trace) and p be
        their product (the determinant). The two eigenvalues sit the same distance k above
        and below the mean, so they are m + k and m - k. Multiplying them
        together lets us solve for k.
      </div>
      <div>
        <Equation math={String.raw`
          (m + k)(m - k) = m^2 - k^2 = p \Rightarrow k = \sqrt{m^2 - p}
        `}/>
      </div>
      <div>
        This gives the general formula for both eigenvalues.
      </div>
      <div>
        <Equation math={String.raw`
          \lambda = m \pm \sqrt{m^2 - p}
        `}/>
      </div>
      <div>
        <Equation math={String.raw`
          A =
          \begin{bmatrix}
            2 & 7 \\
            1 & 8
          \end{bmatrix}
          \qquad
          m = \frac{2 + 8}{2} = 5
          \qquad
          p = \text{det}(A) = (2)(8) - (7)(1) = 9
        `}/>
      </div>
      <div>
        <Equation math={String.raw`
          \lambda_1 = 5 + \sqrt{5^2 - 9} = 5 + \sqrt{16} = 9
          \qquad
          \lambda_2 = 5 - \sqrt{5^2 - 9} = 5 - \sqrt{16} = 1
        `}/>
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[2, 7],
              [1, 8]])

mean = (A[0, 0] + A[1, 1]) / 2

det_A = A[0, 0] * A[1, 1] - A[0, 1] * A[1, 0]

eig1 = mean + np.emath.sqrt(mean ** 2 - det_A)
eig2 = mean - np.emath.sqrt(mean ** 2 - det_A)

print("Eigenvalues using the quick trick:")
print("Eigenvalue 1:", eig1)
print("Eigenvalue 2:", eig2, '\\n')

print("Eigenvalues using NumPy's built-in method:")
print(np.linalg.eigvals(A))`
        } editable={true} />
      </div>
      <div>
        Below is the matrix from the eigenvectors lesson. The trick gives the same eigenvalues, 3 and 2,
        much faster than solving det(A - λI) = 0 by hand.
      </div>
      <div>
        <Equation math={String.raw`
          A =
          \begin{bmatrix}
            3 & 1 \\
            0 & 2
          \end{bmatrix}
          \qquad
          m = \frac{3 + 2}{2} = 2.5
          \qquad
          p = (3)(2) - (1)(0) = 6
        `}/>
      </div>
      <div>
        <Equation math={String.raw`
          \lambda = 2.5 \pm \sqrt{2.5^2 - 6} = 2.5 \pm \sqrt{0.25} = 2.5 \pm 0.5 \Rightarrow
          \lambda_1 = 3
          \qquad
          \lambda_2 = 2
        `}/>
      </div>
      <div>
        If m² - p is negative, the eigenvalues are complex. For example, the 90° rotation
        below has m = 0 and p = 1, so the trick gives the square root of -1.
        This matches the eigenvectors lesson, where rotations had no real eigenvectors.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[0, -1],
              [1, 0]])

mean = (A[0, 0] + A[1, 1]) / 2

det_A = A[0, 0] * A[1, 1] - A[0, 1] * A[1, 0]

eig1 = mean + np.emath.sqrt(mean ** 2 - det_A)
eig2 = mean - np.emath.sqrt(mean ** 2 - det_A)

print("Eigenvalues using the quick trick:")
print("Eigenvalue 1:", eig1)
print("Eigenvalue 2:", eig2)`
        } editable={true} />
      </div>
      <div>
        <Note>
          np.emath.sqrt returns a complex number when given a negative input, while the
          regular math.sqrt would raise an error. Python writes the imaginary unit
          as j, so the output above is ±i.
        </Note>
      </div>
      <div>
        <Note>
          For larger matrices, the eigenvalues still add up to the trace and multiply to the determinant.
          The trick only works for 2x2 matrices because two facts are only enough to find two unknown
          eigenvalues. A 3x3 matrix has three.
        </Note>
      </div>
    </>
  )
}
