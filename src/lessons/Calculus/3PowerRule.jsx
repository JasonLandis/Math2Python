import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function PowerRule() {
  return (
    <>
      <div>
        The power rule tells us how to take the derivative of any function of the form xⁿ.
        The derivative of xⁿ is nxⁿ⁻¹.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} x^n = n x^{n-1}
        `} />
      </div>
      <div>
        Before seeing why this works in general, let's build some intuition with geometry.
        We can picture the function f(x) = x² as the area of a square with side length x.
        If we grow each side by a tiny amount dx, the square gains two thin rectangles of
        area x · dx along its sides, plus a tiny square of area (dx)² in the corner.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          f'(x) &= \lim_{dx \to 0} \frac{(x + dx)^2 - x^2}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{x^2 + 2x\,dx + (dx)^2 - x^2}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{2x\,dx + (dx)^2}{dx} \\[2em]
                &= \lim_{dx \to 0} (2x + dx) \\[2em]
                &= 2x
          \end{aligned}
        `} />
      </div>
      <Note>
        The two rectangles, 2x · dx, make up almost all of the new area. The corner piece (dx)²
        is so small compared to them that it vanishes as dx approaches 0.
      </Note>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = x**2 # x²

derivative = sp.diff(f, x)
print("Symbolic derivative of x² computed using SymPy:", derivative)`
        } editable={true} />
      </div>
      <div>
        Similarly, we can picture f(x) = x³ as the volume of a cube with side length x.
        Growing each side by dx adds three thin slabs, each with volume x² · dx, along with
        some much smaller pieces along the edges and in the corner.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          f'(x) &= \lim_{dx \to 0} \frac{(x + dx)^3 - x^3}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{(x^2 + 2x\,dx + (dx)^2)(x + dx) - x^3}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{x^3 + 3x^2\,dx + 3x\,(dx)^2 + (dx)^3 - x^3}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{3x^2\,dx + 3x\,(dx)^2 + (dx)^3}{dx} \\[2em]
                &= \lim_{dx \to 0} \big(3x^2 + 3x\,dx + (dx)^2\big) \\[2em]
                &= 3x^2
          \end{aligned}
        `} />
      </div>
      <Note>
        The three slabs give us the 3x² term. The terms 3x · dx and (dx)² come from the edge and
        corner pieces, and they vanish as dx approaches 0.
      </Note>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = x**3 # x³

derivative = sp.diff(f, x)
print("Symbolic derivative of x³ computed using SymPy:", derivative)`
        } editable={true} />
      </div>
      <div>
        The same pattern holds for any power n. If we expand (x + dx)ⁿ, the first term is xⁿ,
        the second term is nxⁿ⁻¹ · dx, and every remaining term contains (dx)² or a higher power
        of dx.
      </div>
      <div>
        <Equation math={String.raw`
          (x + dx)^n = x^n + n x^{n-1}\,dx + (\text{terms with } (dx)^2 \text{ or higher})
        `} />
      </div>
      <div>
        When we subtract the original xⁿ and divide by dx, we are left with nxⁿ⁻¹ plus terms
        that still contain dx. As dx approaches 0, those terms vanish, leaving only nxⁿ⁻¹.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          f'(x) &= \lim_{dx \to 0} \frac{(x + dx)^n - x^n}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{n x^{n-1}\,dx + (\text{terms with } (dx)^2 \text{ or higher})}{dx} \\[2em]
                &= \lim_{dx \to 0} \big(n x^{n-1} + (\text{terms with } dx \text{ or higher})\big) \\[2em]
                &= n x^{n-1}
          \end{aligned}
        `} />
      </div>
      <div>
        We can check the power rule numerically for several powers at once. Try changing x
        and dx to see how the approximation behaves.
      </div>
      <div>
        <CodeBlock code={
`x = 2 # Some random point on the graph
dx = 0.0001 # A tiny step to the right

for n in range(1, 6):
    approximation = ((x + dx) ** n - x ** n) / dx
    powerRule = n * x ** (n - 1)
    print(f"n = {n}: approximation = {approximation:.4f}, power rule (nx^(n-1)) = {powerRule}")`
        } editable={true} />
      </div>
      <div>
        The power rule also works for negative powers. The function f(x) = 1/x can be
        written as x⁻¹, so applying the power rule with n = -1 gives us the following.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} \frac{1}{x} = \frac{d}{dx} x^{-1} = -1 \cdot x^{-2} = -\frac{1}{x^2}
        `} />
      </div>
      <Note>
        Geometrically, picture a rectangle with an area of 1, a width of x, and a height of 1/x.
        As the width grows by dx, the height must shrink to keep the area at 1, which is why the
        derivative is negative.
      </Note>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = 1/x # 1/x

derivative = sp.diff(f, x)
print("Symbolic derivative of 1/x computed using SymPy:", derivative)`
        } editable={true} />
      </div>
      <div>
        It also works for fractional powers. The function f(x) = √x can be written as x^(1/2),
        so applying the power rule with n = 1/2 gives us the following.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} \sqrt{x} = \frac{d}{dx} x^{1/2} = \frac{1}{2} x^{-1/2} = \frac{1}{2\sqrt{x}}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = sp.sqrt(x) # √x

derivative = sp.diff(f, x)
print("Symbolic derivative of √x computed using SymPy:", derivative)`
        } editable={true} />
      </div>
      <div>
        Not every function is a power of x. Two important examples are sin(x) and cos(x).
        Picture a point moving around a circle of radius 1, where x is the angle (or arc length)
        it has travelled. The point's height is sin(x) and its horizontal position is cos(x).
        When the point moves a tiny distance dx along the circle, its height changes by about
        cos(x) · dx and its horizontal position changes by about -sin(x) · dx.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} \sin(x) = \cos(x)
          \qquad
          \frac{d}{dx} \cos(x) = -\sin(x)
        `} />
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f1 = sp.sin(x)
f2 = sp.cos(x)

print("Derivative of sin(x):", sp.diff(f1, x))
print("Derivative of cos(x):", sp.diff(f2, x))`
        } editable={true} />
      </div>
    </>
  )
}
