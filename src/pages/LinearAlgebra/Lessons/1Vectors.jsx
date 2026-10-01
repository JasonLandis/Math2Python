import CodeBlock from '../../../components/CodeBlock/CodeBlock'
import '../../Lesson.scss'

const vectorAddCode = `vector1 = numpy.array([[1], [2]])

vector2 = numpy.array([[3], [-1]])

result = vector1 + vector2
print('Vector addition:')
print(f'{vector1.flatten()} + {vector2.flatten()} = {result.flatten()}')`

export default function Vectors() {
  return (
    <div className='lesson-container'>
      <div className='lesson-title'>Vectors</div>
      <section>Vectors can be added together and scaled by some constant.</section>
      <CodeBlock code={vectorAddCode} />
    </div>
  )
}
