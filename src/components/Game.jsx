import React, { useState, useRef, useEffect } from "react";
import gameChar from "../assets/game_char.png";
import triggerBtn from "../assets/triggerBtn.png";
import gameLogo from "../assets/gameLogo.png";
import playAgainBtn from "../assets/playAgainBtn.png";
import "../App.css";

function Game() {
  const [botX, setBotX] = useState(0);
  const [boyX, setBoyX] = useState(0);
  const [playModal,setPlayModal]= useState(true)
  const [playAgainModal,setPlayAgainModal]= useState(false)
  const [time,setTime]= useState(0)
  const [win,setWin]= useState("")
  const [botSpeed,setBotSpeed]=useState(2)
  const [defaultX,setdefaultX]=useState(0)
  const [defaultY,setdefaultY]=useState(0)

  const useref = useRef(null);

  const gameCharStyles = {
    marginTop:'6rem',
    transform: `translateX(${boyX}px)`,
    marginLeft: `-${botX}px`,
  };

  useEffect(()=>{
    const element = useref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setdefaultX(rect.x)
      setdefaultY(rect.y) 
      // console.log(rect.y)
      }
  },[botX===0])

  

  useEffect(()=>{
    const element = useref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      
      // console.log(rect.y)
      if(window.innerWidth<=400){
        if (rect.y===defaultY+50){
          setWin("Congratulations, You Won")
        }else if(rect.y===defaultY-50){
          setWin("Computer Won")
        }
      }else{
        if (rect.x===defaultX+100){
          setWin("Congratulations, You Won")
        }else if(rect.x===defaultX-100){
          setWin("Computer Won")
        }
      }
      
    }
  },[botX,boyX])


  useEffect(() => {
    let intervalId1,intervalId2;
    if (!playModal) {
      intervalId1 = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
  
      intervalId2=setInterval(()=>{setBotX((prev) => prev + 20)},1000/botSpeed)

      if (time === 8) {
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        setWin("Draw")
        setPlayAgainModal(true)
      }

      if(win){
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        setPlayAgainModal(true)
      }
  }
    return () => {clearInterval(intervalId1),clearInterval(intervalId2)}
  }, [playModal,time])


  const handlePlay=()=>{  
    setBotX(0)
    setBoyX(0)
    setTime(0)
    setWin("")
    setPlayModal(false)
    setPlayAgainModal(false)
  }

if(!playModal && !playAgainModal){
  window.onkeyup=(e)=>{
    if(e.key=="Enter"){
      setBoyX((prev) => prev + 20)
    }
  }
}



  return (
    <div id="gamePage">
      <div className="gameBoard">
        
        {playModal && (
        <div className="gameStartModal">
          <img  src={gameLogo} alt="" />
          <button onClick={handlePlay}>Play now</button>
          <h4>Bot Trigger Speed <span><select value={botSpeed} onChange={(e)=>setBotSpeed(e.target.value)}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="12">12</option>
            </select></span>  per Second</h4>
            <p>I challenge you can't win at max speed</p>
        </div>
        )}

        { playAgainModal && (
          <div className="gameEndModal">
              <h1 style={{color:'black'}}>{win}</h1>
              <img src={playAgainBtn} height='80px' alt="playAgainBtn" onClick={()=>{
                setPlayAgainModal(false),setPlayModal(true)}} />
                <h5>Bot trigger speed <span style={{color:'red'}}>{botSpeed}</span> p/s</h5>
                <p>If you won at max speed, sent me screenshot and win suprise gift</p>
          </div>
        )}
        <hr />
        <img style={gameCharStyles} ref={useref} src={gameChar} id="gameChar" alt="game char" />
          <div className="timer"><h1 style={{color:'black'}}>{time}</h1></div>
          <img className="triggerBtn" onClick={() => setBoyX((prev) => prev + 20)} src={triggerBtn} alt="triggerBtn" />

          <p>Press Enter to Pull Yourside</p>
        
      </div>
    </div>
  );
}

export default Game;
