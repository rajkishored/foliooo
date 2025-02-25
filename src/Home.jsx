import React, { useEffect, useState } from "react";
import Skills from "./Skilles";
import Projects from "./Projects";

import { Projec,education } from "./Data/projec";
import { FaHtml5 } from "react-icons/fa";

import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";


import { FaGithub } from "react-icons/fa6";
import Educ from "./Education";
import Footer from "./Footer";
import Contact from "./Contcat";





function Home(){

    let [ncolor,setncolor]=useState(true)

    useEffect(()=>{

        const interval=setInterval(()=>{
            setncolor((x)=>!x)
        },1000)
        return ()=>clearInterval(interval)
    },[]);


return( <div className="hmcontainer">
     <div className="rain-container">
        <div className="raindrop" style={{ animationDuration: '2s', left: '5%', animationDelay: '0s' ,color:"#8e69b7"}}>< FaHtml5 /></div>
        <div className="raindrop" style={{ animationDuration: '3s', left: '20%', animationDelay: '1s',color:"#8e69b7" }}><IoLogoCss3/></div>
        <div className="raindrop" style={{ animationDuration: '4s', left: '30%', animationDelay: '2s',color:"#8e69b7"}}><TbBrandJavascript/></div>
        <div className="raindrop" style={{ animationDuration: '2.5s', left: '40%', animationDelay: '3s',color:"#8e69b7" }}>< FaReact/></div>
        <div className="raindrop" style={{ animationDuration: '3.5s', left: '50%', animationDelay: '4s',color:"#8e69b7" }}><FaNodeJs /></div>
        <div className="raindrop" style={{ animationDuration: '2s', left: '60%', animationDelay: '0s',color:"#8e69b7" }}>< SiExpress /></div>
        <div className="raindrop" style={{ animationDuration: '3s', left: '70%', animationDelay: '1s',color:"#8e69b7" }}><BiLogoPostgresql/></div>
        <div className="raindrop" style={{ animationDuration: '4s', left: '80%', animationDelay: '2s' ,color:"#8e69b7"}}><FaGithub/></div>
        <div className="raindrop" style={{ animationDuration: '2.5s', left: '90%', animationDelay: '3s',color:"#8e69b7" }}>< SiMysql/></div>
        <div className="raindrop" style={{ animationDuration: '3.5s', left: '95%', animationDelay: '4s',color:"#8e69b7" }}><FaPython/></div>
      </div>
<div className="det-img">
      
      <div className="det">
        <h2>Hi There 👋 </h2>
        <h1>I'M  <span style={{visibility:ncolor?"visible":"hidden"}}>RAJKISHORE D</span></h1>
        <br />
         <h3>Software Developer!</h3>
      </div>

      <div className="img">
        <img src="cart.png" alt="" />
      </div> 
  </div>
    <hr style={{border:"1px solid rgb(60, 63, 75)" , marginTop:" 90px"}}></hr> 
   <div className="skill">

   <h1 className="h11">SKILLS</h1>
   <p >"Always eager to learn and grow, embracing new challenges with every project"</p>
  <Skills/>

   </div>
   <hr style={{border:"1px solid rgb(60, 63, 75)" , marginTop:" 90px"}}></hr> 

   <div className="projects">

   <h1 style={{color:"#8e69b7",textAlign:"center",marginBottom:"20px",marginTop:"40px"}}>Projects</h1>
   <p >"From concept to completion, I approach each project with creativity and precision, ensuring the final result exceeds expectations."</p>
   <div className="proitem">
     


    {Projec.map((v,i)=>{
         return <Projects  cont={v} key={i}/>
    })}   
  


      </div>
  </div>

  <hr style={{border:"1px solid rgb(60, 63, 75)" , marginTop:" 0px"}}></hr> 
<div className="educ">
    <h1 style={{ color:"#8e69b7",textAlign:"center",marginBottom:"0px",marginTop:"20px"}}>Education</h1>
    <p className=" educc">"Committed to continuous learning, I seek to expand my knowledge through both formal education and independent study."</p>
    {education.map((v,i)=>{

        return  <Educ dett={v} key={i}/>
    })}

   

</div>
<hr style={{border:"1px solid rgb(60, 63, 75)" , marginTop:" 90px"}}></hr>
<Contact/>

{/* <hr style={{border:"1px solid rgb(63, 67, 81)" , margin:" 20px 0px"}}></hr> */}

<Footer/>



    </div>
)

}

export default Home;