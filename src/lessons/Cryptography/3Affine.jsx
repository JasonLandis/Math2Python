import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Builds a KaTeX array showing each letter above the letter it maps to under (a * x + b) mod 26
function affineTable(letters, a, b) {
  const row = (fn) => letters.split('').map(fn).join(' & ');
  const map = (c) => ALPHABET[(((a * ALPHABET.indexOf(c) + b) % 26) + 26) % 26];
  return String.raw`\begin{array}{${'c'.repeat(letters.length)}}
    ${row((c) => String.raw`\mathrm{${c}}`)} \\
    ${row(() => String.raw`\downarrow`)} \\
    ${row((c) => String.raw`\mathrm{${map(c)}}`)}
  \end{array}`;
}

export default function Affine() {
  return (
    <>
      <div>
        An <strong>Affine cipher</strong> is a substitution cipher that first multiplies each
        letter's position in the alphabet by a number, then shifts it. Numbering the letters
        A = 0 through Z = 25, a letter <em>x</em> becomes:
      </div>
      <div>
        <Equation math={String.raw`E_{a,b}(x) = (a \cdot x + b) \bmod 26`} />
      </div>
      <div>
        The <strong>key</strong> is now a pair of numbers: a <strong>multiplier</strong> <em>a</em> and
        a <strong>shift</strong> <em>b</em>. The two previous ciphers are both special cases of this
        formula. Setting <em>a</em> = 1 leaves only the shift, which is a Caesar cipher. Setting
        <em> a</em> = -1 and <em>b</em> = 25 gives 25 - <em>x</em>, which is the Atbash cipher.
      </div>
      <div>
        <Equation math={String.raw`
          E_{1,b}(x) = (x + b) \bmod 26
          \qquad
          E_{-1,25}(x) = (25 - x) \bmod 26
        `} />
      </div>
      <div>
        The code below uses a multiplier of 3 and a shift of 4 to decrypt the cipher. Multiplying
        spreads neighboring letters apart, so unlike a Caesar shift the alphabet comes out
        scrambled rather than in order:
      </div>
      <div>
        <Equation math={String.raw`
          ${affineTable('ABCDEFGHIJKLM', 3, 4)}
          \qquad
          ${affineTable('NOPQRSTUVWXYZ', 3, 4)}
        `} />
      </div>
      <div>
        Not every multiplier works. If <em>a</em> shares a factor with 26, two different letters
        land on the same result, and there is no way to tell which one was meant. With a multiplier
        of 2, both A and N turn into A:
      </div>
      <div>
        <Equation math={String.raw`
          E_{2,0}(\mathrm{A}) = (2 \cdot 0) \bmod 26 = 0 = \mathrm{A}
          \qquad
          E_{2,0}(\mathrm{N}) = (2 \cdot 13) \bmod 26 = 0 = \mathrm{A}
        `} />
      </div>
      <div>
        The multiplier must be <strong>coprime</strong> with 26, meaning their greatest common divisor
        is 1. Since 26 = 2 · 13, any odd number other than 13 works.
      </div>
      <div>
        To undo the cipher, the multiplication has to be reversed. Division isn't available in
        modular arithmetic, so instead we use a <strong>modular inverse</strong>: a number
        <em> a</em><sup>-1</sup> that multiplies with <em>a</em> to give 1. For a multiplier of 9, the
        inverse is 3, because 9 · 3 = 27, which leaves a remainder of 1 when divided by 26. Undoing
        the shift and then the multiplication gives the decryption formula:
      </div>
      <div>
        <Equation math={String.raw`
          D(y) = a^{-1}(y - b) \bmod 26
          \qquad
          9 \cdot 3 = 27 \equiv 1 \pmod{26}
        `} />
      </div>
      <div>
        The message below was encrypted with <em>a</em> = 9 and <em>b</em> = 16. Expanding the
        decryption formula shows that decrypting is just another affine cipher, this time with
        a multiplier of 3 and a shift of 4:
      </div>
      <div>
        <Equation math={String.raw`
          D(y) = 3(y - 16) = 3y - 48 \equiv 3y + 4 \pmod{26}
        `} />
      </div>
      <div>
        <CodeBlock code={
`ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

cipher = """
Fba bqnrawf ibmkiaw naeokna fba wfnmdsawf gkllw.
"""

multiplier = 3
shift = 4

output = ""

for x in range(len(cipher)):
    # If the character is not a letter, simply append it to the output
    if cipher[x].upper() not in ALPHABET:
        output += cipher[x]
        continue

    # Key index conversion part
    index = ALPHABET.index(cipher[x].upper())
    new_index = (multiplier * index + shift) % 26

    # Append the new letter to the output while maintaining casing
    if cipher[x].isupper():
        output += ALPHABET[new_index]
    else:
        output += ALPHABET[new_index].lower()

print(output)`
        } editable={true} />
      </div>
      <div>
        <Note>
          There are only 12 valid multipliers (1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25) and 26
          shifts, giving 12 · 26 = 312 possible keys. That is far more than the Caesar cipher's 26,
          but still few enough that a computer can try every key in an instant.
        </Note>
      </div>
    </>
  )
}
