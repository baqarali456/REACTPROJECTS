import { useState } from 'react';



import './App.css'

function App() {

  const [songprogress,setsongProgress] = useState(0)
  const [volumeprogress,setVolumeProgress] = useState(100);

  let audioElement = new Audio('./media/songs/1.mp3'); 
    audioElement.play()
  return (
    <>
     <nav>
        <ul>
            <li className="brand"><img src="img/logo.png" alt=""/>Spotify</li>
            <li>Home</li>
            <li>About</li>
        </ul>
        
    </nav>
    <div className="container">
        <div className="songlist">
            <h1>Best NCS - No Copyright Sounds</h1>
            <div>
                <div className="songItem">
                    <img  alt="1"/>
                    <span className="songName">Let me Love you</span>
                    <span className="songlistPlay"><span>05:34</span> <i id="0" className="fas fa-play-circle songItemPlay"></i></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love you</span>
                    <span className="songlistPlay"><span>05:34</span> <i id="1" className="fas fa-play-circle songItemPlay"></i></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love you</span>
                    <span className="songlistPlay"><span>05:34</span> <i id="2" className="fas fa-play-circle songItemPlay"></i></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love you</span>
                    <span className="songlistPlay"><span>05:34</span> <i id="3" className="fas fa-play-circle songItemPlay"></i></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love you</span>
                    <span className="songlistPlay"><span>05:34</span> <i id="4" className="fas fa-play-circle songItemPlay"></i></span>
                </div>
            </div>
            
        </div>
        <div className="songBanner">

        </div>

    </div>

    <div className="bottom">
        <input onChange={(e)=>setsongProgress(e.target.value)}    type="range" name="" value={songprogress} id="myProgressbar" min="0"  max="100"/>
        <span style={{color: "#fff"}} className="duration"></span>
        <span style={{color: "#fff"}} className="currentduration"></span>
        <div className="icons">
            <i id="previous" className="fas fa-3x fa-step-backward"></i>
            <i className="fas fa-3x fa-play-circle"id="masterplay"></i>
            <i id="forward" className="fas fa-3x fa-step-forward"></i>
        </div>
        <div className="songInfo">
            <img src="img/Yzg5.gif" width="40px" id="gif" alt="Let me Love You"/>Let me Love You
        </div>
        <div id="sound-box">
            <span className="volume-icon"><i id="volume" className="fa-solid fa-volume-high"></i></span>
            <input value={volumeprogress} type="range" name="" onChange={(e)=>setVolumeProgress(e.target.value)}  id="myvolumeprogress"/>
            <span className="volume-percent"></span>
        </div>
    </div>
    </>
  )
}

export default App
