import React, { useState } from "react";
import "../App.css";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import kalvium from "../assets/kalvium-logo.png";
import selfImage from "../assets/selfImage.png";
import selfImage2 from "../assets/selfImage2.png";
import devText from "../assets/dev-text.png"
import Navbar from "./Navbar";

function Page1({ bgImg, setModal }) {
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
      <Navbar setModal={setModal} />
      <div className="main-content">
        <div>
          <p>Hey there! This is</p>
          <h1>Santhosh</h1>
          <img className="dev-role" src={devText} alt="Full Stack Developer" />
          {/* <h3> { "FULLSTACK DEVELOPER" }</h3> */}
          <p style={{ margin: ".8rem 0" }}>
            Computer Science student at
            <span>
              <a href="https://kalvium.com/" target="_blank">
                <img
                  style={{ height: "1.2rem", margin: "0 .4rem " }}
                  src={kalvium}
                  alt="kalvium logo"
                />
              </a>
            </span>
            with passion of technology
          </p>
          <a className="media-links"  href="https://www.linkedin.com/in/santhosh-kumar-81744b2aa" target="_blank">
            <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="20" alt="linkedin logo"  />
          </a>
          <a className="media-links"   href="https://github.com/santhosh-005" target="_blank">
            <img src="https://img.shields.io/static/v1?message=Github&logo=github&label=&color=6e5494&logoColor=white&labelColor=&style=for-the-badge" height="20" alt="Github logo" />
          </a>
          <a className="media-links"  href="https://www.instagram.com/ultracoder_005?igsh=ODA1NTc5OTg5Nw==" target="_blank">
            <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="20" alt="instagram logo"  />
          </a>
          <a className="media-links"   href="https://wa.me/8668023574" target="_blank">
            <img src="https://img.shields.io/static/v1?message=Whatsapp&logo=whatsapp&label=&color=075E54&logoColor=white&labelColor=&style=for-the-badge" height="20" alt="Whatsapp logo" />
          </a>
        </div>
        {/* self image */}
        <img src={selfImage} id="selfImage" height="500px" alt="" />
      </div>
    </div>
  );
}

export default React.memo(Page1);
