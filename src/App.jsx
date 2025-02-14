import { BrowserRouter, Routes, Route } from 'react-router'
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
        <Route path="/packages" element={<Packages />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
      </BrowserRouter>
    </Data>
  )
}

export default App