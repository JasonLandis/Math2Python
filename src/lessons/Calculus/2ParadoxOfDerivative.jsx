import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function ParadoxOfDerivative() {
  return (
    <>
      <div>
        Below is the formula for the derivative of some function f(x).
      </div>
      <div>
        <Equation math={String.raw`
          f'(x) = \lim_{dx \to 0} \frac{f(x + dx) - f(x)}{dx}
        `} />
      </div>
      <div>
        Let's say we plug in x = 3 and dx = 0.001 into this function.
      </div>
      <div>
        <Equation math={String.raw`
          f'(3) \approx \frac{f(3 + 0.001) - f(3)}{0.001}
        `} />
      </div>
      <div>
        Now let's say f(x) = x². What we are calculating below is essentially the slope of the 
        graph between points x = 3 and x = 3.001.
      </div>
      <div>
        <Equation math={String.raw`
          f'(3) \approx \frac{3.001^2 - 3^2}{0.001} \approx 6
        `} />
      </div>
      <div>
        Below is how we can algebraically compute the derivative of f(x) = x².
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          f'(x) &= \lim_{dx \to 0} \frac{(x + dx)^2 - x^2}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{x^2 + 2x\,dx + (dx)^2 - x^2}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{2x\,dx + (dx)^2}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{dx(2x + dx)}{dx} \\[2em]
                &= \lim_{dx \to 0} (2x + dx) \\[2em]
                &= 2x
          \end{aligned}
        `} />
      </div>
      <div>
        <Note>
          In the last step above, dx drops out because we take the limit as dx → 0, leaving just 2x.
        </Note>
      </div>
      <div>
        We can verify if our approximation is correct by inputing our value of x into f'(x).
      </div>
      <div>
        <Equation math={String.raw`
          f'(x) = 2x \newline
          f'(3) = 2(3) = 6
        `} />
      </div>
      <div>
        <CodeBlock code={
`def f(x):
    return x ** 2

x = 3 # Some random point on the graph
dx = 0.001 # A tiny step to the right

derivative = (f(x + dx) - f(x)) / dx

print(f"Derivative calculated at x = {x}: {derivative}")
print("Expected (2x):", 2 * x)`
        } editable={true} />
      </div>
      <div>
        Now let's say we wanted to calculate the derivative of the function f(x) = 2x³ + 5.
        Below is how we can compute this algebraically.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          f'(x) &= \lim_{dx \to 0} \frac{\big(2(x + dx)^3 + 5\big) - \big(2x^3 + 5\big)}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{\big(2(x^3 + 3x^2\,dx + 3x\,(dx)^2 + (dx)^3) + 5\big) - \big(2x^3 + 5\big)}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{\big(2x^3 + 6x^2\,dx + 6x\,(dx)^2 + 2(dx)^3 + 5\big) - \big(2x^3 + 5\big)}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{2x^3 + 6x^2\,dx + 6x\,(dx)^2 + 2(dx)^3 + 5 - 2x^3 - 5}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{6x^2\,dx + 6x\,(dx)^2 + 2(dx)^3}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{dx\big(6x^2 + 6x\,dx + 2(dx)^2\big)}{dx} \\[2em]
                &= \lim_{dx \to 0} \big(6x^2 + 6x\,dx + 2(dx)^2\big) \\[2em]
                &= 6x^2
          \end{aligned}
        `} />
      </div>
      <div>
        <CodeBlock code={
`def f(x):
    return 2 * x ** 3 + 5

x = 4
dx = 0.001

derivative = (f(x + dx) - f(x)) / dx

print(f"Derivative calculated at x = {x}: {derivative}")
print("Expected (6x²):", 6 * x ** 2)`
        } editable={true} />
      </div>
        We can use SymPy to calculate the derivative of a polynomial as seen below.
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = 2*x**3 + 5 # 2x³ + 5

derivative = sp.diff(f, x)
print("Symbolic derivative computed using SymPy:", derivative)`
        } editable={true} />
      </div>
    </>
  )
}
