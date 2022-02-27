import React, { useEffect } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Slide(props) {
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
    var left = document.querySelector("#scroll-images" + "-" + props.info.slide_no);
    left.scrollBy(-350, 0);
  }

  function scrollr() {
    var right = document.querySelector("#scroll-images" + "-" + props.info.slide_no);
    right.scrollBy(350, 0);
  }

  return (
    <div className="project1">
      <div className="main-scroll-div">
        <div>
          <button className="icon" onClick={scrolll}>
            {" "}
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
        </div>
        <div className="cover">
          <div className="scroll-images" id={"scroll-images"  + "-" + props.info.slide_no}>
            {props.info.imgs.map((img, i) => {
              return (
                <div className="child" key={i}>
                  <img className="child-img" src={img} alt="image" />
                </div>
              );
            })}
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
        <h2>{props.info.heading}</h2>
        <p>{props.info.text}</p>

        <table className="skill-table">
          <tbody>
            <tr>
              {props.info.stacks.map((stack, i) => {
                return <td key={i}>{stack}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {props.info.report != null && (
        <a href={props.info.report} target="_blank">
          See Report
        </a>
      )}

      <a href={props.info.code_url} target="_blank">
        Source code
      </a>
    </div>
  );
}

export default Slide;
