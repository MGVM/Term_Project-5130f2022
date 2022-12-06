import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar"
import Slider from './Components/Slider/Slider';
import GTA from './pages/GTA';
import COD from './pages/COD';
import Fortnite from './pages/Fortnite';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Slider/>}>
        </Route>
        <Route path="/gta" element={<GTA/>} exact></Route>
        <Route path="/cod" element={<COD/>} exact></Route>
        <Route path="/fortnite" element={<Fortnite/>} exact></Route>
      </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
