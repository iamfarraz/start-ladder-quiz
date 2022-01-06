import './Playing.css'
import './BottomLayer.css'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import TopLayer from './TopLayer';
import MiddleLayer from './MiddleLayer';
import right from "../../assets/right.json"
import wrong from "../../assets/wrong.json"
import Lottie from "lottie-react";
function Playing(props) {
   const {taskArray,updateTotalTime,increaseCorrects}=props;
  
   const [index,setindex]=useState(0);
   const [seenSolution,setseenSolution]=useState(false)
   const [inputText,setinputText]=useState('');
   const [timeOn,settimeOn]=useState(true);
   const [animation,setanimation]=useState(false);
   const [result,setresult]=useState('')
   
   
   let navigate = useNavigate();
   const handleEnter=(e)=>{
     
      if(e.key==='Enter'){
        settimeOn(false)
        //check answer is correct or not

        function animate(res) {
          setanimation(true)
          setresult(res)

          setTimeout(() => {
            setanimation(false)
            setresult('')
            //moving to next
            if (index < 5) { setindex(index + 1) }
            else { navigate("/end") }
      
            setinputText('')
            setseenSolution(false)
            settimeOn(true)
          }, 1500)
        }
        const myanswer=(e.target.value).toLowerCase()
        if(taskArray[index].answer.toLowerCase()===myanswer){
          if(!seenSolution)increaseCorrects(1);
          animate('right')
        }
        else {animate('wrong') }
   
        }
       else settimeOn(true) 
    }

    const handleChange=(e)=>setinputText(e.target.value)

   const handleSolution=(e)=>{
   setseenSolution(true)
   }
    
    const answer_box= <div className='answer_box' >
                      <div className='answer'>ANSWER</div>
                      <input 
                      className='answer_input'
                      type="text" 
                      onKeyPress={handleEnter} 
                      placeholder="Type Answer.."
                      autoFocus="autofocus"
                      onChange={handleChange}
                      value={inputText || ''}
                      ></input>
                      </div>
 
     const style = {
       position:"relative",
       height: "20vh",   };       
      
  return (
   
      <div className="Playing">
         <TopLayer 
         index={index} 
         taskArray={taskArray}
         updateTotalTime={updateTotalTime}
         timeOn={timeOn}
         />
        <MiddleLayer
        index={index}
        taskArray={taskArray}
        />
      {animation
        ? <div className={`bottom ${result}`}> 
          {result==='right'?
            <div className='animation'>
            <Lottie animationData={right} loop={false} style={style} />  
            </div>
            : 
            <div className='animation'>
            <Lottie  animationData={wrong} loop={false} style={style} />  
            </div>
          }
           </div>
        : <div className='bottom'>
          {answer_box}
          {
            seenSolution ?
             <div className='query_box'>
              <div className='stuck'>{taskArray[index].answer}</div>
            </div> 
            :
              <div className='query_box'>
                <div className='stuck'>Stuck ?</div>
                <button
                  className='solution-button'
                  onClick={handleSolution} >
                  See Solution
                </button>
              </div>
          }
          
          </div>
      }
        
        
       </div> 
  );
}

export default Playing;