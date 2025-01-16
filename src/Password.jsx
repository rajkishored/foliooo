import React, { useState } from "react";
import  p from "./Weather.module.css"
import { LC, NU, SC, UC } from "./Data/PassChar";
 import { ToastContainer, toast } from 'react-toastify';

function Password(){

  

let [up,setup]=useState(false);
let [lc,setlc]=useState(false);
let [nu,setnu]=useState(false);
let [ch,setch]=useState(false);
let [pleng,setpleng]=useState(8);
let [fp,setfp]=useState('')
let finalpass='' ; 


function GeneratePass(){
     
    let Passchar='';

   

    if(up || lc || nu || ch ){

        if(up) Passchar +=UC;
        if(lc) Passchar +=LC;
        if(nu) Passchar +=NU;
        if(ch) Passchar +=SC;

       
        for(let i=0;i<pleng;i++){
            
            let r= Passchar.charAt(Math.floor(Math.random()*Passchar.length));
             finalpass+=r;
            

        }
       setfp(finalpass);
        
        

    }
    else{
        alert("Atleast select one..... ")
        
    }


}
let copyy=()=>{
    
    navigator.clipboard.writeText(fp)
    toast("copied")
  
}



return(<div className={p.bby}>
       
     <div className={p.Pbox}> 
        <h2 >Password Generator</h2>
        <div className={p.inpbox}>
            <input  style={{"padding":"9px 13px",fontSize: "18px",color:"#a0d2bb", backgroundColor:"rgb(0, 0, 0)" ,border:"1px solid #585d73"}}className={p.pass} type="text"  value={fp} /> <button className={p.copy} onClick={()=>copyy()}>C</button>
            <ToastContainer position="top-center" autoClose={100} hideProgressBar={false} newestOnTop={false} closeOnClick/>

        </div>
        
        <div className={p.passlength}>
              <label className={p.pl}>Password Length</label>
              <input className={p.pn} type="number"  min={8} max={20} value={pleng} onChange={(event)=>setpleng(event.target.value)}/>

        </div>
        <div className={p.passlength}>
              <label className={p.pl}>Upper Case</label>
              <input className={p.pn} type="checkbox" checked={up} onClick={()=>setup(!up)}/>

        </div>
        <div className={p.passlength}>
              <label className={p.pl}>Lower Case</label>
              <input className={p.pn} type="checkbox" checked={lc} onClick={()=>setlc(!lc)}/>

        </div>
        <div className={p.passlength}>
              <label className={p.pl}>Number</label>
              <input className={p.pn} type="checkbox" checked={nu} onClick={()=>setnu(!nu)}/>

        </div>
        <div className={p.passlength}>
              <label className={p.pl}>Special Char</label>
              <input className={p.pn} type="checkbox" checked={ch}onClick={()=>setch(!ch)} />

        </div>
        <div className={p.gener}>
            <button onClick={()=>GeneratePass()}>Generate</button>

        </div>
        
     </div>
    

</div>)
}
export default Password