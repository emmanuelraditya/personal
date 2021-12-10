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
            <div className="careerSummary">Career Summary</div>
            <div className="job1">
              <p>PT. Infomedia Solusi Humanika</p>
              <p>Customer Solution</p>
              <p>April - September 2021</p>
            </div>
            <div className="job2">
              <p>PT. Federal International Finance (FIF)</p>
              <p>Senior Collateral & Insurance Administrator</p>
              <p>May 2016 - April 2021</p>
            </div>
          </div>
          <div className="descJob">
            <p id="desc1">
              Support solution to sales team in approaching clients like
              marketing media kit, revenue validation, creating policy
            </p>
            <p id="desc2">
              Responsible to provide risk analyisis to prevent any risk that
              harmfulfor company, suggest business strategy improvementto
              improve revenue stream, especially from insurance section
            </p>
          </div>
        </div>
        <div className="education">
          <div className="eduTitle">Education</div>
          <div>
            <p id="title">Glints Academy</p>
            <p>Front End Developer (batch 14)</p>
            <p>August - November 2021</p>
          </div>
          <div>
            <p id="title">Prasetiya Mulya University</p>
            <p>Business Management (GPA: 3.26)</p>
            <p>2018 - 2020</p>
          </div>
          <div>
            <p id="title">Telkom University</p>
            <p>Industrial Engineering (GPA: 3.07)</p>
            <p>2011-2015</p>
          </div>
        </div>
        <div className="skill">
          <div id="skillTitle">Skill</div>
          <div>
            <ul>
              <li>Design skill with Figma, grasp product vision</li>
              <li>
                Design and create functions forthewebwithHTML,CSS, and
                javascript
              </li>
              <li>
                Experience in using the library (MaterialUI, ANTD), bootstrap
                (react-bootstrap),fetch APIto createweb
              </li>
              <li>Good analyticalthinking, and teamwork</li>
              <li>
                Language (English: Intermediate,Bahasa Indonesia:Native speaker)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <div className="portofolio">halo</div>
    </>
  );
}

export default Body;
