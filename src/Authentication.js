import React, { useState } from 'react'
import './Auth.css'
function Authentication() {
    const[displayName,setDisplay] = useState("");
    const[userName,setUser] = useState("");
    const[image,setImage] = useState("");
  return (
    <div>
    <div>
        <input value={displayName} onChange={(e)=>{
            setDisplay(e.target.value)
        }}/>
        <input value={userName} onChange={(e)=>{
            setUser(e.target.value)
        }}/>
        <input value={image} onChange={(e)=>{
            setImage(e.target.value)
        }}/>
    </div>
    </div>
  )
}

export default Authentication