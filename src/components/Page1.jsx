import React, { useState } from "react";
import "../App.css";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import kalvium from "../assets/kalvium-logo.png";
import selfImage from "../assets/selfImage.png";
import selfImage2 from "../assets/selfImage2.png";

function Page1({ bgImg, setModal }) {
  const [dropDown, setDropDown] = useState(false);

  const page1Styles = {
    backgroundImage:
      bgImg == "bg0"
        ? ""
        : bgImg == "bg1"
        ? `url(${bg1})`
        : bgImg == "bg2"
        ? `url(${bg2})`
        : `url(${bg3})`,
  };

  return (
    <div id="page1" style={page1Styles}>
      <nav>
        <h1>
          <i id="gear_icon" className="fa fa-gear" onClick={setModal}></i>
          <span style={{ color: "#f39c12" }}>P</span>ortfolio
        </h1>
        {window.innerWidth <= 500 ? (
          <div className="dropDownMenu" onClick={(e)=>e.target.className=="dropDownMenu" && setDropDown(false)}>
            <h1 onClick={() => setDropDown(!dropDown)}>&#9776;</h1>
            { dropDown &&   
            <div id="menu">
              <a href="#gamePage">Play</a>
              <a href="#page2">Projects</a>
              <a href="#about">About</a>
              <a href="#page3">Let's chat</a>
            </div>}
          </div>
        ) : (
          <div>
            <a href="#gamePage">Play</a>
            <a href="#page2">Projects</a>
            <a href="#about">About</a>
            <a href="#page3">Let's chat</a>
          </div>
        )}
      </nav>
      <div className="main-content">
        <div>
          <p>Hey there, this is</p>
          <h1>Santhosh</h1>
          <h3>FRONDEND DEVELOPER</h3>
          <p style={{ margin: ".8rem 0" }}>
            Computer Science student at
            <span>
              <a href="https://kalvium.com/" target="_blank">
                <img
                  style={{ height: "1.3rem", margin: "0 .4rem " }}
                  src={kalvium}
                  alt="kalvium logo"
                />
              </a>
            </span>
            with passion of technology
          </p>
        </div>
        {/* self image */}
        <img src={selfImage} id="selfImage" height="500px" alt="" />
      </div>
    </div>
  );
}

export default React.memo(Page1);
