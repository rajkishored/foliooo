import React, { use, useState } from "react";
import Weather from "./WeatherApp";
import TODO from "./Todo";
import Password from "./Password";
// import Logg from "./Loginform";

function Works(){

    let [works,setworks]=useState(<Weather/>)

return(
    <div className="workss">
       <div className="worksss">
        <div className="work-namee">
        <label htmlFor=""  onClick={()=>setworks(<Weather/>)}>Weather</label>
          <label htmlFor="" onClick={()=>setworks(<TODO/>)}>todo</label>
          <label htmlFor="" onClick={()=>setworks(<Password/>)}>password</label>
          {/* <label htmlFor="" onClick={()=>setworks(<Logg/>)}>Login</label> */}
          
          
        </div>
        <div className="work-details">
                {works} 
        </div>
        </div>

    </div>
)

}


export default Works;