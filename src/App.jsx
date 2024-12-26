
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Franchies from './component/Franchies'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/franchies" element={<Franchies />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
