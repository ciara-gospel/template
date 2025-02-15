import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Packages from './pages/packages'
import Home from './pages/home'
import About from './pages/about'
import Contactus from './pages/contactus'
import Gallery from './pages/gallery'
import { Data } from './context/context'
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