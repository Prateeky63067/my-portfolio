import React from 'react'

const Bar = (props) => {
  return (
    <div className='outer'>
    
    <div className='inner' style={{ width: props.width}}>
       {props.name}
    </div>
    <div className='percent'>
      {props.width}
    </div>
    </div>
  )
}

export default Bar