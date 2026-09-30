import { PyodideProvider } from './PyodideContext'
import Navbar from './components/Navbar/Navbar'
import Router from './Router' 
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <PyodideProvider>
        <div className='app-container'>
          <Router />
        </div>
      </PyodideProvider>
    </>
  )
}

export default App