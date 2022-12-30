import React from 'react'
import ProjectCard from './ProjectCard'
import weather from '../images/weather.jpg'
import yadavPrateek from '../images/yadavPrateek.jpg'
import Landing from '../images/landingPage.png'
import portfolio from '../images/portfolio.png'
const Projects = () => {
  return (
    <>
    
        <div className='mainhead'>
           <h1>Projects</h1>
        </div>
        <div className='Projectbody'>
        <div class="wrapper">
          <ProjectCard
            projectName='WeatherApp'
            AboutProject='It is basically a responsive website in which we can check the temperature of any city by entering city name'
            imagesrc={weather}
           link="https://github.com/Prateeky63067/weatherAPP"
          />
          <ProjectCard
            projectName='YadavPrateek'
            AboutProject='it is created using Html CSS and JavaScript and Reactjs.'
            imagesrc={yadavPrateek}
            link="https://lnkd.in/dffSV_pP"
          />
         
          <ProjectCard
            projectName='Portfolio'
            AboutProject='it is created using Html CSS and JavaScript and Reactjs.'
            imagesrc={portfolio}
            link="https://superlative-pudding-bbc56a.netlify.app/"
          />
         
        </div>
    </div>
    </>
  )
}

export default Projects