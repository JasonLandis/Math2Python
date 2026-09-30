import './Hi.css'
import CodeBlock from '../../../components/CodeBlock/CodeBlock'

const vectorAddCode = `
vector1 = numpy.array([[1], 
                    [2]])

vector2 = numpy.array([[3],
                    [-1]])

result = vector1 + vector2
print('Vector addition:')
print(f'{vector1.flatten()} + {vector2.flatten()} = {result.flatten()}')
`

export default function Vectors() {
  return (
    <div className='outer'>
        <div className='container'>
            <section>uhsdfiuah siudfhoiaj sdoifhaiu sdfi aoisjdf haisdhf oasdoif hoaisj foij</section>
            <CodeBlock code={vectorAddCode} />
        </div>
    </div>
  )
}
