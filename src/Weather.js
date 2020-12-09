import React,{useState} from 'react'
//import Storage from './Storage'
//import './weather.css'
import Textfield from '@material-ui/core/TextField'
import axios from 'axios'

function Weather(props) {
    const[country,setCountry]=useState("")
    const[city,setCity]=useState("")
    const[state,setState]=useState("")
    const[historyValue,setHistoryValue]=useState('')
    const[weather,setWeather]=useState(null)

    const handleCountry=(event)=>{
       setCountry(event.target.value)
    }

    const handleCity=(event)=>{
       setCity(event.target.value)
    }

    // const handleHistoryValue=()=> {
        // setHistoryValue(`${country}, ${city}`)
    // }

    const handleSearch=()=>{
        if(country && city){
            axios.get(`http://api.weatherstack.com/current?access_key=8af31b6a10123396e83ca1dee2b6bf49&query=${country},${city}`)
            .then((res)=>{
                console.log(res)
                setWeather(res.data)
                setHistoryValue(`${country}`)                                                                      
                //  if(props.isLoggedIn){
                    localStorage.setItem(`${country}`, historyValue )
                // }
            })
            .catch((err)=>console.error(err))
        }

    }
    const handleReset=()=>{
        (document.querySelectorAll('input')).forEach(
            input=>(input.value="")
        )
        setState({itemvalues:[{}]
        });
    }
   // function addtoLocalStorage(){
       // localStorage.setItem(key,value)
//}
    
    
    return (
        <div >
            <Textfield type="text" placeholder='Country' onChange={handleCountry}/>
            {/* <input type="text" placeholder='Country' onChange={handleCountry}/> */}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Textfield  type="text" placeholder='City' onChange={handleCity}/>
            {/* <input type="text" placeholder='City' onChange={handleCity}/> */}
            &nbsp;&nbsp; &nbsp; &nbsp; 
            
            <button onClick={handleSearch} >Search</button>
            &nbsp;
            <button onClick={handleReset}>Reset</button>
        
            
        

       {
           weather &&(
            <div>
                <h1>{weather.location.name},{weather.location.country}</h1>
                <h1>{weather.current.temperature}</h1>
                <img  src={weather.current.weather_icons} alt='weather'/>
                <h1>{weather.current.observation_time}</h1>
                <h1>{weather.location.localtime}</h1>
                <h3>{weather.current.weather_descriptions}</h3>
                
            </div>
           )
       }
        </div>
    )
}

export default Weather

