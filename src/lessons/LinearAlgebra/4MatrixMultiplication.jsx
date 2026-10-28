import { BlockMath } from 'react-katex';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function MatrixMultiplication() {
  return (
    <>
      <div>
        Let's say we have two linear transformation matrices.
      </div>
      <div>
        <BlockMath math={String.raw`
          M_1 =
          \begin{bmatrix}
            3 & -2 \\
            4 & 1
          \end{bmatrix}
          \quad\quad\quad\quad
          M_2 =
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
        `} />
      </div>
      <div>
        Let's say we want to find out where the following vector <strong>v</strong> lands
        following both of these transformations.
      </div>
      <div>
        <BlockMath math={String.raw`
          \boldsymbol{v} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}
        `} />
      </div>
      <div>
        We can compute this by applying one transformation after the other. We find out the transformed
        vector <strong>v</strong> following the first transformation, then apply the second transformation
        to that transformed vector.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            3 & -2 \\
            4 & 1
          \end{bmatrix}
          \begin{bmatrix} 1 \\ 3 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -3 \\ 7 \end{bmatrix}
          \enspace\rightarrow\enspace
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
          \begin{bmatrix} -3 \\ 7 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -19 \\ 23 \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [3]])

m1 = np.array([[3, -2],
               [4, 1]])

m2 = np.array([[4, -1],
               [-3, 2]])

m1_vector = m1 @ v
print("Vector v after the first transformation:")
print(m1_vector, '\\n')

m2_vector = m2 @ m1_vector
print("Vector v after the second transformation:")
print(m2_vector)`
        } editable={true} />
      </div>
      <div>
        Another way to do this is to first calculate the <strong>composition matrix</strong> that
        describes both linear transformations.
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
          \begin{bmatrix}
            3 & -2 \\
            4 & 1
          \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix}
            8 & -9 \\
            -1 & 8
          \end{bmatrix}
        `} />
      </div>
      <div>
        <Note>
          When represented mathematically and programmatically, think of the transformations
          as being applied from right to left. Notice how the matrix <strong>M<sub>1</sub></strong> above
          is to the right of matrix <strong>M<sub>2</sub></strong>. Transformation matrix <strong>M<sub>1</sub></strong> is
          being applied first here.
        </Note>
      </div>
      <div>
        To compute the composition matrix, remember that the columns of <strong>M<sub>1</sub></strong> are <strong>i'</strong> and <strong>j'</strong>, 
        where the basis vectors <strong>i</strong> and <strong>j</strong> land after the first transformation.
        Applying <strong>M<sub>2</sub></strong> to each of those columns tells us where <strong>i</strong> and <strong>j</strong> land
        after both transformations, which we'll call <strong>i''</strong> and <strong>j''</strong>. Those results
        become the columns of the composition matrix.
      </div>
      <div>
        <BlockMath math={String.raw`
          M_2 \boldsymbol{i'} = \boldsymbol{i''}
          \quad\quad\quad\quad
          M_2 \boldsymbol{j'} = \boldsymbol{j''}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
          \begin{bmatrix} 3 \\ 4 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} 8 \\ -1 \end{bmatrix}
          \quad\quad\quad\quad
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
          \begin{bmatrix} -2 \\ 1 \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix} -9 \\ 8 \end{bmatrix}
        `} />
      </div>
      <div>
        <BlockMath math={String.raw`
          M_2 M_1
          \enspace = \enspace
          \begin{bmatrix} \boldsymbol{i''} & \boldsymbol{j''} \end{bmatrix}
          \enspace = \enspace
          \begin{bmatrix}
            8 & -9 \\
            -1 & 8
          \end{bmatrix}
        `} />
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

v = np.array([[1],
              [3]])

m1 = np.array([[3, -2],
               [4, 1]])

m2 = np.array([[4, -1],
               [-3, 2]])

comp_matrix = m2 @ m1
print("Composition matrix:")
print(comp_matrix, '\\n')

final_vector = comp_matrix @ v
print("Transformed vector v:")
print(final_vector)`
        } editable={true} />
      </div>
      <div>
        <Note>
          Notice that both code snippets give the same final vector.
        </Note>
      </div>
      <div>
        The order in which transformations are applied matters. As you can see below,
        we get two different composition matrices depending on the order in which the
        transformations are applied. Remember that <strong>P @ Q</strong> applies <strong>Q</strong> first,
        while <strong>Q @ P</strong> applies <strong>P</strong> first.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

P = np.array([[3, 2],
              [1, -2]])

Q = np.array([[2, -4],
              [-1, 2]])

print("P @ Q:")
print(P @ Q, '\\n')

print("Q @ P:")
print(Q @ P)`
        } editable={true} />
      </div>
      <div>
        However, the grouping of the matrices does not matter. As long as the matrices stay in the
        same order, you can multiply any neighboring pair first and get the same result. This is called
        the <strong>associative</strong> property. You can think of this as the order in which the linear
        transformations are applied never changing. You're just computing composition matrices at
        different points.
      </div>
      <div>
        <CodeBlock code={
`import numpy as np

A = np.array([[4, -1],
              [2, 3]])

B = np.array([[-1, 1],
              [1, 2]])

C = np.array([[0, 3],
              [4, 2]])

print("A(BC):")
print(A @ (B @ C), '\\n')

print("(AB)C:")
print((A @ B) @ C)`
        } editable={true} />
      </div>
    </>
  )
}
