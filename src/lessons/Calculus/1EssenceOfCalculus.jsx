import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function EssenceOfCalculus() {
  return (
    <>
      <div>
        Suppose we have a circle of radius <strong>3</strong> and we want to solve for its area, but we don't 
        know the formula <strong>πr²</strong>. Instead, we can use the circumference formula, <strong>2πr</strong>. 
        We can split the circle into rings, then unroll each ring into an approximate rectangle 
        of width <strong>dr</strong> and length equal to the ring's circumference. Each rectangle's area 
        is then <strong>2πr · dr</strong>.
      </div>
      <div>
        <CodeBlock code={
`import math

r = 3 # Radius of our circle

numRings = 10 # Number of rings that we are splitting the circle into

dr = r / numRings # The thickness of each of the rings

area = 0

# Approximating the area by summing the area of all of the rings
for x in range(numRings):
    area += dr * (2 * math.pi * ((x + 1) * dr))

print("Parameters:")
print("Radius:", r)
print("Number of rings:", numRings)
print("Thickness of each ring (dr):", dr, '\\n')

print("Area approximation:", area)
print("Area computed using πr²:", math.pi * r ** 2)`
        } editable={true} />
      </div>
      <Note>
        Notice how the area approximation in the output above is very close to the real area 
        of the circle. Try increasing the number of rings that we split the circle into and notice 
        what that does to the approximation.
      </Note>
      <div>
        Now let's find the area under the graph of <strong>f(x) = x²</strong>, a parabola. Fix the 
        starting point at <strong>x = 0</strong> and let the ending point <strong>x</strong> vary freely. 
        We can then define a function <strong>A(x)</strong> that returns the area under the curve 
        from <strong>0</strong> to <strong>x</strong>. This function <strong>A(x)</strong> is called the 
        integral of <strong>x²</strong>.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{f(x) = x^2}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{A(x) = \int_0^x t^2 \, dt}
        `} />
      </div>
      <div>
        We can pick some value of <strong>x</strong> under the curve, then pick a slightly larger value. 
        The difference between them can be described as <strong>dx</strong>, and the corresponding change 
        in area is <strong>dA = A(x + dx) - A(x)</strong>. This sliver of area is well approximated by a 
        rectangle with width <strong>dx</strong> and height <strong>f(x) = x²</strong> (the height at the 
        starting value of <strong>x</strong>).
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{dA = A(x + dx) - A(x)}
        `} />
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{dA \approx x^2 \, dx}
          \enspace \rightarrow \enspace 
          \boldsymbol{\frac{dA}{dx} \approx x^2}
        `} />
      </div>
      <div>
        The approximation gets more accurate as <strong>dx</strong> shrinks. The derivative of <strong>A</strong> is 
        what this ratio approaches as <strong>dx</strong> goes to zero.
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{A'(x) = \lim_{dx \to 0} \frac{A(x + dx) - A(x)}{dx} = x^2}
        `} />
      </div>
      <div>
        As an example, take the area between <strong>x = 3</strong> and <strong>x = 3.001</strong>. <strong>dx</strong> here
        is <strong>0.001</strong>
      </div>
      <div>
        <Equation math={String.raw`
          \boldsymbol{\frac{A(3.001) - A(3)}{0.001} \approx 3^2 = 9}
        `} />
      </div>
      <div>
        This illustrates the fundamental theorem of calculus, which is the derivative of the area 
        function <strong>A(x)</strong> gives back the original function, <strong>A'(x) = x²</strong>. From 
        this, <strong>A(x)</strong> itself can be recovered by finding a function whose derivative is <strong>x²</strong>.
      </div>
      <div>
        <CodeBlock code={
`import math

fromX = 0
toX = 5

numRectangles = 100

dx = (toX - fromX) / numRectangles # Width of each rectangle

area = 0

for i in range(numRectangles):
    x = fromX + dx * i
    area += (x ** 2) * dx

print("Parameters:")
print("From x:", fromX)
print("To x:", toX)
print("Number of rectangles:", numRectangles)
print("dx:", dx, '\\n')

print("Area approximation:", area)

# Computing the exact value using the antiderivative of x²: x³/3
exact = (toX ** 3 / 3) - (fromX ** 3 / 3)
print("Exact value (x³/3):", exact)`
        } editable={true} />
      </div>
      <Note>
        We can use the antiderivative of a function to find the exact value of the area under 
        its graph, as seen in the example above.
      </Note>
    </>
  )
}
