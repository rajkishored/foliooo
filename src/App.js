
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { SiGooglesheets } from "react-icons/si";
// import Works from './Works';
// import Home from './Home';
import React,{Suspense} from 'react';

const  Works=React.lazy(()=>import('./Works'))
const Home=React.lazy(()=>import('./Home'))

function App() {

  let ress=()=>{

    window.open("https://drive.google.com/file/d/1FA2wkLrT_xDPgUfzZiVvRopHlOQh6mVP/view?usp=sharing","_blank")
  };
  return (
    <div className="App">
      <Router>
        <nav >
          
            <ul>
              <li> <Link className="ll" to="/"><FaHome/>  HOME  </Link> </li>
              <li> <Link className="ll" to="/works"><GrWorkshop/> WORKS  </Link> </li>
              <li className="ll" onClick={ress}>  <SiGooglesheets/> RESUME  </li>
               
            </ul>


        </nav>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/works" element={<Works />} />
        
        </Routes>
        </Suspense>


      </Router>

      


      
    </div>
  );
}

export default App;
