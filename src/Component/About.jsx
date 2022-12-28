import React from 'react'
import CardAbout from './CardAbout'
import { MdSpeed } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineBulb } from 'react-icons/ai';
import { IoIosRocket } from 'react-icons/io';
import AboutBottom from './AboutBottom';
import Bar from './Bar';
const About = () => {
  return (
    <div>
    <div className='mainhead'>
     <h1>About</h1>
    </div>
    <div className='aboutpage'>
      <CardAbout
        icon={<MdSpeed />}
        title="Fast"
        text="Fast load times and lag free interaction, my highest priority."
      />
      <CardAbout
       icon={<CgWebsite />}
        title="Responsive"
        text="My layouts will work on any device, big medium or small."
      />
      <CardAbout
       icon={<AiOutlineBulb />}
        title="Intuitive"
        text="Strong preference for easy to use, intuitive UX/UI."
      />
      <CardAbout
       icon={<IoIosRocket />}
        title="Dynamic"
        text="Websites don't have to be static, I love making pages come to life."
      />
      
   </div>
   <div className='aboutbottom'>
    <AboutBottom/>
   </div>
  
   </div>
  )
}

export default About