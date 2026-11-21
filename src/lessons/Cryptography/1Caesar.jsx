import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Builds a KaTeX array showing each letter above the letter it shifts to
function shiftTable(letters, key) {
  const row = (fn) => letters.split('').map(fn).join(' & ');
  const shift = (c) => ALPHABET[(((ALPHABET.indexOf(c) + key) % 26) + 26) % 26];
  return String.raw`\begin{array}{${'c'.repeat(letters.length)}}
    ${row((c) => String.raw`\mathrm{${c}}`)} \\
    ${row(() => String.raw`\downarrow`)} \\
    ${row((c) => String.raw`\mathrm{${shift(c)}}`)}
  \end{array}`;
}

export default function Caesar() {
  return (
    <>
      <div>
        A <strong>Caesar cipher</strong> is a substitution cipher that shifts each letter in a 
        message by a fixed number of positions along the alphabet. Named after 
        Julius Caesar, it is one of the simplest and oldest known encryption methods.
      </div>
      <div>
        Every Caesar cipher uses a <strong>key</strong>: the number of positions each letter is
        shifted. The code below uses a key of 5 to decrypt the cipher, so each letter in the cipher 
        moves 5 places forward in the alphabet. When a shift runs past Z, it wraps back around to 
        the start, so A becomes F and Z becomes E.
      </div>
      <div>
        <Equation math={String.raw`
          ${shiftTable('ABCDEFGHIJKLM', 5)}
          \qquad
          ${shiftTable('NOPQRSTUVWXYZ', 5)}
        `} />
      </div>
      <div>
        Numbering the letters A = 0 through Z = 25 turns the shift into modular arithmetic.
        For a letter <em>x</em> and key <em>k</em>, the shifted letter is:
      </div>
      <div>
        <Equation math={String.raw`
          E_k(x) = (x + k) \bmod 26
          \qquad
          E_5(\mathrm{Z}) = (25 + 5) \bmod 26 = 4 = \mathrm{E}
        `} />
      </div>
      <div>
        <CodeBlock code={
`ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

cipher = """
Ojit Novmf rvn vwgz oj wpdgy ocdn di v xvqz! Rdoc v wjs ja nxmvkn!
"""

key = 5 # a -> f
output = ""

for x in range(len(cipher)):
    # If the character is not a letter, simply append it to the output
    if cipher[x].upper() not in ALPHABET:
        output += cipher[x]
        continue

    # Get the alphabet index of the letter and shift it by the key
    index = ALPHABET.index(cipher[x].upper())
    index += key

    # Wraps the alphabet index such that it remains in bounds
    index %= 26

    # Append the shifted letter to the output while maintaining casing
    if cipher[x].isupper():
        output += ALPHABET[index]
    else:
        output += ALPHABET[index].lower()

print(output)`
        } editable={true} />
      </div>
      <div>
        <Note>
          The key can also be negative, which shifts letters backward instead. For example, a key
          of -5 turns F into A. Because the alphabet wraps around, shifting back 5 is the same as
          shifting forward 21.
        </Note>
      </div>
    </>
  )
}
