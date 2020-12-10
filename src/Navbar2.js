import React from 'react'
import{Link} from 'react-router-dom'
import './navbar.css'

function Navbar2() {
    return (
        <div>
             <nav>
                <ul>
                <li><Link to='/'>{""}Logout</Link></li> 
                 <li className="nav"> Forecasttoday</li>
                 <li><Link>{""}Search History</Link></li> 
                   <li><Link >{""}About</Link></li>  
                      
                </ul>
            </nav>
        </div>
    )
}

export default Navbar2
