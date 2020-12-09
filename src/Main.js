import React from 'react'
import Weather from './Weather'
//import Current from './Current'
import Navbar2 from './Navbar2'
import "./main.css"

function Main(props) {
    return (
        <div className="maincss">
            <Navbar2/>
            <h1>Hello {props.username}</h1>
            <h2>Where do you plan on going today?</h2>
            <div className="current">
              {/* <Current /> */}
              
            </div>
            <Weather isLoggedIn={props.LoggedIn}/>
            
        </div>
    )
}

export default Main
