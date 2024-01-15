import React, { useCallback, useEffect } from "react";
import "./modal.css";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import blackbg from "../assets/blackbg.jpeg";

function Modal(props) {

  const handleBg=useCallback((e)=>{
        switch(e.target.id){
            case "radio1":
                props.setBgImg("bg1")
                break;
            case "radio2":
                props.setBgImg("bg2")
                break;
            case "radio3":
                props.setBgImg("bg3")
                break;
            default:
                props.setBgImg("bg0")
        }
  },[props])

  const handleSounds=useCallback((e)=>{
        switch(e.target.id){  
          case "bgmsounds":
            props.setBgm(!props.bgm)
            break;
          case "bgmVolume":
            props.setBgmvolume(parseFloat(e.target.value))
            break;
          case "clicksounds":
            props.setClickSound(!props.clickSound)
            break;
          default:
            null
        }
  },[props])

  useEffect(()=>{
    setTimeout(()=>{
document.getElementById("modal").classList.add("show")
    },100)
  },[props.modal])

  return (
    <div className="modal_page" onClick={(e)=>{e.target.className=='modal_page' && props.close()}}>
      <div className= "modal" id="modal">
        <div className="modal_head">
          <h1>
            <i className="fa fa-gear"></i> Settings
          </h1>
          <span className="closeBtn" style={{color:'red',fontWeight:'bold'}} onClick={()=>props.close()}>&times;</span>
        </div>
        <div className="modal_content">
          <div>
            <h3>Background Theme</h3>
            <div className="bgBox">
              <div>
                <img src={blackbg} alt="noBg" onClick={()=>props.setBgImg("bg0")} />
                <input type="radio" id="radio0" name="bgTheme" checked={props.bgImg=='bg0' ? true : false} onChange={handleBg} />
                <label htmlFor="radio0"></label>
              </div>
              <div>
                <img src={bg1} alt="bg1" onClick={()=>props.setBgImg("bg1")}  />
                <input type="radio" id="radio1" name="bgTheme" checked={props.bgImg=='bg1' ? true : false} onChange={handleBg}  />
                <label htmlFor="radio1"></label>
              </div>
              <div>
                <img src={bg2} alt="bg2" onClick={()=>props.setBgImg("bg2")}  />
                <input type="radio" id="radio2" name="bgTheme" checked={props.bgImg=='bg2' ? true : false}  onChange={handleBg}  />
                <label htmlFor="radio2"></label>
              </div>
              <div>
                <img src={bg3} alt="bg3" onClick={()=>props.setBgImg("bg3")}  />
                <input type="radio" id="radio3" name="bgTheme" checked={props.bgImg=='bg3' ? true : false} onChange={handleBg}  />
                <label htmlFor="radio3"></label>
              </div>
            </div>
          </div>
          <div>
            <h3>Sound Effects</h3>
            <div className="soundBox">
              <div>
                <p>Click Sound</p>
                <input type="checkbox" id="clicksounds" checked={props.clickSound}  onChange={handleSounds}/>
                <label htmlFor="clicksounds"></label>
              </div>
              <div>
                <p>BG Music</p>
                <input type="checkbox" id="bgmsounds" checked={props.bgm} onChange={handleSounds}/>
                <label htmlFor="bgmsounds"></label>
              </div>
              <div>
                <p>BG Vollume</p>
                <input type="range" min={0} max={1} step={0.1} id="bgmVolume" value={parseFloat(props.bgmvolume)} onChange={handleSounds}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
