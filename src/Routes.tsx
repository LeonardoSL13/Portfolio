import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";


// import your route components too
export function AppRoutes(){
  return (
 <Router>
    <Routes>
      <Route path="/" element={<Home />}/>      
      <Route path="/skills" element={<Skills />}/>        
      <Route path="/formacao" element={<Home />}/>   
      <Route path="/contato" element={<Home />}/> 
    </Routes>
  </Router>
 
);
}