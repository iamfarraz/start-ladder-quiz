import './App.css';
import Quiz from "./Quiz"
import dots_verticle from "./assets/dots_verticle.png"
import dots_horizontal from "./assets/dots_horizontal.png"
function App() {
  return (
    <div className="App">
     <div className='rectangle'></div>
     <div className='dots-verticle'>
       <img src={dots_verticle} alt="dots-verticle"/>
     </div>
     <div className='dots-horizontal'>
       <img src={dots_horizontal} alt="dots-horizontal"/>
     </div>
      <Quiz/>   
    </div>
  );
}

export default App;
