import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function AbstractVectorSpaces() {
  return (
    <>
      <div>
        So far, vectors have been arrows or lists of numbers. But in linear algebra, anything that can be
        added together and scaled, following the usual rules, counts as a vector. A collection of such
        objects is called a <strong>vector space</strong>. Functions and polynomials are vectors in
        this sense, and every idea from the previous lessons (basis, span, linear transformations,
        eigenvectors) applies to them too.
      </div>
      <div>
        For example, a polynomial like 1 + 2x can be stored as the list of its coefficients.
        Adding or scaling polynomials gives the same result as adding or scaling their coefficient vectors.
      </div>
      <div>
        <Equation math={String.raw`
          (1 + 2x) + (3 - x + x^2) = 4 + x + x^2
          \qquad
          \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix} +
          \begin{bmatrix} 3 \\ -1 \\ 1 \end{bmatrix} =
          \begin{bmatrix} 4 \\ 1 \\ 1 \end{bmatrix}
        `}/>
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

f = np.polynomial.Polynomial([1, 2, 0])
g = np.polynomial.Polynomial([3, -1, 1])

f_coefficients = np.array([1, 2, 0])
g_coefficients = np.array([3, -1, 1])

print("Adding the polynomials:", (f + g).coef)
print("Adding the coefficient vectors:", f_coefficients + g_coefficients, '\\n')

print("Scaling the polynomial by 3:", (3 * f).coef)
print("Scaling the coefficient vector by 3:", 3 * f_coefficients)`
        } editable={true} />
      </div>
      <div>
        A transformation is called <strong>linear</strong> when it satisfies two properties:
        additivity, where transforming a sum of vectors gives the same result as summing
        the transformed vectors, and homogeneity, where scaling a vector before or after
        transforming it gives the same result. In other words, the order of adding, scaling,
        and transforming doesn't matter. These two rules are the formal version of "grid lines stay
        parallel and evenly spaced" from the linear transformations lesson.
      </div>
      <div>
        Matrix transformations always satisfy both properties. And because of these properties, a
        linear transformation only needs to know where the basis vectors go, so any linear
        transformation can be written as a matrix.
      </div>
      <div>
        <Equation math={String.raw`
          v = \begin{bmatrix} 2 \\ 3 \\ -1 \end{bmatrix}
          \qquad
          w = \begin{bmatrix} -1 \\ 2 \\ 3 \end{bmatrix}
          \qquad
          A =
          \begin{bmatrix}
            2 & 3 & 1 \\
            4 & -2 & -2 \\
            1 & -1 & 3
          \end{bmatrix}
          \qquad
          c = 3
        `}/>
      </div>
      <div>
        <Equation math={String.raw`
          \textbf{Additivity: } \allowbreak
          A(v + w) = Av + Aw =
          \begin{bmatrix} 19 \\ -10 \\ 2 \end{bmatrix}
        `}/>
      </div>
      <div>
        <Equation math={String.raw`
          \textbf{Homogeneity: } \allowbreak
          A(cv) = c(Av) =
          \begin{bmatrix} 36 \\ 12 \\ -12 \end{bmatrix}
        `}/>
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[2],
              [3],
              [-1]])

w = np.array([[-1],
              [2],
              [3]])

A = np.array([[2, 3, 1],
              [4, -2, -2],
              [1, -1, 3]])

c = 3

print("Adding, then applying the transformation:")
print(A @ (v + w), '\\n')

print("Applying the transformation, then adding:")
print((A @ v) + (A @ w), '\\n')

print("Scaling, then applying the transformation:")
print(A @ (c * v), '\\n')

print("Applying the transformation, then scaling:")
print(c * (A @ v))`
        } editable={true} />
      </div>
      <div>
        Differentiation is linear because of two familiar derivative rules. The derivative of a sum is
        the sum of the derivatives (additivity), and the derivative of a scaled function is the scaled
        derivative (homogeneity).
      </div>
      <div>
        <Equation math={String.raw`
          (f + g)' = f' + g'
          \qquad
          (cf)' = c f'
        `}/>
      </div>
      <div>
        Since differentiation is linear, it can be written as a matrix. Here, a polynomial is stored as
        a coefficient vector in the basis {`{1, x, x², x³}`}, so p represents -1 + 4x - 3x² + 2x³.
        Each column of A encodes what the derivative does to one basis
        element (1 → 0, x → 1, x² → 2x, x³ → 3x²), which is just the power
        rule: multiply each coefficient by its power and shift it down one slot.
        Moving p through the linear transformation A gives a new coefficient vector
        representing a polynomial that is the derivative of the original polynomial.
      </div>
      <div>
        <Equation math={String.raw`
          -1 + 4x - 3x^2 + 2x^3 \rightarrow \begin{bmatrix} -1 \\ 4 \\ -3 \\ 2 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix}
            0 & 1 & 0 & 0 \\
            0 & 0 & 2 & 0 \\
            0 & 0 & 0 & 3 \\
            0 & 0 & 0 & 0
          \end{bmatrix}
          \begin{bmatrix} -1 \\ 4 \\ -3 \\ 2 \end{bmatrix} =
          \begin{bmatrix} 4 \\ -6 \\ 6 \\ 0 \end{bmatrix}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \begin{bmatrix} 4 \\ -6 \\ 6 \\ 0 \end{bmatrix} \rightarrow 4 - 6x + 6x^2
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[0, 1, 0, 0],
              [0, 0, 2, 0],
              [0, 0, 0, 3],
              [0, 0, 0, 0]])

p = np.array([[-1],
              [4],
              [-3],
              [2]])

print("The derivative using the matrix:")
print(A @ p, '\\n')

print("The derivative using NumPy's polynomial tools:")
print(np.polynomial.Polynomial([-1, 4, -3, 2]).deriv().coef)`
        } editable={true} />
      </div>
      <div>
        The derivative matrix also connects back to earlier lessons. Its last row is all zeros, so its
        determinant is 0 and it cannot be inverted. Differentiating loses the constant term, which is
        why integration needs a "+ C" to account for it.
      </div>
      <div>
        Its only eigenvalue is 0, and its eigenvectors are the constant polynomials, since the
        derivative of a constant is 0 times that constant. Outside of polynomials, the
        function eˣ is an <strong>eigenfunction</strong> of the derivative with an eigenvalue
        of 1, because its derivative is itself.
      </div>
    </>
  )
}
