import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <h2>React Movies</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default App
