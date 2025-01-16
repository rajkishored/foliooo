import React from "react";
import { DiVim } from "react-icons/di";
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





function Skills(){

return(
 <div>
    <h1 className="h11">SKILLS</h1>
    <div className="fullst">
        <div className="front">
            <h2>Frontend</h2>
            <div className="fst"> <label htmlFor=""><TbBrandJavascript/> JavaScript</label>
            <label htmlFor=""> <FaHtml5/>  Html</label></div>
            <div className="sec">       <label htmlFor=""><IoLogoCss3/> Css</label>
            <label htmlFor=""><FaReact/> React</label></div>
           <div className="thi">  <label htmlFor=""><FaBootstrap/> Bootstrap</label> </div>
          
           
        </div>
        
        <div className="back">
        <h2>Backend</h2>
        <div className="fst"><label htmlFor=""><FaNodeJs/> Node.js</label></div>
        <div className="sec">  <label htmlFor=""><SiExpress/> Express.js</label>
        <label htmlFor=""><BiLogoPostgresql/> Postgres</label></div>
        <div className="thi"> <label htmlFor=""><SiMysql/> MySql</label></div>
      
      
        

          
        </div>
    </div>

  <div className="skil-lan">
     <div className="lang">
     <h2>Languages</h2>

     <div className="fst"><label htmlFor=""><FaPython/> Python</label></div>
     <div className="sec">
       <label htmlFor=""><TbBrandCpp/> C++</label>
       <label htmlFor=""><FaJava/> Java</label></div>
     <div className="thi"></div>



  
           
      </div>
    <div className="other">
    <h2>Others</h2>
    <div className="fst"><label htmlFor=""><FaGithub/> Github</label></div>
     <div className="sec">
     <label htmlFor=""><PiTreeStructureFill/>   Datastructures</label></div>
     <div className="thi"></div>
    
    </div>
</div>
</div>)

}
export default Skills;