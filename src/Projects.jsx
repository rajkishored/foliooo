import react from "react"
import { DiVim } from "react-icons/di";


function Projects({cont}){

return(
    
<div className="pcard" >
    <div className="pimg"><img src={cont.img} alt=""  width={440} height={220}/></div>
    <div className="pcontent"><h3 style={{padding:"5px"}}>{cont.title}</h3>
     <p style={{textAlign:"justify",padding:"10px"}}>{cont.description}</p>
    </div>

</div>




)


}

export default Projects;