import React/*,{Component}*/,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Weather from './Weather'
import axios from 'axios'
import Script from './Script'
import Navbar from './Navbar'
import './home.css'

function Home() {
     return (
        <div className="home">
            <Navbar/>
            <h1>Hey!!! How are you feeling today?</h1> 
            {/* <Script/> */}
            <Weather/>
           
        </div>
    )
}

export default Home
/*class Home extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://some-scripturl.js";
        this.div.appendChild(script);
      }
      render() {*/
 {/* <a class="weatherwidget-io" href="https://forecast7.com/en/5d60n0d19/accra/" data-label_1="ACCRA" data-label_2="WEATHER" data-theme="original" >ACCRA WEATHER</a>
              
                < script>
                  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
                  </ script>*/}
            