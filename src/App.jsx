import { PyodideProvider } from './contexts/PyodideContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Router from './Router' 
import './App.scss'

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <PyodideProvider>
          <div className='app-container'>
            <Router />
          </div>
        </PyodideProvider>
      </ThemeProvider>
    </>
  )
}

export default App