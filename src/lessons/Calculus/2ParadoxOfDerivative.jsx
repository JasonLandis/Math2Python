import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function ParadoxOfDerivative() {
  return (
    <>
      <div>
        Below is the formula for the derivative of some function <strong>f(x)</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{f'(x) = \lim_{dx \to 0} \frac{f(x + dx) - f(x)}{dx}}
        `} />
      </div>
      <div>
        Let's say we plug in <strong>x = 3</strong> and <strong>dx = 0.001</strong> into this function.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{f'(3) \approx \frac{f(3 + 0.001) - f(3)}{0.001}}
        `} />
      </div>
      <div>
        Now let's say <strong>f(x) = x²</strong>. What we are calculating below is essentially the slope of the 
        graph between points <strong>x = 3</strong> and <strong>x = 3.001</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{f'(3) 
          \approx 
          \frac{3.001^2 - 3^2}{0.001}}
          \approx 6
        `} />
      </div>
      <div>
        We can verify if our approximation is correct by inputing our value of <strong>x</strong> into <strong>f'(x)</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{f'(x) = 2x}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{2(3) = 6}
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
        Now let's say we wanted to calculate the derivative of the function <strong>f(x) = 2x³ + 5</strong>.
        Below is how we can compute this algebraically.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\frac{df}{dx}(x) = \frac{f(x + dx) - f(x)}{dx}}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\frac{\big(2(x + dx)^3 + 5\big) - \big(2x^3 + 5\big)}{dx}}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\frac{\big(2(x^3 + 3x^2\,dx + 3x\,dx^2 + dx^3) + 5\big) - \big(2x^3 + 5\big)}{dx}}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\frac{\big(2x^3 + 6x^2\,dx + 6x\,dx^2 + 2dx^3 + 5\big) - \big(2x^3 + 5\big)}{dx}}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\frac{6x^2\,dx + 6x\,dx^2 + 2dx^3}{dx}}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{6x^2 + 6x\,dx + 2dx^2}
        `} />
      </div>
      <div>
        At this point, we can ignore the terms <strong>6xdx</strong> and <strong>2dx²</strong> because these 
        terms will approach zero as <strong>dx</strong> approaches zero. Therefore, the derivative 
        of <strong>2x³ + 5</strong> is <strong>6x²</strong>.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{\frac{df}{dx}(x) = 6x^2}
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
