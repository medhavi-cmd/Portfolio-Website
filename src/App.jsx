import React from 'react'
import Navbar from './sections/navbar.jsx'
import './index.css'
import Hero from './sections/Hero.jsx'
import Contact from './sections/Contact.jsx'
import About from './sections/About.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
   <div className='container mx-auto max-w-7xl'>
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
