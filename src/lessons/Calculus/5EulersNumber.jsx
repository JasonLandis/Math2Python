import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function EulersNumber() {
  return (
    <>
      <div>
        So far we have taken derivatives of functions where x is the base, like xⁿ. In this lesson
        we look at exponential functions, where x is the exponent, like 2ˣ. Working out their
        derivatives leads us to one of the most important constants in mathematics: Euler's
        number, e.
      </div>
      <div>
        Let's start with f(x) = 2ˣ. If we step from x = 5 to x = 6, so that dx = 1, something
        interesting happens. The change in the function is exactly equal to the function itself.
      </div>
      <div>
        <Equation math={String.raw`
          f(6) - f(5) = 2^6 - 2^5 = 64 - 32 = 32 = f(5)
        `} />
      </div>
      <div>
        <CodeBlock code={
`def f(x):
    return 2 ** x

a = 5
dx = 1
b = a + dx

# When dx = 1, the change in 2^x appears to equal 2^x itself
print(f"f({a}) = {f(a)}")
print(f"f({b}) = {f(b)}")
print(f"f({b}) - f({a}) = {f(b) - f(a)}")`
        } editable={true} />
      </div>
      <div>
        It might be tempting to conclude that the derivative of 2ˣ is itself. But a derivative is
        about tiny changes, and a step of dx = 1 is not tiny. If we shrink dx to 0.1, the pattern
        breaks.
      </div>
      <div>
        <CodeBlock code={
`def f(x):
    return 2 ** x

a = 5
dx = 0.1
b = a + dx

# For smaller values of dx, the change is no longer equal to f(a)
print(f"f({a}) = {f(a)}")
print(f"f({b}) = {f(b)}")
print(f"f({b}) - f({a}) = {f(b) - f(a)}\\n")

# Dividing by dx gives the slope, which is also not equal to f(a)
print(f"(f({b}) - f({a})) / {dx} = {(f(b) - f(a)) / dx}")`
        } editable={true} />
      </div>
      <div>
        To see what is really going on, let's compute the derivative algebraically. The key step
        is that 2 raised to x + dx can be split into 2ˣ times 2ᵈˣ. Then we can factor 2ˣ out of the
        numerator.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          \frac{d}{dx} 2^x &= \lim_{dx \to 0} \frac{2^{x + dx} - 2^x}{dx} \\[2em]
                &= \lim_{dx \to 0} \frac{2^x \cdot 2^{dx} - 2^x}{dx} \\[2em]
                &= 2^x \cdot \lim_{dx \to 0} \frac{2^{dx} - 1}{dx}
          \end{aligned}
        `} />
      </div>
      <div>
        The limit on the right doesn't depend on x at all. It is just some constant. So the
        derivative of 2ˣ is not equal to itself, but it is proportional to itself: it is 2ˣ times
        some mystery constant.
      </div>
      <div>
        <CodeBlock code={
`dx = 0.0001

# The mystery proportionality constant for 2^x
print("Constant for 2^x:", (2 ** dx - 1) / dx)`
        } editable={true} />
      </div>
      <div>
        The same argument works for any base. Replacing 2 with 3 or 8 gives a different
        proportionality constant. Notice that the constant for 8 is exactly 3 times the constant
        for 2. Keep that in mind, since we will explain it at the end of the lesson.
      </div>
      <div>
        <CodeBlock code={
`dx = 0.0001

for base in [2, 3, 8]:
    constant = (base ** dx - 1) / dx
    print(f"Constant for {base}^x: {constant:.4f}")`
        } editable={true} />
      </div>
      <div>
        The constant for 2 is about 0.693, and the constant for 3 is about 1.099. Somewhere between
        2 and 3 there must be a base whose constant is exactly 1. That base is e, which is roughly
        2.71828. Because its proportionality constant is 1, the derivative of eˣ is simply itself.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} e^x = e^x \cdot \lim_{dx \to 0} \frac{e^{dx} - 1}{dx} = e^x \cdot 1 = e^x
        `} />
      </div>
      <div>
        <CodeBlock code={
`import math

dx = 0.0001

print("e =", math.e)
print("Constant for e^x:", (math.e ** dx - 1) / dx)`
        } editable={true} />
      </div>
      <Note>
        This gives the graph of eˣ a special property: at every point on the graph, the slope of
        the tangent line is equal to the height of the graph at that point.
      </Note>
      <div>
        We can confirm both results with SymPy. The derivative of 2ˣ comes back as 2ˣ times log(2),
        and the derivative of eˣ comes back as eˣ.
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp

x = sp.symbols('x')

f = 2**x # 2ˣ

derivative = sp.diff(f, x)
print("Symbolic derivative of 2ˣ computed using SymPy:", derivative)

f = sp.E**x # eˣ

derivative = sp.diff(f, x)
print("Symbolic derivative of eˣ computed using SymPy:", derivative)`
        } editable={true} />
      </div>
      <Note>
        SymPy writes log(2) to mean the natural logarithm of 2, often written ln(2). We will see
        what this has to do with our mystery constant shortly.
      </Note>
      <div>
        Now let's combine this with the chain rule from the previous lesson. Consider e raised to
        some constant c times x. The inner function is cx, whose derivative is c, and the outer
        function is eᵘ, whose derivative is itself. So the derivative is c times the original
        function.
      </div>
      <div>
        <Equation math={String.raw`
          \frac{d}{dx} e^{cx} = e^{cx} \cdot c = c\,e^{cx}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import sympy as sp
import math

x = sp.symbols('x')

f = sp.E**(3*x) # e³ˣ

derivative = sp.diff(f, x)
print("Symbolic derivative of e³ˣ computed using SymPy:", derivative)

# Numerically, the proportionality constant for e^(cx) is just c
c = 3
dx = 0.0001

print(f"Constant for e^({c}x):", (math.e ** (c * dx) - 1) / dx)`
        } editable={true} />
      </div>
      <div>
        This gives us a way to handle any exponential function. The number 2 can be rewritten as e
        raised to some power. The natural logarithm, ln(2), answers the question "e to the what
        equals 2?" So 2 = e^ln(2), and therefore 2ˣ can be written with base e.
      </div>
      <div>
        <Equation math={String.raw`
          \begin{aligned}
          2^x &= \left(e^{\ln(2)}\right)^x = e^{\ln(2)\,x} \\[2em]
          \frac{d}{dx} 2^x &= \frac{d}{dx} e^{\ln(2)\,x} = \ln(2) \cdot e^{\ln(2)\,x} = \ln(2) \cdot 2^x
          \end{aligned}
        `} />
      </div>
      <div>
        The mystery constants we computed earlier are just the natural logs of their bases. This
        also explains why the constant for 8 was 3 times the constant for 2: since 8 = 2³, we have
        ln(8) = 3 · ln(2).
      </div>
      <div>
        <CodeBlock code={
`import math

dx = 0.0001

for base in [2, 3, 8]:
    constant = (base ** dx - 1) / dx
    print(f"Constant for {base}^x: {constant:.4f}, ln({base}) = {math.log(base):.4f}")`
        } editable={true} />
      </div>
      <div>
        In general, any exponential function can be written as e raised to some constant times x,
        and its derivative follows directly.
      </div>
      <div>
        <Equation math={String.raw`
          a^x = e^{\ln(a)\,x}
          \qquad
          \frac{d}{dx} a^x = \ln(a) \cdot a^x
        `} />
      </div>
      <div>
        <Note>
          Try changing the bases and dx in the code above to see how closely the approximations
          match the natural log.
        </Note>
      </div>
    </>
  )
}
