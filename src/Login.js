import React,{useState}from 'react' 
import {Link} from 'react-router-dom' 
import download from "./Pics/download.jpg"
import Weather from './Weather'

import './login.css'

function Login() {
    const[username,setUsername]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[LoggedIn, setLoggedIn]=useState(false)
  
  
    const handleUsername=(event)=>{
        setUsername(event.target.value)
    }
    const handleEmail = (event)=>{
      setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
      setPassword(event.target.value)
    }
    function handleButton(event){
      event.preventDefault();
      if(username==='weather' && email=== "weather@gmail.com" && password==="weather"){
        setLoggedIn(true)
        alert('You are logged in')
      }
      else{
        alert("login credentials incorrect")
      }
    }
    return (
        <div>
           <div className="Login">
                {LoggedIn?
                <>
                <Weather/>
               {/*<Link to='/home'></Link>*/}
                </>
                :
             <>
                <h1>Log in to have a better experience</h1>
                
                <img src={download.jpg} alt="weather"/>
                <form>
                <h2>Username</h2>
                <input type='name' placeholder='username' onChange={handleUsername} ></input>
                <br/>
                <br/>
                <h2>Email</h2>
                <input type='email' placeholder='email'onChange={handleEmail}></input>
                <br/>
                <br/>
                <h2>Password</h2>
                <input type='password' placeholder='password' onChange={handlePassword}></input>
                <br/>
                <br/>
               <button onClick={handleButton}>Login</button>
                <br/>
               <a href="https://instagram.com">Forgot Password?</a>
                <br/>
                <Link to='/signup2'><span>Click here to Signup</span></Link>
                </form>
              </>
}
             </div> 
        </div>
    )
}
export default Login
