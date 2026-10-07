import Navbar from './components/Navbar/Navbar'
import Router from './Router' 
import './App.scss'

function App() {
  return (
    <>
      <Navbar />
      <div className='app-container'>
        <Router />
      </div>
    </>
  )
}

export default App