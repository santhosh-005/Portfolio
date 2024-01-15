import React from 'react';
import '../App.css';
import repos from './repo-info';
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import github from "../assets/github.png";


function Page2() {

  return (
    <div id="page2">
    <div>
      <h1 style={{ textAlign: "center" }}>Tech I used to build...</h1>
      <div className="icons">
        <img src={html} alt="html" loading="lazy" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={react} alt="react" />
        <img src={python} alt="python" />
      </div>
    </div>

    <div>
      <h1 style={{ textAlign: "center" }}>Popular Repos...</h1>
      <div className="popular-repos">
        {repos.map((repo, index) => {
          return (
            <div className="repo" key={index}>
              <img src={github} alt="" />
              <div>
                <a href={repo.url} target="_blank">
                  <h3>{repo.name}</h3>
                </a>
                <h4>Type: {repo.Type}</h4>
                <p style={{ color: "#ffffffad" }}>{repo.language}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default React.memo(Page2)
