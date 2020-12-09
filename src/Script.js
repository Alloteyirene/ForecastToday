import React,{useEffect} from 'react'

    const Script= url =>{
        useEffect(()=>{
            const script=document.createElement("script");
    
            script.src='https://weatherwidget.io/js/widget.min.js';
            script.async=true;
            document.body.appendChild(script);
    
            return()=>{
                document.body.removeChild(script);
            }
        },[url]); 
    }

export default Script
