import react, { use, useState } from "react";
import emailjs from "emailjs-com";

function Contact(){

  let [gdata,setdata]=useState({

    name:"",
    email:"",
    message:"",
  })

  let handlechange=(event)=>{
  
         const {name,value}=event.target;
         setdata({...gdata,[name]:value});
  }

  let handlesubmit=(e)=>{
      e.preventDefault();

      emailjs
      .send(
        "service_0mo48qw", 
        "template_cqqcwri", 
        gdata,
        "vRtTzOu7zBvajP6zU"  
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setdata({ name: "", email: "", message: "" }); 
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Error:", error);
        }
      );


  }




    
  return(  <div className="emialcon" >
        <form className="emialcont" onSubmit={handlesubmit} >
            <h2 style={{margin:"30px 0px",color: "#a0d2eb", fontWeight:"200",fontFamily:"sans-serif"}}>contact Me</h2>
            <div className="emname">
            <h3 >Username</h3>
             <input type="text-box" name="name" value={gdata.name} placeholder="name" onChange={handlechange} required />
            </div> <br/>
            <div className="ememail">
            <h3>Email</h3>
            <input style={{}} type="email" name="email" value={gdata.email} placeholder="email" onChange={handlechange}  required />
            </div> <br/>
            <div className="message">
            <h3>Message</h3>
            <textarea type="text" name="message" value={gdata.message} placeholder="message"  onChange={handlechange}  required />
            </div> <br/>
            <button type="submit">Send</button>
        </form>
    </div>)

}


export default Contact;