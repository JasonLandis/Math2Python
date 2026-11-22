import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Builds a KaTeX array showing each letter above the letter it mirrors to
function mirrorTable(letters) {
  const row = (fn) => letters.split('').map(fn).join(' & ');
  const mirror = (c) => ALPHABET[25 - ALPHABET.indexOf(c)];
  return String.raw`\begin{array}{${'c'.repeat(letters.length)}}
    ${row((c) => String.raw`\mathrm{${c}}`)} \\
    ${row(() => String.raw`\updownarrow`)} \\
    ${row((c) => String.raw`\mathrm{${mirror(c)}}`)}
  \end{array}`;
}

export default function Atbash() {
  return (
    <>
      <div>
        An <strong>Atbash cipher</strong> is a substitution cipher that replaces each letter with
        its mirror image in the alphabet: the first letter swaps with the last, the second with the
        second-to-last, and so on. It was originally used with the Hebrew alphabet, and its name
        comes from the Hebrew letters <em>aleph</em>, <em>tav</em>, <em>bet</em>, and <em>shin</em>,
        the first and last pairs that swap with each other.
      </div>
      <div>
        Unlike the Caesar cipher, Atbash has no <strong>key</strong>. Every letter always maps to the
        same partner, so A becomes Z, B becomes Y, and M becomes N. Folding the alphabet in half
        shows every pair:
      </div>
      <div>
        <Equation math={mirrorTable('ABCDEFGHIJKLM')} />
      </div>
      <div>
        Numbering the letters A = 0 through Z = 25, the mirrored letter is the distance from the
        end of the alphabet. For a letter <em>x</em>, the encrypted letter is:
      </div>
      <div>
        <Equation math={String.raw`
          E(x) = 25 - x
          \qquad
          E(\mathrm{D}) = 25 - 3 = 22 = \mathrm{W}
        `} />
      </div>
      <div>
        Applying the cipher twice returns the original letter, so the same code both encrypts and
        decrypts a message:
      </div>
      <div>
        <Equation math={String.raw`E(E(x)) = 25 - (25 - x) = x`} />
      </div>
      <div>
        <CodeBlock code={
`ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

cipher = """
Drgs tivzg kldvi xlnvh tivzg ivhklmhryrorgb.
"""

output = ""

for x in range(len(cipher)):
    # If the character is not a letter, simply append it to the output
    if cipher[x].upper() not in ALPHABET:
        output += cipher[x]
        continue

    # Get the alphabet index of the letter
    index = ALPHABET.index(cipher[x].upper())

    # Reverse the index and append that letter to the output while maintaining casing
    if cipher[x].isupper():
        output += ALPHABET[25 - index]
    else:
        output += ALPHABET[25 - index].lower()

print(output)`
        } editable={true} />
      </div>
      <div>
        <Note>
          Python lists and strings also accept negative indices, which count backward from the end:
          ALPHABET[-1] is Z, ALPHABET[-2] is Y, and so on. That means ALPHABET[-(index + 1)] picks
          the same mirrored letter as ALPHABET[25 - index], without needing to know the alphabet's
          length.
        </Note>
      </div>
    </>
  )
}
