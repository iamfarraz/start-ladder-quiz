import './End.css'

function End() {
  
  return (
    <div className="End gradientbg">
        <div className='val_accuracy'>75%</div>
       <div className='accuracy'>Accuracy</div>
        <div className='val_avg'>4.3s</div>
       <div className='avg'>Avg Speed</div>
       <button className='play-again-button'>Play Again</button> 
        
    </div>
  );
}

export default End;