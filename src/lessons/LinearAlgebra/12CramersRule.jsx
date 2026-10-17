import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function CramersRule() {
  return (
    <>
      <div>
        If you are given a transformed vector, and a linear transformation, you can find 
        the original vector (where the transformed vector was before the transformation) 
        by applying <strong>Cramer's rule</strong>.
      </div>
      <div>
        To solve for the X coordinate of the original vector, you can substitue the transformed 
        vector into the first column of the transformation matrix, then solve for the determinant 
        of that matrix, and divide it by the determinant of the base transformation matrix. 
        This can be done repeatedly for all coordinates.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([1, 0])

j = np.array([0, 1])

A = np.array([i, j]).T
# [1, 0]
# [0, 1]

outV = np.array([-6, 4])

detA = np.linalg.det(A)

print("Determinant of A:")
print(detA)
print("")

x = np.linalg.det(np.array([outV, j]).T) / detA
# [-6, 0]
# [4, 1]

print("x coordinate of input v:")
print(x)
print("")

y = np.linalg.det(np.array([i, outV]).T) / detA
# [1, -6]
# [0, 4]

print("y coordinate of input v:")
print(y)
print("")

inV = np.array([x, y])

print("Input vector v:")
print(inV)
print("")

print("Verifying input vector is correct:")
print(f"{A @ inV} == {outV}")`
        } editable={true} />
      </div>
      <div>
        Below is an example of this in 3 dimensions.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

i = np.array([1, 0, 0])
j = np.array([0, 1, 0])
k = np.array([0, 5, 6])

A = np.array([i, j, k]).T
# [1, 0, 0]
# [0, 1, 5]
# [0, 0, 6]

outV = np.array([-1, 5, -4])

detA = np.linalg.det(A)

print("Determinant of A:")
print(detA)
print("")

x = np.linalg.det(np.array([outV, j, k]).T) / detA

print("x coordinate of input v:")
print(x)
print("")

y = np.linalg.det(np.array([i, outV, k]).T) / detA

print("y coordinate of input v:")
print(y)
print("")

z = np.linalg.det(np.array([i, j, outV]).T) / detA

print("z coordinate of input v:")
print(z)
print("")

inV = np.array([x, y, z])

print("Input vector v:")
print(inV)
print("")

print("Verifying input vector is correct:")
print(f"{A @ inV} == {outV}")`
        } editable={true} />
      </div>
    </>
  )
}
