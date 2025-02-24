import react from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Contact from "./Contcat";

function Footer()
{

  return(<div className="foot">

   <div className="fcont">
    <h3 style={{marginLeft:"10px" }}>Contact</h3>
    <p><span><FaPhoneAlt/></span> +918095651601</p>
    <p><span><BiLogoGmail/></span> rajkishored2001@gmail.com</p>
    <p><span><FaLocationDot/></span>Kollegal</p>
    
     {/* <div className="contdiv">
 
     </div> */}

   </div>
   <div className="fsocial">
    <h3 > Social</h3>
    <div  className="fsh4">
    <h4 ><span><a href="https://www.linkedin.com/in/rajkishoredjr/"><FaLinkedin/></a></span><span><a href="https://github.com/rajkishored?tab=overview&from=2025-01-01&to=2025-01-17"><FaGithub/></a></span><span><a href="https://www.instagram.com/"><FaInstagramSquare/></a></span></h4>
    </div>
    
     
   
   </div>

   <div className="fh4">   <h4 >rajkishore@2024</h4>  </div>




  </div>)

}
export default Footer;