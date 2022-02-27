import "../style.css";


import { slide1, slide2, slide3,slide4 } from "../../utils/work";

import Slide from "./Slide";


function Work() {
  return (
    <div>
      <div className="container">
        <div className="className">
          <Slide info={slide1} />
          <Slide info={slide2} />
          <Slide info={slide3} />
          <Slide info={slide4} />
        </div>
      </div>
    </div>
  );
}

export default Work;
