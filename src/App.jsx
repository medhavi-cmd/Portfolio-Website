import React from 'react'
import Navbar from './sections/navbar.jsx'
import './index.css'
import Hero from './sections/Hero.jsx'

const App = () => {
  return (
   <div className='container mx-auto max-w-7xl'>
    <Navbar />
    <Hero />
   </div>
  )
}

export default App
