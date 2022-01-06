import './Playing.css'
import './BottomLayer.css'
import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import TopLayer from './TopLayer';
import MiddleLayer from './MiddleLayer';
import right from "../../assets/right.json"
import wrong from "../../assets/wrong.json"
import Lottie from "lottie-react";
function Playing(props) {
   const {taskArray,updateTotalTime,increaseCorrects}=props;
  
   const [index,setindex]=useState(0);
  
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
            // clearing input  field 
            setinputText('')
            settimeOn(true)
          }, 1500)
        }
        const myanswer=(e.target.value).toLowerCase()
        if(taskArray[index].answer.toLowerCase()===myanswer){
          increaseCorrects(1);
          animate('right')
        }
        else {animate('wrong') }
   
        }
       else settimeOn(true) 
    }

    const handleChange=(e)=>setinputText(e.target.value)

  
    
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
    const query_box = <div className='query_box'>
                      <div className='stuck'>Stuck ?</div>
                      <button className='solution-button'>See Solution</button>
                      </div>
     const style = {
       position:"relative",
       height: "20vh",
       margin:"0",
       padding:"0",
       left:"40%"
       
       
};       
      
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
          {result=='right'?
            <Lottie animationData={right} loop={false} style={style} />  
            : <Lottie animationData={wrong} loop={false} style={style} />  
          }
           </div>
        : <div className='bottom'>
          {answer_box}
          {query_box}
          </div>
      }
        
        
       </div> 
  );
}

export default Playing;