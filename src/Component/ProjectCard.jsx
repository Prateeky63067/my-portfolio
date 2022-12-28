import React from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <>
   
        <div className="ProjectCard">
        <div className='imageabout'>
        <img className="projectimg" src={props.imagesrc} alt="Error" /> 
        </div>
            <div class="info">
                <h1>{props.projectName}</h1>
                <p>{props.AboutProject}</p>
                <a target='_blank' href={props.link}><button> Read
                More </button></a>
            </div>
        </div>
        
    </>
  )
}

export default ProjectCard