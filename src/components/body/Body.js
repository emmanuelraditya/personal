import React from "react";
import "./Body.css";
import logo from "./Logo.png";
import foto from "./Radit.jpg";

function Body() {
  return (
    <>
      <div className="body">
        <div className="intro">
          <p>Hello</p>
          <p id="name">I'm Emmanuel Raditya</p>
          <p id="detailInfo">
            Specialized in developing responsive, interactive, and user-friendly
            web applications and experienced in providing business analyst for
            the leasing industry with more than 4 years experience.
          </p>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="aboutMe">
        <h3>About Me</h3>
        <div className="foto">
          <img src={foto} alt="foto" />
        </div>
        <div className="career">
          <div className="job">
            <div className="job1">
              <p>PT. Infomedia Solusi Humanika</p>
              <p>Customer Solution</p>
              <p>April - September 2021</p>
            </div>
            <div className="job2">
              <p>PT. Infomedia Solusi Humanika</p>
              <p>Customer Solution</p>
              <p>April - September 2021</p>
            </div>
          </div>
          <div className="descJob">
            <p id="desc1">
              Support solution to sales team in approaching clients like
              marketing media kit, revenue validation, creating policy
            </p>
            <p id="desc1">
              Support solution to sales team in approaching clients like
              marketing media kit, revenue validation, creating policy
            </p>
            
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Body;
