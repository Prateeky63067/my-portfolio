import React from 'react'
import Navbar from './Component/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Route,Switch,Redirect } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
// import Portfolio from './Component/Portfolio'
import Work from './Component/Work'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import 'typeface-raleway';
import Projects from './Component/Projects'

// import Particles from './Component/Particles'
const App = () => {
  return (
    <>
     <Navbar/>
     {/* <Home/> */}

     
    
     <Switch>
      <Route  exact path='/' component={Home}/>
      <Route  exact path='/About' component={About}/>
      <Route  exact path='/Portfolio' component={Projects}/>
      <Route  exact path='/Work' component={Work}/>
      <Route  exact path='/Contact' component={Contact}/>
      <Redirect to='/'/>
     </Switch>
     <Footer/>
    </>
    
  )
}

export default App