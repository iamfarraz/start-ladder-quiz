import './Start.css'
import {NavLink} from 'react-router-dom'
import React,{useEffect} from 'react'
function Start(props) {
   const {updateCorrects,updateTotalTime}=props
   useEffect(()=>{
    updateCorrects(0)
    updateTotalTime(0)
   },[])
  return (
    <div className="Start gradientbg">
      <NavLink className='start-button' to="/playing" >
       <div className='text'> Start Quiz</div> 
        </NavLink> 
        
    </div>
  );
}

export default Start;