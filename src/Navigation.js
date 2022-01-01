import "./Navigation.css"
import logo from "./logo.png"

function Navigation() {
  return (
    
  <header className="container">
       
   <nav className="nav">
       <div id="brand">
           <img src={logo} />
       </div>
     <ul className="list">
      <li><a href="#">Programs</a></li>
      <li><a href="#">Live Projects</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">About</a></li>
     </ul>
     <div className="burger">
         <div className="line1"></div>
         <div className="line2"></div>
         <div className="line3"></div>
     </div>
   </nav>
    </header>
   
  );
}

export default Navigation;