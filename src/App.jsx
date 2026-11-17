import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Contact from './Pages/Contact'
const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/header' element={<Header/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
   </>
  )
}

export default App