import "./Navigation.css"
import logo from "../../assets/logo.png"
import {useState} from 'react'

function Navigation() {
   const [burger,setburger]=useState('');
  return (
  <header className="container">
       
   <nav className={`nav`}>
       <div id="brand">
           <img src={logo} alt="logo"/>
       </div>
     <ul className={`list ${burger}`}>
      <li><a href="#">Programs</a></li>
      <li><a href="#">Live Projects</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">About</a></li>
     </ul>
     <div className="burger" 
        onClick={()=>{

           // Animating Burger
           if(burger==='') setburger('cross')
           else setburger('')
            
        } 
        }>
         <div className={`line1-${burger}`}></div>
         <div className={`line2-${burger}`}></div>
         <div className={`line3-${burger}`}></div>
     </div>
   </nav>
    </header>
   
  );
}

export default Navigation;