import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import 'katex/dist/katex.min.css';

export default function ChangeOfBasis() {
  return (
    <>
      <div>
        Let's say we have two systems each with different basis vectors.
      </div>
      <div>
        This is the change of basis matrix. It represents the basis vectors in system 2 in system 1's coordinates.
        It also represents a linear transformation that moves space starting at system 1's basis vectors to 
        system 2's basis vectors. In other words, it translates coordinates given in system 2's language 
        into system 1's language.
      </div>
      <div>
        Think of both systems having basis vectors of [1, 0] and [0, 1] in their own languages. Therefore, 
        when the change of basis matrix is applied to a vector in system 2 written in system 2's coordinates,
        the transformation is still starting from system 2's standard basis vectors and is being converted
        into system 1's description of those basis vectors from system 2. Therefore, the vector is being converted
        from system 2's coordinates to system 1's coordinates.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

# These are the basis vectors in system 1 written in system 1's coordinates
i1 = np.array([1, 0])
j1 = np.array([0, 1])

# These are the basis vectors in system 2 written in system 1's coordinates
i2 = np.array([2, 1])
j2 = np.array([-1, 3])

A = np.array([i2, j2]).T
# [2, -1]
# [1, 3]

# Some vector in system 1 written in system 1's coordinates
v1 = np.array([2, 3])

# Some vector in system 2 written in system 2's coordinates
v2 = np.array([-2, 4])

print("Some vector in system 2 written in system 2's coordinates:", v2)
print("That same vector written in system 1's coordinates:", A @ v2)
print("")

# Inverting the change of basis matrix is essentially reversing the linear transformation.
inv = np.linalg.inv(A)

print("Some vector in system 1 written system 1's coordinates:", v1)
print("That same vector written in the system 2's coordinates:", inv @ v1)`
        } editable={true} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

# Some vector in system 2 written in system 2's coordinates
v2 = np.array([-1, 3])

# These are the basis vectors in system 2 written in system 1's coordinates
i2 = np.array([2, 1])
j2 = np.array([-1, 3])

# Change of basis matrix
A = np.array([i2, j2]).T

# Transformation matrix in the coordinates of system 1
T = np.array([[0, -1], 
              [1, 0]])

print("Finding out where a vector in system 2 lands in the coordinates of system 2 when we are only given a transformation matrix in the coordinates of system 1:")
print("Starting vector in system 2 written in the coordinates of system 2:", v2)
print("Landing vector in system 2 written in the coordinates of system 2:", np.linalg.inv(A) @ T @ A @ v2)

# A @ v2 converts the vector to the coordinates of system 1
# T @ (above) applies the linear transformation
# A-1 (above) converts the vector back to the coordinates of system 2`
        } editable={true} />
      </div>
    </>
  )
}
