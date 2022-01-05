import './End.css'
import {NavLink} from 'react-router-dom'
function End(props) {
   const {totalTime,corrects}=props
  const avgTime=(totalTime/6).toPrecision(2);
  const accuracy=((corrects/6).toPrecision(2)*100)
  return (
    <div className="End gradientbg">
        <div className='val_accuracy'>{`${accuracy}%`}</div>
       <div className='accuracy'>Accuracy</div>
        <div className='val_avg'>{`${avgTime}s`}</div>
       <div className='avg'>Avg Speed</div>
       <NavLink className='play-again-button' to="/">
        <div className='text'> Play Again</div>
         </NavLink> 
        
    </div>
  );
}

export default End;