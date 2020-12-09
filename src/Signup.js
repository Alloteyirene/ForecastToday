import React,{useState}from 'react' 
import {Link} from 'react-router-dom' 
import Home from './Home'
import './login.css'
import TextField from '@material-ui/core/TextField';

function Login() {
    const[fullname,setFullname]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[LoggedIn, setLoggedIn]=useState(false)
  
    const handleFullname=(event)=>{
        setFullname(event.target.value)
    }
    const handleEmail = (event)=>{
      setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
      setPassword(event.target.value)
    }
    function handleButton(event){
      event.preventDefault();
      if(fullname==='Weather' && email=== "weather@gmail.com" && password==="weather"){
        setLoggedIn(true)
      }
    }
    return (
        <div>
           <div className="Login">
                {LoggedIn?
                <>
                <Home/>
               { /*<Link to='/home'></Link>*/}
                </>
                :
             <>
                <form>
                <TextField
                onChange={handleFullname}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="name"
               label="Full Name"
               name="name"
               autoComplete="name"
               autoFocus
               /> <TextField
               onChange={handleEmail}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               autoComplete="email"
               autoFocus
               />
                <TextField
                onChange={handlePassword}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               autoComplete="email"
               autoFocus
              />
                {/*<h2>Fullname</h2>
                <input type='name' placeholder='fullname' onChange={handleFullname}/>
                <br/>
                <br/>
                <h2>Email</h2>
                <input type='email' placeholder='email'onChange={handleEmail}/>
                <br/>
                <br/>
                <h2>Password</h2>
                <input type='password' placeholder='password' onChange={handlePassword}/>
                <br/>
                <br/>
               <button onClick={handleButton}>Login</button>
                <br/>
                <br/>
                <br/>
                <a href="https://instagram.com">Forgot Password?</a>
                <br/>
                <Link to='/login2'><span>Already have an account?Login</span></Link>*/}
                </form>
             </>
}
             </div> 
        </div>
    )
}
export default Login
