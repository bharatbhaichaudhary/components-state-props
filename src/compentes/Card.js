import React from "react";
import './Navbar.css'
import card1 from '../img/card-1.png'

function Card(){
    return(
        <div className="main">
            <div className="row-30">
               <img className="card-img" src={card1}/>
               <p className="color">lorem</p>
               <p className="color">Hero is wwsdsdbb dodh kdh</p>
               <button id="btn-1">Click</button>
            </div>
            <div className="row-30">             
               <img className="card-img" src={card1}/>
               <p className="color">lorem</p>
               <p className="color">Hero is wwsdsdbb dodh kdh</p>
               <button id="btn-1">Click</button>
            </div>
            <div className="row-30">
               <img className="card-img" src={card1}/>
               <p className="color">lorem</p>
               <p className="color">Hero is wwsdsdbb dodh kdh</p>
               <button id="btn-1">Click</button>
            </div>
        </div>
    )
}

export default Card