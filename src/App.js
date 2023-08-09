import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className='container'>
        <Navbar 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Main darkMode={darkMode}/>
    </div>
  )
}

export default App