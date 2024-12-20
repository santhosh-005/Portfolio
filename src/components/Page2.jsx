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
      <div className="icons" data-aos="fade-down">
          <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/><img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/><img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/><img width="48" height="48" src="https://img.icons8.com/officel/80/react.png" alt="react"/><img width="48" height="48" src="https://img.icons8.com/plasticine/100/tailwind_css.png" alt="tailwind_css"/><img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2"/><img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/><img width="48" height="48" src="https://img.icons8.com/nolan/64/mongo-db.png" alt="mongo-db"/><img width="48" height="48" src="https://img.icons8.com/fluency/48/python.png" alt="python"/><img width="48" height="48" src="https://img.icons8.com/fluency/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/><img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>
      </div>
    </div>

    <div>
      <h1 style={{ textAlign: "center" }}>Popular Repos...</h1>
      <div className="popular-repos" data-aos="fade-in">
        {repos.map((repo, index) => {
          return (
            <div className="repo" key={index}>
              <img src={github} alt="" />
              <div>
                <a href={repo.url} target="_blank">
                  <h2>{repo.name}</h2>
                </a>
                <p>Type: {repo.Type}</p>
                <p style={{ color: "#ffffffad", fontSize:'smaller' }}>{repo.language}</p>
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
