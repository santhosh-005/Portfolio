import React from 'react';
import '../App.css'
import github from "../assets/github.png";
import figma from "../assets/figma.png";
import whatsapp from "../assets/whatsapp.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import computer from "../assets/computer.png";

function Page3() {
  return (
    <div id="page3" style={{display:'flex'}}>   
        <div>
          <img className="computer" src={computer} alt="" />
          <p className="quote">" Good code always have its own Documentation! "</p>
        </div>
        <div>
          <div>
            <h1 style={{ textAlign: "center" }}>
              Check out my more Projects and Designs...
            </h1>
            <div className="icons">
              <a href="https://github.com/santhosh-005" target='_blank'><img src={github} alt="github" /></a>
            <a href="https://www.figma.com/file/KdkHG2FXS6q2CO6z5SWAcM/MINICAB?type=design&node-id=0%3A1&mode=design&t=K6BB09JqVmhLXAAc-1" target='_blank'> <img src={figma} alt="figma" /></a> 
            </div>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>
              Lets discuss about Tech and ideas...
            </h1>
            <div className="icons">
              <a href="https://wa.me/8668023574" target='_blank'><img src={whatsapp} alt="whatsapp" /></a>
              <a href="https://www.instagram.com/ultracoder_005?igsh=ODA1NTc5OTg5Nw==" target="_blank"><img src={insta} alt="insta" /></a>
              <a href="https://www.linkedin.com/in/santhosh-kumar-81744b2aa" target='_blank'><img src={linkedin} alt="linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default React.memo(Page3)
