import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaAws } from "react-icons/fa";





function Skills(){

return(
 <div className="sk">
    
  
        <div className="front">
            <h2>Frontend</h2>
            <div className="front2">
            <div className="fst"> <label htmlFor=""><TbBrandJavascript/> JavaScript</label>
            <label htmlFor=""> <FaHtml5/>  Html</label> </div>
            <div className="sec">       <label htmlFor=""><IoLogoCss3/> Css</label>
            <label htmlFor=""><FaReact/> React</label></div>
           <div className="thi">  <label htmlFor=""><FaBootstrap/> Bootstrap</label> </div>
          
           </div>
        </div>
        
        <div className="back">
        <h2>Backend</h2>
        <div className="back2">
        <div className="fst"><label htmlFor=""><FaNodeJs/> Node.js</label>  <label htmlFor=""><SiExpress/> Express.js</label></div>
        <div className="sec"> 
        <label htmlFor=""><BiLogoPostgresql/> Postgres</label></div>
        <div className="thi"> <label htmlFor=""><SiMysql/> MySql</label>
        <label htmlFor=""><FaAws /> AWS</label>
        </div>
        </div>
      
      
        

          
        </div>
    

  
     <div className="front">
     <h2>Languages</h2>

     <div className="fst"><label htmlFor=""><FaPython/> Python</label> <label htmlFor=""><TbBrandCpp/> C++</label></div>
     <div className="sec">
       
       <label htmlFor=""><FaJava/> Java</label></div>
     <div className="thi"></div>



  
           
      </div>
    <div className="back">
    <h2>Others</h2>
    <div className="fstt"><label htmlFor=""><FaGithub/> Github</label>     <label htmlFor=""><PiTreeStructureFill/>   Datastructures</label></div>
     <div className="sec">
 </div>
     <div className="thi"></div>
    
   
</div>
</div>)

}
export default Skills;