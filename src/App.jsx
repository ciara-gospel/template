import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Packages from './pages/Packages'
import Home from './pages/Home'
import About from './pages/About'
import Contactus from './pages/Contactus'
import Gallery from './pages/Gallery'
import { Data } from './context/Context'
import './App.css'

function App() {
  

  return (
    <Data>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about_us" element={<About />}></Route>
        <Route path="/contact_us" element={<Contactus />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/package" element={<Packages />}></Route>
      </Routes>
      </BrowserRouter>
    </Data>
  )
}

export default App