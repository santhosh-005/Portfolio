import React from "react";
import "../App.css";

function About() {
  return (
    <div id="about">
      <div>
        <div>
          <a href="#page1">home</a>
          <a href="#page3">Projects</a>
          <a href="#page2">Let's discuss</a>
        </div>

        <div>
            <div>
            <a href="https://wa.me/8668023574"  target='_blank'><i className="fa fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/ultracoder_005?igsh=ODA1NTc5OTg5Nw==" target="_blank"><i className="fa fa-instagram"></i></a>
            <a href=""><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/santhosh-005" target='_blank'><i className="fa fa-github"></i></a>
            </div>
            <p>santhoshdon000555@gmail.com</p>
        </div>
      </div>
      <p>
        <span>&#9400;</span> 2024 Santhoshkumar
      </p>
    </div>
  );
}

export default About;
