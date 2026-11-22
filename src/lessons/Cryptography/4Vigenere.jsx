import Equation from '../../components/Equation/Equation';
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import Note from '../../components/Note/Note';
import 'katex/dist/katex.min.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Builds a KaTeX array lining each letter up with the keyword letter that shifts it.
// Non-letters get an empty column and do not advance the keyword.
function keywordTable(text, key, keyStart = 0) {
  let keyIndex = keyStart;
  const columns = text.toUpperCase().split('').map((c) => {
    if (!ALPHABET.includes(c)) return ['', '', ''];
    const k = key[keyIndex];
    keyIndex = (keyIndex + 1) % key.length;
    const shifted = ALPHABET[(ALPHABET.indexOf(c) + ALPHABET.indexOf(k)) % 26];
    return [String.raw`\mathrm{${c}}`, String.raw`\mathrm{${k}}`, String.raw`\mathrm{${shifted}}`];
  });
  const row = (i) => columns.map((col) => col[i]).join(' & ');
  return String.raw`\begin{array}{${'c'.repeat(columns.length)}}
    ${row(0)} \\
    ${row(1)} \\
    \hline
    ${row(2)}
  \end{array}`;
}

export default function Vigenere() {
  return (
    <>
      <div>
        A <strong>Vigenère cipher</strong> is a Caesar cipher whose shift keeps changing. Instead of
        a single number, the <strong>key</strong> is a <strong>keyword</strong>, and each letter of
        the keyword gives a shift. With the keyword LEMON, the shifts are:
      </div>
      <div>
        <Equation math={String.raw`
          \mathrm{L} = 11
          \qquad
          \mathrm{E} = 4
          \qquad
          \mathrm{M} = 12
          \qquad
          \mathrm{O} = 14
          \qquad
          \mathrm{N} = 13
        `} />
      </div>
      <div>
        The first letter of the message is shifted by 11, the second by 4, the third by 12, and so
        on. Once the keyword runs out, it starts over from the beginning. Spaces and punctuation are
        skipped without using up a keyword letter. Writing the keyword under the start of this
        lesson's cipher shows which shift each letter gets:
      </div>
      <div>
        <Equation math={String.raw`
          ${keywordTable('Poumes eg', 'LEMON')}
          \qquad
          ${keywordTable('zbi w', 'LEMON', 3)}
        `} />
      </div>
      <div>
        Numbering the letters A = 0 through Z = 25, let <em>x<sub>i</sub></em> be the <em>i</em>-th
        letter of the message and <em>k</em><sub>0</sub>, <em>k</em><sub>1</sub>, …,
        <em> k<sub>m-1</sub></em> be the shifts from a keyword of length <em>m</em>. Each letter is
        shifted by the keyword letter in position <em>i</em> mod <em>m</em>:
      </div>
      <div>
        <Equation math={String.raw`
          E(x_i) = (x_i + k_{i \bmod m}) \bmod 26
          \qquad
          D(y_i) = (y_i - k_{i \bmod m}) \bmod 26
        `} />
      </div>
      <div>
        A keyword with only one letter always gives the same shift, which is a Caesar cipher. A
        longer keyword means the same letter can encrypt differently depending on where it falls.
        The word Asgard appears three times in the message below, and it is encrypted as Poumes,
        Wgsngz, and Oetpnr. That makes the Vigenère cipher much harder to break than the earlier
        ciphers, where every A always became the same letter.
      </div>
      <div>
        The message below was encrypted by shifting each letter backward, so the code decrypts it by
        shifting forward with the keyword LEMON. A second index, key_index, tracks the current
        position in the keyword. It only moves forward when a letter is processed, and the
        % len(key) wraps it back to the start of the keyword.
      </div>
      <div>
        <CodeBlock code={
`ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

cipher = """
Poumes eg zbi w dxnra; bqitn kmf. Idwe pdqzp ot Wgsngz. Oetpnr uf ldsdr dqf brdlzq fiwbp.
"""

key = "LEMON"
key_index = 0

output = ""

for x in range(len(cipher)):
    # If the character is not a letter, simply append it to the output
    if cipher[x].upper() not in ALPHABET:
        output += cipher[x]
        continue

    # Key index conversion part
    index = ALPHABET.index(cipher[x].upper())
    new_index = (index + ALPHABET.index(key[key_index].upper())) % 26
    key_index = (key_index + 1) % len(key)

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
          A keyword of length <em>m</em> has 26<sup>m</sup> possibilities, so a 10-letter keyword gives
          about 141 trillion keys, compared with only 312 for the Affine cipher. The weakness is that
          the keyword repeats: once the keyword's length is known, every <em>m</em>-th letter was
          shifted by the same amount, and the message splits into <em>m</em> separate Caesar
          ciphers.
        </Note>
      </div>
    </>
  )
}
