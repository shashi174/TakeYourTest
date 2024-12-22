import React from "react";
import Login from "./login";
import './home.css'

/** Add all basic functions intial page loads. eg. ads, login, notification, terms and conditions. */
function Home () {
    return(
      <div className="home">
        <div className="top">

        </div>
        <div className="middle">
            <Login />
        </div>
        <div className="footer">

        </div>
        
      </div>
    )
}

export default Home