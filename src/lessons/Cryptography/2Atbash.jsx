import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

export default function Atbash() {
  return (
    <>
      <div>
        <CodeBlock code={
`ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

cipher = """
Random cipher wawawa
"""

output = ""

for x in range(len(cipher)):
    # If the character is not a letter, simply append it to the output
    if cipher[x].upper() not in ALPHABET:
        output += cipher[x]
        continue

    # Get the alphabet index of the letter
    index = ALPHABET.index(cipher[x].upper())

    # Append the shifted letter to the output while maintaining casing
    if cipher[x].isupper():
        output += ALPHABET[(index + 1) * -1]
    else:
        output += ALPHABET[(index + 1) * -1].lower()

print(output)`
        } editable={true} />
      </div>
    </>
  )
}
