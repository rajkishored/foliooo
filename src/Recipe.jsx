import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";

function REcipe(){

let [recipename,setrecipename]=useState([]) 
let [searchreci,setsearchreci]=useState('') 
let [finalrecipe,setfinal]=useState([])
let [show,setshow]=useState(false)

 useEffect(()=>{
   axios.get('https://dummyjson.com/recipes?limit=200')
     .then((res)=>res.data)
     .then((response)=>
      setrecipename(response.recipes),
      
    )
 },[])

 let fetchh=(e)=>{
    e.preventDefault();
    setsearchreci(e.target.recipe.value)
    setshow(true)
     
 }
 useEffect(()=>{
    axios.get(`https://dummyjson.com/recipes/search?q=${searchreci}`)
    .then((req)=>req.data)
    .then((response)=>{
        console.log(response);
        
        setfinal(response)
        // setshow(true)
        
        
    })
 },[searchreci])


return(
    <div className="qiz_cont">
       <h1>Know your recipe</h1>

       <div className="ques_details">
         {/* {questions.map((v)=>{
            return <li>{v.name}</li>
         })} */}
           <form  onSubmit={fetchh}>
           <label htmlFor="">Choose your recipe type </label> 
           <input list="recip" id="recipe" name="recipe" placeholder="start typing recipee..."/>
            <datalist id="recip">
                {recipename.map((v,i)=>{
                     return  <option  key={i} value={v.name}></option>
                })}
           
           
            </datalist>
            <button type="submit"> Show</button>
            </form>

       </div>

     {(show) ? <div className="recipedet">
             
                  
         <div className="recimg"> <img src={finalrecipe.recipes[0].image} alt=""  /> 
         <h2>{finalrecipe.recipes[0].name}</h2>
                <p> Duration: { finalrecipe.recipes[0].   cookTimeMinutes } minutes </p>   
         </div>

        
        
         <div className="rdet">
         <h3>Ingredients</h3>
       
                 <div className="rdet2">

                 <ol style={{textAlign:"left"}}>
                 { finalrecipe.recipes[0].ingredients.map((v)=>{
                    return   <li >{v}</li>
                 })}
                 </ol>
                 </div>
                 
        </div>

       
        
       <div className="rins">
        <h3>Instructions</h3> 
        <div style={{}}>

          <ol style={{textAlign:"left",color: "wheat"}}>
          { finalrecipe.recipes[0].instructions.map((v)=>{
         return   <li >{v}</li>
          })}
          </ol>
       </div>
      </div>

     </div>
             : <div  className="back_img"> <img src='https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=""   />  </div>}
 </div>       
)

}
export default REcipe
