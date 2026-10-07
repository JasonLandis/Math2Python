import { useState } from 'react'
import { usePyodide } from '../../hooks/usePyodide'
import { useTheme } from '../../contexts/ThemeContext'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { duotoneDark, gruvboxDark, gruvboxLight, xcodeLight } from '@uiw/codemirror-themes-all'
import './CodeBlock.scss'

export default function CodeBlock({ code: initialCode, editable }) {
  const { run } = usePyodide()
  const { theme } = useTheme()
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const runCode = async () => {
    setLoading(true)
    try {
      setOutput(await run(code))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <CodeMirror
        value={code}
        extensions={[python()]}
        onChange={(value) => setCode(value)}
        theme={theme === 'dark' ? gruvboxDark : xcodeLight}
        editable={editable}
        className='code-mirror'
      />
      {editable && 
        <div className='code-execute'>
          <button onClick={runCode} disabled={loading}>
            {loading ? 'Running...' : '▶ Run'}
          </button>
        </div>
      }
      {output && 
        <div className='code-output'>
          <pre>{output}</pre>
        </div>
      }
    </>
  )
}