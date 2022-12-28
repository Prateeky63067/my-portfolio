import React from 'react'
import Button from '@mui/material/Button';
import Particles from './Particles'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <><Particles id="tsparticles" />
   <div className='homeclass'>
    <div class="d-flex flex-column justify-content-center w-100 h-100">

     <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="flex">
          <div class="text">
            Hello, I'm <span class="highlight">Prateek Yadav</span>.
            <br/>
            I'm a full-stack web developer.
          </div>
       <div  className='view'>
       <NavLink className='ancher' to="/Portfolio"> <Button className='m-2 p-2 homebtn' variant="contained">
        <span className='spanview'>View my work</span>
        </Button>
       </NavLink>
        </div>
</div>
</div>
</div>
   </div>
     <About/>
     <Projects/>
     <Contact/>
   </>
  )
}

export default Home