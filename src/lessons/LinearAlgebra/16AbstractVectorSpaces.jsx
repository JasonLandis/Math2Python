import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function AbstractVectorSpaces() {
  return (
    <>
      <div>
        Linearty.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v1 = np.array([[2],
              [3],
              [-1]])

v2 = np.array([[-1],
               [2],
               [3]])

A = np.array([[2, 3, 1],
              [4, -2, -2],
              [1, -1, 3]])

scalar = 3

# This is an example of linearity
print("Addition and scalar multiplication can be done before or after the transformation and the resultant vector will always be the same:")
print("Adding the vectors, then applying the transformation:")
print(A @ (v1 + v2))
print("")

print("Applying the transformation, then adding the vectors:")
print((A @ v1) + (A @ v2))
print("")

print("Applying the scalar, then applying the transformation:")
print(A @ (v1 * scalar))
print("")

print("Applying the transformation, then applying the scalar:")
print(scalar * (A @ v1))`
        } editable={true} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[0, 1, 0, 0],
              [0, 0, 2, 0],
              [0, 0, 0, 3],
              [0, 0, 0, 0]])

# 2x³ - 3x² + 4x - 1
v = np.array([[-1],
              [4],
              [-3],
              [2]])

print("The derivative of this linear transformation:")
print(A @ v)
# 6x² - 6x + 4`
        } editable={true} />
      </div>
    </>
  )
}
