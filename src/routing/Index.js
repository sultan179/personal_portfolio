import Navbar from "../components/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Work from "../components/Work";
import Contact from "../components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Index() {
  return (
    // <BrowserRouter basename="/personal_portfolio">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />}></Route>

        <Route path="/about" exact element={<About />}></Route>
        <Route path="/work" exact element={<Work />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
