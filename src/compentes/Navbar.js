import React from "react";
import './Navbar.css'

function Navbar(){
    return(
  <nav className="navbar">
    <div className="logo">
      {/* <img src="image source"alt="logo"/> */}
      <h1>logo</h1>
    </div>
    <div className="nav-item">
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Conteat</li>
      </ul>
    </div>
    <div className="icon">
   <h3>icon</h3>
    </div>
  </nav>
    );
}

export default Navbar