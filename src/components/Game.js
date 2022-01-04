import './Game.css'
import Start from "./Start"
import End from "./End"
import Playing from './Playing';
function Game() {
  //start
  //Playing
  //end
  return (
    <div className="Game">
      {/* <div className='start game'>
             <Start/>  
      </div> */}
      <div className='playing game'>
      <Playing/>
      </div>
     
      {/* <div className='end game'>
         <End/>
      </div> */}
       
    </div>
  );
}

export default Game;