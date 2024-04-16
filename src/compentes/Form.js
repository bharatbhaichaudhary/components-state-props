import React from "react";
import './Form.css'

function Form(){
    return(
        <div className="form-main">
          <form className="form">
            <h1>BHARAT</h1>
            <div className="userName">
               <input type="text" placeholder="UserName"/>
            </div>

            <div className="userPass">
               <input type="password" placeholder="Password"/>
            </div>

            <div className="userGmail">
               <input type="gmail" placeholder="Gmail"/>
            </div>

            <div className="userNumber">
               <input type="number" placeholder="Number"/>
            </div>
            <button className="form-btn">Submit</button>
          </form>
        </div>
    )
}

export default Form