import React from 'react'
const CardAbout = (props) => {
  return (
    <>
     
            <div className="card" style={{width: '14rem'}}>
            <div className="hexagon">
                  {props.icon}
            </div>
              <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">{props.text}</p>
                 {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
               </div>
             </div>
     
    </>
  )
}

export default CardAbout