import Vectors from "./LinearAlgebra/1Vectors"
import LinearCombinations from "./LinearAlgebra/2LinearCombinations"
import LinearTransformations from "./LinearAlgebra/3LinearTransformations"
import MatrixMultiplication from "./LinearAlgebra/4MatrixMultiplication"
import ThreeDimTransformations from "./LinearAlgebra/5ThreeDimTransformations"
import TheDeterminant from "./LinearAlgebra/6TheDeterminant"
import InverseMatrices from "./LinearAlgebra/7InverseMatrices"
import NonsquareMatrices from "./LinearAlgebra/8NonsquareMatrices"
import DotProducts from "./LinearAlgebra/9DotProducts"
import CrossProducts from "./LinearAlgebra/10CrossProducts"
import CrossProductsExtended from "./LinearAlgebra/11CrossProductsExtended"
import CramersRule from "./LinearAlgebra/12CramersRule"
import ChangeOfBasis from "./LinearAlgebra/13ChangeOfBasis"
import Eigenvectors from "./LinearAlgebra/14Eigenvectors"
import QuickEigenCompute from "./LinearAlgebra/15QuickEigenCompute"
import AbstractVectorSpaces from "./LinearAlgebra/16AbstractVectorSpaces"

import EssenceOfCalculus from "./Calculus/1EssenceOfCalculus"
import ParadoxOfDerivative from "./Calculus/2ParadoxOfDerivative"
import PowerRule from "./Calculus/3PowerRule"
import ChainRule from "./Calculus/4ChainRule"
import EulersNumber from "./Calculus/5EulersNumber"

export const lessons = {
  LinearAlgebra: {
    title: "Linear Algebra",
    representation: String.raw`
      \begin{bmatrix} 
        1 & 2 & 3 \\
        3 & 4 & -2 \\
        -1 & 0 & 4 \\
      \end{bmatrix}
    `,
    lessons: {
      Vectors: {
        title: "Vectors, what even are they?",
        representation: String.raw`
          \begin{bmatrix} 1 \\ 2 \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/vectors"
        ],
        prerequisites: [],
        Component: Vectors
      },
      LinearCombinations: {
        title: "Linear combinations, span, and basis vectors",
        representation: String.raw`
          \boldsymbol{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
          \quad\quad
          \boldsymbol{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/span"
        ],
        prerequisites: [
          "Vectors"
        ],
        Component: LinearCombinations
      },
      LinearTransformations: {
        title: "Linear transformations and matrices",
        representation: String.raw`
          \begin{bmatrix}
            1 & -2 \\
            3 & 2
          \end{bmatrix}
          \begin{bmatrix} 2 \\ 3 \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/linear-transformations"
        ],
        prerequisites: [
          "LinearCombinations"
        ],
        Component: LinearTransformations
      },
      MatrixMultiplication: {
        title: "Matrix multiplication as composition",
        representation: String.raw`
          \begin{bmatrix}
            4 & -1 \\
            -3 & 2
          \end{bmatrix}
          \begin{bmatrix}
            3 & -2 \\
            4 & 1
          \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/matrix-multiplication"
        ],
        prerequisites: [
          "LinearTransformations"
        ],
        Component: MatrixMultiplication
      },
      ThreeDimTransformations: {
        title: "Three-dimensional linear transformations",
        representation: String.raw`
          \begin{bmatrix}
            2 & 4 & 5 \\
            -1 & 0 & 3 \\
            -2 & 3 & 3
          \end{bmatrix}
          \begin{bmatrix} 2 \\ 1 \\ -3 \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/3d-transformations"
        ],
        prerequisites: [
          "MatrixMultiplication"
        ],
        Component: ThreeDimTransformations
      },
      TheDeterminant: {
        title: "The determinant",
        representation: String.raw`
          \text{det}
          \left(
          \begin{bmatrix}
            a & b \\
            c & d
          \end{bmatrix}
          \right)
          \enspace = \enspace
          \text{ad - bc}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/determinant",
        ],
        prerequisites: [
          "ThreeDimTransformations"
        ],
        Component: TheDeterminant
      },
      InverseMatrices: {
        title: "Inverse matrices, column space, and null space",
        representation: String.raw`
          \boldsymbol{A^{-1}v = x}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/inverse-matrices"
        ],
        prerequisites: [
          "TheDeterminant"
        ],
        Component: InverseMatrices
      },
      NonsquareMatrices: {
        title: "Nonsquare matrices as transformations between dimensions",
        representation: String.raw`
          \begin{bmatrix}
            1 & 2 \\
            -2 & 3 \\
            -1 & 1
          \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/nonsquare-matrices"
        ],
        prerequisites: [
          "InverseMatrices"
        ],
        Component: NonsquareMatrices
      },
      DotProducts: {
        title: "Dot products and duality",
        representation: String.raw`
          \begin{bmatrix} 2 \\ -2 \\ 3 \end{bmatrix} 
          \cdot
          \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/dot-products"
        ],
        prerequisites: [
          "NonsquareMatrices"
        ],
        Component: DotProducts
      },
      CrossProducts: {
        title: "Cross products",
        representation: String.raw`
          \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix} \times \begin{bmatrix} 3 \\ -1 \\ 5 \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/cross-products"
        ],
        prerequisites: [
          "DotProducts"
        ],
        Component: CrossProducts
      },
      CrossProductsExtended: {
        title: "Cross products in the light of linear transformations",
        representation: String.raw`
          \boldsymbol{v} \times \boldsymbol{w} 
          \enspace = \enspace 
          \boldsymbol{p}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/cross-products-extended"
        ],
        prerequisites: [
          "CrossProducts"
        ],
        Component: CrossProductsExtended
      },
      CramersRule: {
        title: "Cramer's rule, explained geometrically",
        representation: String.raw`
          \frac{
            \text{det}
            \left(
              \begin{bmatrix} 
                -6 & -1 \\ 
                4 & 3 
              \end{bmatrix}
            \right)
          }{\text{det}
            \left(
              \begin{bmatrix} 
                2 & -1 \\ 
                1 & 3 
              \end{bmatrix}
            \right)
          }
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/cramers-rule"
        ],
        prerequisites: [
          "CrossProductsExtended"
        ],
        Component: CramersRule
      },
      ChangeOfBasis: {
        title: "Change of basis",
        representation: String.raw`
          \begin{bmatrix} 
            2 & -1 \\ 
            1 & 3 
          \end{bmatrix}^{-1}
          \begin{bmatrix} 
            0 & -1 \\ 
            1 & 0 
          \end{bmatrix}
          \begin{bmatrix} 
            2 & -1 \\ 
            1 & 3 
          \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/change-of-basis"
        ],
        prerequisites: [
          "CramersRule"
        ],
        Component: ChangeOfBasis
      },
      Eigenvectors: {
        title: "Eigenvectors and eigenvalues",
        representation: String.raw`
          \det\left(
            \begin{bmatrix}
              3 & 1 \\
              0 & 2
            \end{bmatrix}
            - \lambda
            \begin{bmatrix}
              1 & 0 \\
              0 & 1
            \end{bmatrix}
          \right) = 0
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/eigenvalues"
        ],
        prerequisites: [
          "ChangeOfBasis"
        ],
        Component: Eigenvectors
      },
      QuickEigenCompute: {
        title: "A quick trick for computing eigenvalues",
        representation: String.raw`
          \begin{bmatrix} 2 & 7 \\ 1 & 8 \end{bmatrix}
          \quad\quad
          \frac{2 + 8}{2} = 5
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/quick-eigen"
        ],
        prerequisites: [
          "Eigenvectors"
        ],
        Component: QuickEigenCompute
      },
      AbstractVectorSpaces: {
        title: "Abstract vector spaces",
        representation: String.raw`
          \begin{bmatrix} 
            0 & 1 & 0 & 0 \\ 
            0 & 0 & 2 & 0 \\ 
            0 & 0 & 0 & 3 \\ 
            0 & 0 & 0 & 0 
          \end{bmatrix}
          \begin{bmatrix} -1 \\ 4 \\ -3 \\ 2 \end{bmatrix}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/abstract-vector-spaces"
        ],
        prerequisites: [
          "QuickEigenCompute"
        ],
        Component: AbstractVectorSpaces
      }
    }
  },
  Calculus: {
    title: "Calculus",
    representation: String.raw`\int_a^b f'(x)\,dx = f(b) - f(a)`,
    lessons: {
      EssenceOfCalculus: {
        title: "The Essence of Calculus",
        representation: String.raw`
          \boldsymbol{\frac{dA}{dx} \approx f(x)}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/essence-of-calculus"
        ],
        prerequisites: [],
        Component: EssenceOfCalculus
      },
      ParadoxOfDerivative: {
        title: "The paradox of the derivative",
        representation: String.raw`
          \boldsymbol{f'(x) = \lim_{dx \to 0} \frac{f(x + dx) - f(x)}{dx}}
        `,
        sources: [
          "https://www.3blue1brown.com/lessons/derivatives"
        ],
        prerequisites: [
          "EssenceOfCalculus"
        ],
        Component: ParadoxOfDerivative
      },
      PowerRule: {
        title: "Power Rule through geometry",
        sources: [
          "https://www.3blue1brown.com/lessons/derivatives-power-rule",
          "https://www.3blue1brown.com/lessons/derivatives-trig-functions"
        ],
        prerequisites: [],
        Component: PowerRule
      },
      ChainRule: {
        title: "Visualizing the chain rule and product rule",
        sources: [
          "https://www.3blue1brown.com/lessons/chain-rule-and-product-rule"
        ],
        prerequisites: [],
        Component: ChainRule
      },
      EulersNumber: {
        title: "What's so special about Euler's number e?",
        sources: [
          "https://www.3blue1brown.com/lessons/eulers-number"
        ],
        prerequisites: [],
        Component: EulersNumber
      },
    }
  }
}