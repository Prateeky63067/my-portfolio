import React from 'react'
import Bar from './Bar'
import myImage from '../images/myImage.png'
const AboutBottom = () => {
  return (
   <>
     <div className="card bottomcard" >
            <div >
            <img className="myImage" src={myImage} alt="Error" /> 
            </div>
              <div className="card-body">
                 <h5 className="card-title">Who's this guy?</h5>
                 <p className="card-text">I'm a full-stack web developer.
             I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
             Let's make something special.</p>
               </div>
      </div>
      <div className='bar'>
        <Bar
          width="90%"
          name="HTML"
        />
        <Bar
          width="90%"
          name="CSS"
        />
        <Bar
          width="80%"
          name="JavaScript"
        />
        <Bar
          width="80%"
          name="React"
        />
        <Bar
          width="80%"
          name="Bootstrap"
        />
        <Bar
          width="70%"
          name="Node.js"
        />
        <Bar
          width="60%"
          name="Express.js"
        />
        <Bar
          width="65%"
          name="MongoDB"
        />
      </div>
   </>
  )
}

export default AboutBottom