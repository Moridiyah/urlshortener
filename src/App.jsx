import React from 'react'
import Shortener from './components/shotener'
import Nav from './components/nav'
import Body from './components/body'
import Stats from './components/stats'
import Boost from './components/boost'
import Footer from './components/footer'
const App = () => {
  return (
    <div>
      <Nav />
      <Body />
      <Shortener />
      <Stats/>
      <Boost/>
      <Footer/>
    </div>
  )
}

export default App
