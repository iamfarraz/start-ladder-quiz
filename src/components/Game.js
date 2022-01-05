import './Game.css'
import Start from "./Start"
import End from "./End"
import Playing from './Playing';
import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router'
function Game() {
  
  const [taskArray,settaskArray]=useState([])
   useEffect(()=>{
     fetch("https://api.startladder.co/api/frontend/tasks")
     .then(res=>res.json())
     .then(data=>{
       if(!data.status)console.log("Can't fetch")
       else { settaskArray(data.task_array)}
     })
     .catch(err=>console.log(err))
   },[])
  const start=<div className='start game'>
                  <Start />  </div>
  const playing= <div className='playing game'>
                  <Playing taskArray={taskArray} /> </div>  
  const end=<div className='end game'>
                  <End  /> </div>  
   
                  
  return (
    <div className="Game">
     <Routes>
       <Route exact path="/" element={start} ></Route>
       <Route exact path="/playing" element={playing} ></Route>
       <Route exact path="/end" element={end} ></Route>
     </Routes>
    </div>
  );
}

export default Game;