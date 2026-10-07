import { useState } from 'react'
import { usePyodide } from '../../contexts/PyodideContext'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { useThemeContext } from '../../contexts/ThemeContext'
import { xcodeLight, xcodeDark } from '@uiw/codemirror-themes-all'
import './CodeBlock.scss'

export default function CodeBlock({ code: initialCode, editable: editable }) {
  const { getPyodide } = usePyodide();
  const { theme } = useThemeContext();
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const runCode = async () => {
    setLoading(true)
    setOutput('')

    const py = await getPyodide()
    let captured = ''
    py.setStdout({ batched: (msg) => { captured += msg + '\n' } })

    try {
      await py.runPythonAsync(code)
      setOutput(captured)
    } catch (err) {
      setOutput(String(err))
    }
    setLoading(false)
  }

  return (
    <>
      <CodeMirror
        value={code}
        extensions={[python()]}
        onChange={(value) => setCode(value)}
        theme={theme === "dark" ? xcodeDark : xcodeLight}
        editable={editable}
        style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', }}
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