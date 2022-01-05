import './Playing.css'
import React,{useState,useEffect} from 'react'
function Playing(props) {
   const {taskArray}=props;
   const [index,setindex]=useState(0);
  //  "_id":"1",
  //        "category":"Product Management",
  //        "question":"Which of the following is not a priority metric for a new Internet web portal that has been launched?",
  //        "answer":"Time duration on the site"
  
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
                <div className='value'>00</div>
                <div className='unit'>MIN</div>
              </div>
              <div className='divider'>:</div>
              <div className='second'>
                    <div className='value'>00</div>
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
                <input className='answer_input' type="text" placeholder="Type Answer.."></input>
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