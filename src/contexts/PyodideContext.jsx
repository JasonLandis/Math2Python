import { createContext, useContext, useRef, useState } from 'react'
import { loadPyodide } from 'pyodide'

const PyodideContext = createContext()

export function PyodideProvider({ children }) {
  const pyodideRef = useRef()
  const loadingPromiseRef = useRef()
  const [ready, setReady] = useState(false)

  const getPyodide = async () => {
    if (pyodideRef.current) return pyodideRef.current

    if (!loadingPromiseRef.current) {
      loadingPromiseRef.current = (async () => {
        const py = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/'
        })
        await py.loadPackage('numpy')
        pyodideRef.current = py
        setReady(true)
        return py
      })()
    }
    return loadingPromiseRef.current
  }

  return (
    <PyodideContext.Provider value={{ getPyodide, ready }}>
      {children}
    </PyodideContext.Provider>
  )
}

export function usePyodide() {
  return useContext(PyodideContext)
}