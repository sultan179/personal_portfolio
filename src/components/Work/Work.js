// import React from 'react'
import React, { useState, useEffect } from "react";
import "../style.css";
import project1 from "../images/project1.jpg";
import project0 from "../images/project0.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import snake from "../images/snake.png";
import pygame from "../images/pygame.jpg";
import tictactoe from "../images/tictactoe.png";
import pic1 from "./Scholarship/admin-login.png";
import pic2 from "./Scholarship/new_Scholarship.png";
import pic3 from "./Scholarship/application-dashboard.png";
import pic4 from "./Scholarship/app-received.png";
import pic5 from "./Scholarship/decision.png";
import pic6 from "./Scholarship/stat.png";
import pic7 from "./Scholarship/student-login.png";
import pic8 from "./Scholarship/home.png";
import pic9 from "./Scholarship/app-sent.png";
import img1 from "./Schoolify/img1.png"
import img2 from "./Schoolify/img2.png";
import img3 from "./Schoolify/img3.png";

import img4 from "./Schoolify/img4.png";
import img5 from "./Schoolify/img5.png";
import img6 from "./Schoolify/img6.png";
import img7 from "./Schoolify/img7.png";
import img8 from "./Schoolify/img8.png";
import img9 from "./Schoolify/img9.png";
import img10 from "./Schoolify/img10.png";
import img11 from "./Schoolify/img11.png";
import img12 from "./Schoolify/img12.png";
import img13 from "./Schoolify/img13.png";
import img14 from "./Schoolify/img14.png";
import img15 from "./Schoolify/img15.png";
import img16 from "./Schoolify/img16.png";
import img17 from "./Schoolify/img17.png";

import image1 from "./taxi-trip/pic1.png";
import image2 from "./taxi-trip/pic2.png";
import image3 from "./taxi-trip/pic3.png";
import Report1 from "../pdf/Scholarship-details.pdf"
import Report2 from "../pdf/Schoolify-Report.pdf";
import Report3 from "../pdf/Taxi-Trip.pdf";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";



// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Work() {
  useEffect(() => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    var img = document.querySelectorAll(".child-img");

    for (var i = 0; i < img.length; i++) {
      img[i].onclick = function () {
        
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
      };
    }

    modal.onclick = function () {
      modalImg.className += " out";
      setTimeout(function () {
        modal.style.display = "none";
        modalImg.className = "modal-content";
      }, 400);
    };


  });

  function scrolll() {
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-350, 0);
  }

  function scrollr() {
    var right = document.querySelector(".scroll-images");
    right.scrollBy(350, 0);
  }
   function scrolll_2() {
     var left = document.querySelector(".scroll-images-2");
     left.scrollBy(-350, 0);
   }

   function scrollr_2() {
     var right = document.querySelector(".scroll-images-2");
     right.scrollBy(350, 0);
   }
    function scrolll_3() {
      var left = document.querySelector(".scroll-images-3");
      left.scrollBy(-350, 0);
    }

    function scrollr_3() {
      var right = document.querySelector(".scroll-images-3");
      right.scrollBy(350, 0);
    }


  return (
    <div>
      <div className="container">
        <div className="className">
          <div className="project1">
            <div className="main-scroll-div">
              <div>
                <button className="icon" onClick={scrolll}>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
              </div>
              <div className="cover">
                <div className="scroll-images">
                  <div className="child">
                    <img className="child-img" src={pic1} alt="image" />
                  </div>

                  <div className="child">
                    <img className="child-img" src={pic2} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={pic3} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={pic4} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={pic5} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={pic6} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={pic7} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={pic8} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={pic9} alt="image" />
                  </div>
                </div>
                <div id="myModal" className="modal">
                  <img className="modal-content" id="img01" />
                  <div id="caption"></div>
                </div>
              </div>
              <div>
                <button className="icon" onClick={scrollr}>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
              </div>
            </div>

            <div className="text-container">
              <h2>Scholarship Management Website</h2>
              <p>
                Designed a dynamic and interactive web-based scholarship
                management system using HTML, CSS, PHP, and javascript as
                programming tools to assist with the scholarship awarding
                process for both admin and students. It's built for students to
                apply for scholarships. Students can apply for available
                scholarships, see the different kinds of scholarships, view
                deadlines, award values, etc. Admin can create new scholarships,
                review scholarships of students, view student profiles, and
                uploaded supporting documents. Admin can accept/decline
                scholarship, edit scholarship details, and keep track of the
                overall scholarship budget
              </p>

              <table className="skill-table">
                <tr>
                  <td>JAVASCRIPT</td>
                  <td>HTML</td>
                  <td>CSS</td>

                  <td>PHP</td>
                  <td>JQUERY</td>
                </tr>
              </table>
            </div>

            <a href={Report1} target="_blank">
              See Report
            </a>

            <a
              href="https://github.com/sultan179/Scholarship_management_website"
              target="_blank"
            >
              Source code
            </a>
          </div>

          <div className="project2">
            <div className="main-scroll-div">
              <div>
                <button className="icon" onClick={scrolll_2}>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
              </div>
              <div className="cover">
                <div className="scroll-images-2">
                  <div className="scroll"></div>
                  <div className="child">
                    <img className="child-img" src={img1} alt="image" />
                  </div>

                  <div className="child">
                    <img className="child-img" src={img2} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img3} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img4} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img5} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img6} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img7} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img8} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img9} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img10} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img11} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img12} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img13} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img14} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img15} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img16} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={img17} alt="image" />
                  </div>
                </div>
                <div id="myModal" className="modal">
                  <img className="modal-content" id="img01" />
                  <div id="caption"></div>
                </div>
              </div>
              <div>
                <button className="icon" onClick={scrollr_2}>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
              </div>
            </div>

            <div className="text-container">
              <h2>Ecommerce website</h2>

              <p>
                This system, which is a website, is an human-interaction type
                system that allows for an efficient way of buying and selling
                products among members (ie:people who have accounts on this
                website). These members (ie: account users) of this system may
                either be classified as buyers or sellers. Buyer members are
                members who have the intention to buy products offered by
                sellers. A member that provides only their billing address
                during the registration process falls in the class of buyer
                members. Seller members on the other hand are members who have
                the intention to sell products. A member that provides a bank
                account number only falls in the class of seller members. If in
                any case, both are provided, the member can then be classified
                as both a buyer and a seller. Now, these members and the
                products are managed by our administrator users. When a product
                is added by a seller member, the administrator has to approve
                that product (and/or make any other necessary adjustments) based
                on the information the seller member has provided. Adjustments
                an administrator may make can be anything from changing the
                category the product falls under to changing the actual products
                name if necessary. This is the general structure of our system:
                an ongoing process of managing product and member flow as
                products are being sold and offered.
              </p>

              <table className="skill-table">
                <tr>
                  <td>JAVASCRIPT</td>
                  <td>HTML</td>
                  <td>CSS</td>

                  <td>PHP</td>
                  <td>JQUERY</td>
                </tr>
              </table>
            </div>
            <a href={Report2} target="_blank">
              See Report
            </a>

            <a
              href={"https://github.com/sultan179/ecommerce-website"}
              target="_blank"
            >
              Source code
            </a>
          </div>

          <div className="project2">
            <div className="main-scroll-div">
              <div>
                <button className="icon" onClick={scrolll_3}>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
              </div>
              <div className="cover">
                <div className="scroll-images-3">
                  <div className="child">
                    <img className="child-img" src={image1} alt="image" />
                  </div>

                  <div className="child">
                    <img className="child-img" src={image2} alt="image" />
                  </div>
                  <div className="child">
                    <img className="child-img" src={image3} alt="image" />
                  </div>
                </div>
                <div id="myModal" className="modal">
                  <img className="modal-content" id="img01" />
                  <div id="caption"></div>
                </div>
              </div>
              <div>
                <button className="icon" onClick={scrollr_3}>
                  {" "}
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
              </div>
            </div>

            <div className="text-container">
              <h2>Taxi-Trip prediction</h2>
              <p>
                The idea behind this project is to analyze previous trends and
                data of taxi trip times in New York City, and propose a solution
                for predicting ride durations that builds upon previous
                solutions. Since most ride-sharing and transportation
                information is logged, historical trends can be mapped and
                analyzed. We propose a project in which its primary goal is to
                predict NYC taxi trip times based on historical data and trends
                which is provided via Kaggle. Our goal for approaching this
                problem is to traverse the provided data, and use mapreduce
                algorithms to apply machine learning techniques on historical
                data trends to then use to estimate how long individual trips
                may take. To take into account more factors that could affect
                trip times, we have fetched weather data from the same period as
                the data provided by Kaggle. This data will allow us to take
                into account the weather of that day, and we can determine how
                much of an impact these conditions have on trip time.
              </p>

              <table className="skill-table">
                <tr>
                  <td>Python</td>
                  <td>Pyspark</td>
                  <td>numpy</td>

                  <td>Machine learning</td>
                </tr>
              </table>
            </div>
            <a href={Report3} target="_blank">
              See Report
            </a>

            <a href={Report1} target="_blank">
              Source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
