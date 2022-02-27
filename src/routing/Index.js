import Navbar from "../components/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Work from "../components/Work";
import Contact from "../components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Index() {
  return (
    <BrowserRouter>
      
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
