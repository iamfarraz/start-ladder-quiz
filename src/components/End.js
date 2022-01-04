import './End.css'
import {NavLink} from 'react-router-dom'
function End() {
  
  return (
    <div className="End gradientbg">
        <div className='val_accuracy'>75%</div>
       <div className='accuracy'>Accuracy</div>
        <div className='val_avg'>4.3s</div>
       <div className='avg'>Avg Speed</div>
       <NavLink className='play-again-button' to="/">
        <div className='text'> Play Again</div>
         </NavLink> 
        
    </div>
  );
}

export default End;