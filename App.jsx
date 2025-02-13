import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
const App = () => {
  return (
    <div className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App;