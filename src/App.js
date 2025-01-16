import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { SiGooglesheets } from "react-icons/si";
import Works from './Works';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          
            <ul>
              <li> <Link className="ll" to="/"><FaHome/>  HOME  </Link> </li>
              <li> <Link className="ll" to="/works"><GrWorkshop/> WORKS  </Link> </li>
              <li>  <a href='https://fkhadra.github.io/react-toastify/introduction/'><SiGooglesheets/> RESUME</a> </li>
               
            </ul>
            

        </nav>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/works" element={<Works />} />
        
        </Routes>


      </Router>

      


      
    </div>
  );
}

export default App;
