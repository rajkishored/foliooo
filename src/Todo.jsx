import { useState } from 'react';
import t from "./Weather.module.css"

function TODO() {

 let [newt,setnewt]=useState([]);

 



 let save=(event)=>{
  event.preventDefault();
  let tosave=event.target.texts.value;
 
  if(!newt.includes(tosave)){
    let  toinclude=[...newt,tosave]
    setnewt(toinclude);


  }
  else{
    alert("Already exixt")
  }
  
 }

 let savedlist=newt.map((x,i)=>{ 
  return(   <Todolist  valuee={x} inde={i} newt={newt} setnewt={setnewt}/> )
 })


 


  return (
    <div className={t.todoapp}>
      <h1 className={t.h1}>TO-Do List</h1>
      <form  className={t.tform} onSubmit={save}>
      <input type='text' name="texts"/> <button >Save</button> 
      </form>

     <div className={t.listss}>
      <ul className={t.ulll}>
        {savedlist}
      </ul>
     </div>
     
    
   
    </div>
  );
  
}


function Todolist({valuee,inde,newt,setnewt}){
   
  let [stri,setstri]=useState(false);

  let deleterow=()=>{
          
     let deleted=newt.filter((v,i)=>inde!==i)

    setnewt(deleted);
  } 

  
  
  return (  

    <li className={(stri) ? `${t.lii}`: ' '} onClick={()=>setstri(!stri)}>   {valuee}  <span className={t.spa} onClick={deleterow} >&times;</span> </li>
    )
}


   
export default TODO;
