import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import clickSoundEffect from './assets/clicksoundnew.mp3'
import bgMusic from './assets/bgMusic.mp3'
import gameLogo from './assets/gameLogo.png'
import Modal from "./components/Modal"; 
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { Howl } from "howler";
import About from "./components/About";
import 'aos/dist/aos.css'; // AOS Styles
import AOS from 'aos';      // AOS JavaScript

const Game = React.lazy(() => import("./components/Game"));


function App() {
  const [bgImg,setBgImg]=useState('bg0')
  const [modal,setModal]=useState(false)
  const [bgm,setBgm]=useState(false)
  const [seekPosition, setSeekPosition] = useState(1);
  const [bgmvolume, setBgmvolume] = useState(0.4);
  const [clickSound,setClickSound]=useState(false)


  useEffect(()=>{
    AOS.init({
      duration: 800,  
      easing: 'ease-out', 
      once: true, 
    });
  },[])

  useEffect(() => {
  let bgSound= new Howl({
    src: bgMusic,
    loop: true,
    volume:bgmvolume,
  });
    if (bgm) {
      bgSound.seek(seekPosition)
      bgSound.play();
    }
  
    return () => {
      if (bgSound) {
        setSeekPosition(bgSound.seek())
        bgSound.stop();
      }
    };
  }, [bgm,bgmvolume]);
  

useEffect(() => {
  document.body.style.overflow = modal ? 'hidden' : 'auto';
}, [modal]);



const handleClick=()=>{
  if (clickSound){
    const clickSounds=new Howl({
      src:clickSoundEffect,
      volume:0.4,
      buffer:true,
      html5:true,
    })
    clickSounds.seek(0)
    clickSounds.play()
  }
}


const handleScroll=()=>{
  window.scrollBy({
    top:window.innerHeight,
    behavior:"smooth",
  })
}

  return (   
    <div onClick={handleClick} id="home">

{modal &&   <Modal close={()=>setModal(false)} bgImg={bgImg} setBgImg={setBgImg} modal={modal} 
setBgm={setBgm} bgm={bgm} setBgmvolume={setBgmvolume} bgmvolume={bgmvolume} setClickSound={setClickSound} clickSound={clickSound} />} 

      <Page1 bgImg={bgImg} setModal={setModal} />
      <Page2 />
      <Page3 />  

      <Suspense fallback={<div>Loading...</div>}>
            <Game />
      </Suspense>

      <About /> 
      <div className="drop-down">
        <i className="fa fa-angle-double-down" onClick={handleScroll}></i>
      </div>

      <div id="game_logo_poster">
        <a href="#gamePage"><img id="game_logo" src={gameLogo} alt="gameLogo" /></a>
      </div>
    </div>
  );
}

export default App;
