import React from 'react'
import './style.css'

const Userinput = (props) => {
  return (
    <div>
      <input placeholder='enter anything' onChange={props.changename} value={props.user} ></input>
    
    </div>
  )
}

export default Userinput