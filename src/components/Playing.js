import './Playing.css'
import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Playing(props) {
   const {taskArray,updateTotalTime,increaseCorrects}=props;
  
   const [index,setindex]=useState(0);
   const [sec,setsec]=useState(0);
   const [inputText,setinputText]=useState('');
   const [timeOn,settimeOn]=useState(true);
   
   let navigate = useNavigate();
   const handleEnter=(e)=>{
     
      if(e.key==='Enter'){
        settimeOn(false)
        //check answer is correct or not
        const myanswer=(e.target.value).toLowerCase()
        if(taskArray[index].answer.toLowerCase()===myanswer){
          increaseCorrects(1);
          // alert("COrrect ans")
        }
        else {
          // console.log("Wrongggg")
        }

        //moving to next
        if(index<5){setindex(index+1)}
        else { navigate("/end")}
        // clearing input  field 
        setinputText('')

        settimeOn(true)
        }
       else settimeOn(true) 
    }

    const handleChange=(e)=>setinputText(e.target.value)

    useEffect(()=>{
      console.log("use Effect")
      let interval=null;
      if(settimeOn){
        interval=  setInterval(()=>{ 
       setsec(sec+1)
      },1000)
      }
      else{ console.log("set time is offf")}

     return ()=>{ 
       clearInterval(interval);
       updateTotalTime(sec);
       }
    },[sec])
    
  return (
   
      <div className="Playing">
        <div className='heading'>
            <div className='topic_box'>
                  <div className='topic'>Topic</div>
                  <div className='topic_name'>
                    {!taskArray[index]
                      ? "Loading"
                      : taskArray[index].category
                    }
                  </div>
            </div>  
            <div className='time_box'>
              <div className='minute'>
                <div className='value'>{("0"+Math.floor(sec/60)).slice(-2)}</div>
                <div className='unit'>MIN</div>
              </div>
              <div className='divider'>:</div>
              <div className='second'>
                    <div className='value'>{("0"+sec%60).slice(-2)}</div>
                    <div className='unit'>SEC</div>
                  </div>
              </div>   
            
        </div>
        <div className='middle'>
            <div className='question_box'>
                <div className='question_no'>
                  QUESTION {!taskArray[index] ? "..": taskArray[index]._id} of 6</div>
                <div className='question'>
                  {!taskArray[index] ? "..": taskArray[index].question}</div>        
            </div> 
        </div>
        <div className='bottom'>
            <div className='answer_box'>
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
            <div className='query_box'>
            <div className='stuck'>Stuck ?</div>
            <button className='solution-button'>See Solution</button>
            </div>
        </div>
       </div> 
  );
}

export default Playing;