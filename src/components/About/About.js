import React from 'react'
import "../style.css";
import profile2 from "../images/img2.jpg";

function About() {
  return (
    <div>
      <div className="about-container">
        <div class="profile-pic">
          <img src={profile2} alt="img2" />
        </div>
        <div class="description">
          <h1>About me</h1>

          <p>
            I am a 4th year computer science student at the University of Calgary.
            I was inspired to work towards computer science by looking at the
            rapid growth my country Bangladesh went through with the broad use
            of computers and other technologies. The rapid economic growth since
            the past decade was only possible by integrating technology in every
            sector and making it easier for people to have access to
            technologies like the internet. For this reason, I realized that
            computer science is more than just solving problems and releasing
            software. We can use computers to solve real-life problems and make
            exciting products which can help a large number of people to make
            their life easier and convenient.
          </p>

          <p>
            Finally, I see a huge demand for motivated computer scientists in
            the future as our technology will keep evolving. With the increased
            use of AI and robotics, new technological changes will occur. It’s
            true that many jobs will get replaced by robots and AI but this
            cannot be said for people who design and program these robots. This
            too motivated me to choose computer science as there is a
            sustainable and secure side of the job
          </p>
          <h2 style={{marginTop:"2rem"}}>Contact me</h2>
          <div class="Contact-container">
            <div class="phone">
              <h3>Give me a call</h3>
              <h4>+1-587-966-3292</h4>
            </div>
            <div class="email">
              <h3>Email me at</h3>
              <h4>Sultanarafat10@gmail.com</h4>
            </div>
            <div class="address">
              <h4>Address: 632 John Doe Crescent,NW</h4>
              <h4>Province: Alberta</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About