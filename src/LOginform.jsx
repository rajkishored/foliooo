// import react, { useState } from "react";
// import ll from "./Weather.module.css"
// import { ToastContainer, toast } from 'react-toastify';




// function Logg(){

//     // let [username,setusername]=useState("");
//     // let [password,setpass]=useState("")
//     // let [logindate,setlogindata]=useState([])

//     let [form,setform]=useState({

//          uname:"",
//          upass:"",
//     })
//     let [entries, setEntries] = useState([]);

//     let handlechange=(event)=>{
         
//         let namee=event.target.name;
//         let vall=event.target.value
//         setform({...form,[namee]:vall})
      

//     }
    
//     let storee=(event)=>{
//         event.preventDefault();
//         setEntries([...entries,form])
     
//         setform({uname:"",upass:""})
//         console.log(form);
        
       


//     }

//     let [show,setshow]=useState(false)

   
    
  
 
//     let del=(z)=>{

//         toast.success("successfull deleted!");
//         let d=entries.filter((x,i)=> i!==z)

//           setEntries(d)
       
        
         

//     }
        

// return(

//      <div className={ll.con}>
          
//          <form className={ll.lf} onSubmit={storee}>
               
//                <div className={ll.det}>
//                <label className={ll.lb} htmlFor="">UserName</label>
//                <input type="text"  value={form.uname}  name="uname" onChange={handlechange}/>
//                <label className={ll.lb} htmlFor="">Password</label>
//                <input type="password" value={form.upass} name="upass" onChange={handlechange}/>
//                </div>
//                <div className={ll.bb}>
//                 <button className={ll.bt} type="submit">Login</button>
//                </div>

//           </form> 
               

//       <button onClick={()=> setshow(!show)}>show</button>
    

//     <div className={ll.sh}>

//         <table>
            
//             <ToastContainer position="top-center" />
//         { (show) ? <><tr >
//                <th>Sno</th>
//                <th>username</th>
//                <th>password</th>
//                <th>edit</th>

//             </tr>
//             {entries.map((x,i)=>{
//                  return (<tr>
//                       <td>{i+1}</td>
//                       <td>{x.uname}</td>
//                       <td>{x.upass}</td>
//                       <td><button >edit</button><button onClick={()=>del(i)}>delete</button> </td>
                   
//                  </tr>)

//             })}</> : ''}
           

           
               

           

//         </table>
//     </div>
//      </div>



// )



// }
// export default Logg;