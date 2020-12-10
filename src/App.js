import React from 'react'
import './App.css';
import Login2 from './Login2'
import Signup2 from './Signup2'
import Main from './Main.js'
//import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
     <Router>
       <Switch>
         {/* <Route exact path='/' component={Home}/> */}
         <Route path='/signup2' component={Signup2}/>
         <Route path='/main' component={Main}/>
         <Route path='/' component={Login2}/>
         <Route />
         <Route />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
