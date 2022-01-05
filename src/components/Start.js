import './Start.css'
import {NavLink} from 'react-router-dom'
function Start() {
 
  return (
    <div className="Start gradientbg">
      <NavLink className='start-button' to="/playing" >
       <div className='text'> Start Quiz</div> 
        </NavLink> 
        
    </div>
  );
}

export default Start;