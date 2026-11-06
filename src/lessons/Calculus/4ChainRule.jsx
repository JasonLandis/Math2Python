import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function ChainRule() {
  return (
    <>
      <div>
        So far we know how to take the derivative of simple functions like xⁿ, sin(x), and cos(x).
        Most functions, however, are built by combining simpler ones. There are three main ways to
        combine functions: adding them, multiplying them, and putting one inside another. Each of
        these has its own rule for finding the derivative.
      </div>
      <div>
        The first is the sum rule. The derivative of the sum of two functions is the sum of those
        functions' derivatives.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} \big(f(x) + g(x)\big) = f'(x) + g'(x)
        `} />
      </div>
      <div>
        Picture the graph of f(x) + g(x) as the graph of g(x) stacked on top of the graph of f(x).
        When x changes by a tiny amount dx, the total height changes by the change in f plus the
        change in g. So the change in the sum is just the sum of the changes.
      </div>
      <div>
        For example, let f(x) = 4x⁴ and g(x) = 2√x. Using the power rule on each piece separately,
        the derivative of f(x) + g(x) is the following.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          \frac{d}{dx} \big(4x^4 + 2\sqrt{x}\big) &= \frac{d}{dx} 4x^4 + \frac{d}{dx} 2\sqrt{x} \\[2em]
                &= 16x^3 + 2 \cdot \frac{1}{2\sqrt{x}} \\[2em]
                &= 16x^3 + \frac{1}{\sqrt{x}}
          \end{aligned}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = 4*x**4 # f(x) = 4x⁴
g = 2*sp.sqrt(x) # g(x) = 2√x
h = f + g # f(x) + g(x) = 4x⁴ + 2√x

derivative = sp.diff(f, x)
print("Symbolic derivative of 4x⁴ computed using SymPy:", derivative)

derivative = sp.diff(g, x)
print("Symbolic derivative of 2√x computed using SymPy:", derivative)

derivative = sp.diff(h, x)
print("Symbolic derivative of 4x⁴ + 2√x computed using SymPy:", derivative)`
        } editable={true} />
      </div>
      <div>
        Here are a couple more examples. Notice that in each case the derivative of the sum
        matches the sum of the individual derivatives.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} \big(3x^2 + 2x^3\big) = 6x + 6x^2
          \qquad
          \frac{d}{dx} \big(2x^2 + 4x^2\big) = 4x + 8x = 12x
        `} />
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = 3*x**2 # f(x) = 3x²
g = 2*x**3 # g(x) = 2x³
h = f + g # f(x) + g(x) = 3x² + 2x³

print("Derivative of 3x²:", sp.diff(f, x))
print("Derivative of 2x³:", sp.diff(g, x))
print("Derivative of 3x² + 2x³:", sp.diff(h, x))

print("\\n----------------------------------------------\\n")

f = 2*x**2 # f(x) = 2x²
g = 4*x**2 # g(x) = 4x²
h = f + g # f(x) + g(x) = 2x² + 4x²

print("Derivative of 2x²:", sp.diff(f, x))
print("Derivative of 4x²:", sp.diff(g, x))
print("Derivative of 2x² + 4x²:", sp.diff(h, x))`
        } editable={true} />
      </div>
      <div>
        The second is the product rule. When two functions are multiplied together, it's helpful
        to picture them as the width and height of a rectangle. The product f(x) · g(x) is then
        the area of that rectangle.
      </div>
      <div>
        When x changes by a tiny amount dx, the width grows by df and the height grows by dg. The
        rectangle gains a thin strip of area g · df along one side, a thin strip of area f · dg
        along the other, and a tiny corner piece of area df · dg.
      </div>
      <div>
        <Equation math={String.raw`
          d(f \cdot g) = g\,df + f\,dg + df\,dg
        `} />
      </div>
      <div>
        Dividing by dx and letting dx approach 0, the corner piece vanishes and we are left with
        the product rule.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} \big(f(x) \cdot g(x)\big) = f'(x)\,g(x) + f(x)\,g'(x)
        `} />
      </div>
      <Note>
        Just like the corner square in the power rule lesson, the corner piece df · dg is so small
        compared to the two strips that it disappears as dx approaches 0. A common way to remember
        the product rule is "left d-right plus right d-left".
      </Note>
      <div>
        For example, let f(x) = 6x³ and g(x) = 2/x. Applying the product rule gives the following.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          \frac{d}{dx} \left(6x^3 \cdot \frac{2}{x}\right) &= 6x^3 \cdot \left(-\frac{2}{x^2}\right) + \frac{2}{x} \cdot 18x^2 \\[2em]
                &= 36x - 12x \\[2em]
                &= 24x
          \end{aligned}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = 6*x**3 # f(x) = 6x³
g = 2/x # g(x) = 2/x
h = f * g # f(x)·g(x) = 6x³·2/x

print("Derivative of 6x³:", sp.diff(f, x))
print("Derivative of 2/x:", sp.diff(g, x))
print("Derivative of 6x³·2/x:", sp.diff(h, x))

# Applying the product rule by hand: f'(x)·g(x) + f(x)·g'(x)
productRule = sp.diff(f, x) * g + f * sp.diff(g, x)
print("Product rule:", sp.simplify(productRule))`
        } editable={true} />
      </div>
      <div>
        Here is a more complex example. Let f(x) = 3x⁸ and g(x) = 4√(x + 2).
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          \frac{d}{dx} \left(3x^8 \cdot 4\sqrt{x + 2}\right) &= 24x^7 \cdot 4\sqrt{x + 2} + 3x^8 \cdot \frac{2}{\sqrt{x + 2}} \\[2em]
                &= 96x^7\sqrt{x + 2} + \frac{6x^8}{\sqrt{x + 2}}
          \end{aligned}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = 3*x**8 # f(x) = 3x⁸
g = 4*sp.sqrt(x + 2) # g(x) = 4√(x+2)
h = f * g # f(x)·g(x) = 3x⁸·4√(x+2)

print("Derivative of 3x⁸:", sp.diff(f, x))
print("Derivative of 4√(x+2):", sp.diff(g, x))
print("Derivative of 3x⁸·4√(x+2):", sp.diff(h, x))`
        } editable={true} />
      </div>
      <div>
        The third is the chain rule, which handles function composition: putting one function
        inside another. If h(x) = g(f(x)), then f is the inner function and g is the outer
        function. To find the derivative, first take the derivative of the outer function while
        leaving the inner function intact, then multiply by the derivative of the inner function.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} g\big(f(x)\big) = g'\big(f(x)\big) \cdot f'(x)
        `} />
      </div>
      <div>
        To see why, picture three number lines: one for x, one for f(x), and one for g(f(x)).
        A tiny nudge dx on the first line causes a nudge df = f'(x) · dx on the second line.
        That nudge df then causes a nudge dg = g'(f(x)) · df on the third line. Putting these
        together, the nudges multiply.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{dg}{dx} = \frac{dg}{df} \cdot \frac{df}{dx}
        `} />
      </div>
      <Note>
        Written this way it looks like the df terms simply cancel, which is a handy way to
        remember the chain rule. Keep in mind that dg/df is evaluated at f(x), not at x.
      </Note>
      <div>
        For example, let the inner function be f(x) = 9x² and the outer function be g(u) = 3√u,
        so that h(x) = 3√(9x²). The derivative of the outer function is g'(u) = 3 / (2√u), and the
        derivative of the inner function is f'(x) = 18x.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          \frac{d}{dx} 3\sqrt{9x^2} &= \frac{3}{2\sqrt{9x^2}} \cdot 18x \\[2em]
                &= \frac{27x}{\sqrt{9x^2}}
          \end{aligned}
        `} />
      </div>
      <Note>
        Since √(9x²) = 3|x|, this simplifies to 9 when x is positive and -9 when x is negative.
        That makes sense, because 3√(9x²) is just 9|x|, a V shape with slopes of -9 and 9.
      </Note>
      <div>
        <CodeBlock code={
`import sympy as sp

x, u = sp.symbols('x u')

f = 9*x**2 # f(x) = 9x² (inner function)
g = 3*sp.sqrt(u) # g(u) = 3√u (outer function)
h = g.subs(u, f) # g(f(x)) = 3√(9x²)

print("Derivative of 9x²:", sp.diff(f, x))
print("Derivative of 3√u:", sp.diff(g, u))
print("Derivative of 3√(9x²):", sp.diff(h, x))

# Applying the chain rule by hand: g'(f(x))·f'(x)
chainRule = sp.diff(g, u).subs(u, f) * sp.diff(f, x)
print("Chain rule:", sp.simplify(chainRule))`
        } editable={true} />
      </div>
      <Note>
        SymPy prints these two results as 9√(x²)/x and 9x/√(x²), which look different but are
        equal. Since √(x²) = |x|, the first is 9|x|/x and the second is 9x/|x|, and both are just
        9 when x is positive and -9 when x is negative. SymPy writes them differently because it
        doesn't know the sign of x, so it can't simplify √(x²) to x, and each calculation happens
        to leave the √(x²) in a different place. If we define x with
        sp.symbols('x', positive=True), both results simplify to 9.
      </Note>
      <div>
        We can also check the chain rule numerically with a function like sin(x²). Here the inner
        function is x² and the outer function is sin, so the chain rule says the derivative is
        cos(x²) · 2x.
      </div>
      <div>
        <CodeBlock code={
`import math

def f(x):
    return x ** 2 # inner function

def g(u):
    return math.sin(u) # outer function

def h(x):
    return g(f(x)) # sin(x²)

x = 1.5 # Some random point on the graph
dx = 0.0001 # A tiny step to the right

approximation = (h(x + dx) - h(x)) / dx
chainRule = math.cos(x ** 2) * 2 * x

print(f"Approximation at x = {x}: {approximation:.4f}")
print(f"Chain rule (cos(x²)·2x): {chainRule:.4f}")`
        } editable={true} />
      </div>
      <div>
        <Note>
          Try changing x and dx above to see how the approximation behaves.
        </Note>
      </div>
    </>
  )
}
