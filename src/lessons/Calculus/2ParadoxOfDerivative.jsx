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
        We can verify if our approximation is correct by inputing our value of x into f'(x).
      </div>
      <div>
        <Equation math={String.raw`
          f'(x) = 2x
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          2(3) = 6
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
          \frac{df}{dx}(x) = \frac{f(x + dx) - f(x)}{dx}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \frac{\big(2(x + dx)^3 + 5\big) - \big(2x^3 + 5\big)}{dx}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \frac{\big(2(x^3 + 3x^2\,dx + 3x\,dx^2 + dx^3) + 5\big) - \big(2x^3 + 5\big)}{dx}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \frac{\big(2x^3 + 6x^2\,dx + 6x\,dx^2 + 2dx^3 + 5\big) - \big(2x^3 + 5\big)}{dx}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \frac{6x^2\,dx + 6x\,dx^2 + 2dx^3}{dx}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          6x^2 + 6x\,dx + 2dx^2
        `} />
      </div>
      <div>
        At this point, we can ignore the terms 6xdx and 2dx² because these 
        terms will approach zero as dx approaches zero. Therefore, the derivative 
        of 2x³ + 5 is 6x².
      </div>
      <div>
        <Equation math={String.raw`
          \frac{df}{dx}(x) = 6x^2
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
      <Note>
        We can use SymPy to calculate the derivative of a polynomial.
      </Note>
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
