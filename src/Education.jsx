import React from "react";



function Educ({dett}){

return(
    <div className="edu-card">
        <div className="img-nam">
            <div className="eimg">
            <img src={dett.img} alt=""  width={63} height={63}/>
            </div>
            <div className="enam">
            <h4 style={{marginBottom:"0px"}}>{dett.sname}</h4>
            <p>{dett.fromm}</p>
            <p>{dett.date}</p>
            </div>
           
        </div>
        <div className="e-det">
            <p><b>Grade</b>: {dett.Grade}</p>
            <p>{dett.about}</p>
        </div>
        
    </div>


)



}
export default Educ