import React from 'react'
import "./style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <label className="name">
          <Link style={{ color: "#ffa800" }} to="/">
            Arafat
          </Link>
        </label>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>

          <li>
            <a href="/pdfs/Resume.pdf">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar