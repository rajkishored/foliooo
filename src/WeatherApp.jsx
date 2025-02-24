import React, { useState } from "react";
import  w from './Weather.module.css'

function Weather(){
   
    let [city,setcity]=useState('')
    
    let [weatherdata,setweatherdata]=useState(undefined)
    let [tr,settr]=useState(false)

   
    
    let getdata=(event)=>{
        settr(false)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9af61ee1366ab8ea8f7499bf00b9b096&units=metric`)
        .then((res)=>res.json())
        .then((finaldata)=>{

            if(finaldata.cod=="400"|| finaldata.cod=="404" ){
               
                setweatherdata(undefined)
               
               
            }
            else {
             
                setweatherdata(finaldata);
               
               
                console.log(finaldata);
                
             
            }
            settr(true)
            
          
            
        })
      event.preventDefault()
      setcity('')

    }
    let [show,setshow]=useState(false)
    
    

    
return( <div className={w.weatherapp}>


<h1 className={w.a}>Weather App</h1>
      <div className={w.search}>

        
        <form onSubmit={getdata}>
      <input type="password"  value={city} onChange={(event)=>setcity(event.target.value)} placeholder="city name"  /> <span style={{color:"wheat",cursor:"pointer"}}onClick={()=>setshow(!show)}>ey</span><button type="submit">Search</button>
      </form>

      </div>
      <div className={w.details}>
         <img className={w.lod} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" width={60} hidden={(tr)? true :false} /> 
      
      
     { weatherdata !== undefined  ?   
     
        <> 
            
        <h2 style={{   padding:"0px" ,margin: "3px", marginTop: "9px", color:"black"}}>  {weatherdata.name}  <b>{weatherdata.sys.country}</b></h2>
        <h1 style={{   padding:"0px" ,margin: "3px"}}>{weatherdata.main.temp} oC</h1>
        <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt=""  width="50px"/>
        <h4 style={{   padding:"0px" ,margin: "3px",marginBottom: "9px"}}>{weatherdata.weather[0].main}</h4>
        </>  
        
       
         : <h3>No city found</h3>
                    }
     </div>
        


</div>
)
} 
       
  
     
      



export default Weather