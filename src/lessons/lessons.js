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
        sources: [
          "https://www.3blue1brown.com/lessons/vectors"
        ],
        prerequisites: [],
        Component: Vectors
      },
      LinearCombinations: {
        title: "Linear combinations, span, and basis vectors",
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
        sources: [
          "https://www.3blue1brown.com/lessons/matrix-multiplication"
        ],
        prerequisites: [],
        Component: MatrixMultiplication
      },
      ThreeDimTransformations: {
        title: "Three-dimensional linear transformations",
        sources: [
          "https://www.3blue1brown.com/lessons/3d-transformations"
        ],
        prerequisites: [],
        Component: ThreeDimTransformations
      },
      TheDeterminant: {
        title: "The determinant",
        sources: [
          "https://www.3blue1brown.com/lessons/determinant",
        ],
        prerequisites: [],
        Component: TheDeterminant
      },
      InverseMatrices: {
        title: "Inverse matrices, column space, and null space",
        sources: [
          "https://www.3blue1brown.com/lessons/inverse-matrices"
        ],
        prerequisites: [],
        Component: InverseMatrices
      },
      NonsquareMatrices: {
        title: "Nonsquare matrices as transformations between dimensions",
        sources: [
          "https://www.3blue1brown.com/lessons/nonsquare-matrices"
        ],
        prerequisites: [],
        Component: NonsquareMatrices
      },
      DotProducts: {
        title: "Dot products and duality",
        sources: [
          "https://www.3blue1brown.com/lessons/dot-products"
        ],
        prerequisites: [],
        Component: DotProducts
      },
      CrossProducts: {
        title: "Cross products",
        sources: [
          "https://www.3blue1brown.com/lessons/cross-products"
        ],
        prerequisites: [],
        Component: CrossProducts
      },
      CrossProductsExtended: {
        title: "Cross products in the light of linear transformations",
        sources: [
          "https://www.3blue1brown.com/lessons/cross-products-extended"
        ],
        prerequisites: [],
        Component: CrossProductsExtended
      },
      CramersRule: {
        title: "Cramer's rule, explained geometrically",
        sources: [
          "https://www.3blue1brown.com/lessons/cramers-rule"
        ],
        prerequisites: [],
        Component: CramersRule
      },
      ChangeOfBasis: {
        title: "Change of basis",
        sources: [
          "https://www.3blue1brown.com/lessons/change-of-basis"
        ],
        prerequisites: [],
        Component: ChangeOfBasis
      },
      Eigenvectors: {
        title: "Eigenvectors and eigenvalues",
        sources: [
          "https://www.3blue1brown.com/lessons/eigenvalues"
        ],
        prerequisites: [],
        Component: Eigenvectors
      },
      QuickEigenCompute: {
        title: "A quick trick for computing eigenvalues",
        sources: [
          "https://www.3blue1brown.com/lessons/quick-eigen"
        ],
        prerequisites: [],
        Component: QuickEigenCompute
      },
      AbstractVectorSpaces: {
        title: "Abstract vector spaces",
        sources: [
          "https://www.3blue1brown.com/lessons/abstract-vector-spaces"
        ],
        prerequisites: [],
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
        sources: [
          "https://www.3blue1brown.com/lessons/essence-of-calculus"
        ],
        prerequisites: [],
        Component: EssenceOfCalculus
      },
      ParadoxOfDerivative: {
        title: "The paradox of the derivative",
        sources: [
          "https://www.3blue1brown.com/lessons/derivatives"
        ],
        prerequisites: [],
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