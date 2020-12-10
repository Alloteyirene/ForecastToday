import React from 'react'
import{Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li className="nav">ForecastToday</li>
                    <li><Link to='/'>{""}Home</Link></li>
                   <li><Link to='/signup2'>{""}Signup</Link></li>  
                    <li><Link to='/login2'>{""}Login</Link></li>   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
