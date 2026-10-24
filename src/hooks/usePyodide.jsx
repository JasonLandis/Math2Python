import { loadPyodide } from 'pyodide'

let pyodidePromise

function getPyodide() {
  pyodidePromise ??= loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/'
  })
  return pyodidePromise
}

export function usePyodide() {
  const run = async (code) => {
    const py = await getPyodide()
    let output = ''
    py.setStdout({ batched: (msg) => { output += msg + '\n' } })
    py.setStderr({ batched: (msg) => { output += msg + '\n' } })
    try {
      await py.loadPackagesFromImports(code, {
        messageCallback: () => {},
        errorCallback: () => {}
      })
      await py.runPythonAsync(code)
    } catch (error) {
      output += error.message
    }
    return output
  }

  return { run }
}