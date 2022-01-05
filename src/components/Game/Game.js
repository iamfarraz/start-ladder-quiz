import './Game.css'
import Start from "../Start/Start"
import End from "../End/End"
import Playing from '../Playing/Playing';
import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router'
function Game() {
  //states
  const [taskArray,settaskArray]=useState([])
  const [corrects,setcorrects]=useState(0)
  const [totalTime,settotalTime]=useState(0)

  //functions
  useEffect(()=>{
     fetch("https://api.startladder.co/api/frontend/tasks")
     .then(res=>res.json())
     .then(data=>{
       if(!data.status)console.log("Can't fetch")
       else { settaskArray(data.task_array)}
     })
     .catch(err=>console.log(err))
   },[])

   const increaseCorrects=(val)=>{ setcorrects(corrects+val)}
   const updateTotalTime=(val)=>{settotalTime(val)}
   const updateCorrects=(val)=>{setcorrects(val)}
   
  const start=
  <div className='start game'>
    <Start 
    updateTotalTime={updateTotalTime}
    updateCorrects={updateCorrects}/> 
   </div>
  const playing= 
  <div className='playing '>
     <Playing 
     taskArray={taskArray} 
     increaseCorrects={increaseCorrects}
     updateTotalTime={updateTotalTime} /> 
  </div> 

  const end=
  <div className='end game'>
     <End 
     corrects={corrects} 
     totalTime={totalTime} /> 
  </div>  
   
                  
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