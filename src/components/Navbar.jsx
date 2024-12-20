import React from 'react'

function Navbar({setModal}) {
  return (
        <nav>
            <h1 data-aos="fade-left">
              <a href="#home">
                <i id="gear_icon" className="fa fa-gear" onClick={()=>setModal(true)}></i>
                <span style={{ color: "#f39c12" }}>P</span>ortfolio
              </a>
            </h1>
            {/* {window.innerWidth <= 500 ? (
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
            ) : ( */}
              <div data-aos="fade-right">
                <a id='home_play_btn' href="#gamePage">Play</a>
                <a href="#page2">Projects</a>
                <a href="#about">About</a>
                <a href="#page3" className='chat-btn'>Let's chat</a>
              </div>
            {/* )} */}
        </nav>
  )
}

export default Navbar