import { Routes, Route } from "react-router-dom"
import  Blue from "./Blue.jsx"
import  Red  from "./Red.jsx"
import Home from "./Home.jsx"

function App() {

  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to='/'>Home</Link>
        <Link to='/red'>Red Rose</Link>
        <Link to='/blue'>Blue Orchid</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path='/red' element={<Red/>}/>
          <Route path='/blue' element={<Blue/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
import { Link } from 'react-router-dom'

