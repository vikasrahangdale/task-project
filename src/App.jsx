import React from 'react'
import Nav from './pages/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceCard from './pages/ServiceCard'
import Page3 from './pages/Page3.jsx'   // Adding .jsx extension
import Page4 from './pages/Page4.jsx'   // Adding .jsx extension
import Page5 from './pages/Page5.jsx'   // If this is also a JSX file
import Page6 from './pages/Page6.jsx'   // If this is also a JSX file
import Page7 from './pages/Page7.jsx'   // Adding .jsx extension

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <Services/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
    </div>
  )
}

export default App
