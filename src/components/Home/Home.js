import React from 'react'
import "../style.css"
import profile from "../../assets/imgs/img1.jpg"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="info-container">
          <div className="top-info">
            <div>
              <h2>Hi! I am</h2>
              <h1>Sultan Arafat.</h1>

              <p>
                I am working towards a degree in computer science and am really
                excited to tell you about myself. I have experience working with different programming languages and was able to work closely with other developers to build real life projects 
            . I also have a lot of experience with online
                code repositories, and I love to contribute as much as I can...
              </p>
            </div>
            <div>
              <p style={{ marginTop: "3rem" }}>
                Below are the languages I have already worked with..
              </p>

              <table className="skill-table">
                <tr>
                  <td>Java</td>
                  <td>Python</td>
                  <td>C++</td>
                </tr>
                <tr>
                  <td>Javascript</td>
                  <td>ReactJs</td>
                  <td>Haskell</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="middle-info">
            <img src={profile} alt="img" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="button-links">
          <a href="https://github.com/sultan179?tab=repositories">
            <FaGithub style={{ marginRight: "8px" }} />
            Github
          </a>
          <a href="https://www.linkedin.com/in/sultanarafat/">
            <FaLinkedin style={{ marginRight: "8px" }} />
            LinkedIn
          </a>
          <a href="https://www.instagram.com/arafat_ig/">
            <FaInstagram style={{ marginRight: "8px" }} />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home