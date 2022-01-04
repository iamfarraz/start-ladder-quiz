import './Playing.css'

function Playing() {
  
  return (
    <div className="Playing ">
      <div className='heading'>
          <div className='topic_box'>
                <div className='topic'>Topic</div>
                <div className='topic_name'>Product Management</div>
           </div>  
           <div className='time_box'>
             <div className='timer'>Time</div>
             </div>   
          
      </div>
      <div className='middle'>
          <div className='question_box'>
              <div className='question_no'>QUESTION 1 of 6</div>
              <div className='question'>The process of creating or improving a product or service is refered to as</div>        
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