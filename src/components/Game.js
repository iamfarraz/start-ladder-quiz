import './Game.css'
import Start from "./Start"
import End from "./End"
import Question from './Question';
function Game() {
  //start
  //questions
  //end
  return (
    <div className="Game">
      {/* <div className='start game'>
             <Start/>  
      </div> */}
      <div className='question game'>
      <Question/>
      </div>
     
      {/* <div className='end game'>
         <End/>
      </div> */}
       
    </div>
  );
}

export default Game;