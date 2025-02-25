
import { FaAngleDoubleUp } from "react-icons/fa";



function Scroll(){

    let scroll=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

    return(
        <div className="scroll">
            <button onClick={()=>scroll()}><FaAngleDoubleUp/></button>
        </div>
    )
}

export default Scroll;