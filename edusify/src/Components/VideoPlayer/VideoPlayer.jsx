import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/WhatsApp Video 2025-08-11 at 23.47.44_ba7e7d6e.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

const player = useRef(null);


const closePlayer= (e)=>{
  if(e.target === player.current){
    setPlayState(false);
  }
}
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player}  onClick={closePlayer}>
      <video src={video}  autoPlay muted controls ></video>

    </div>
  )
}

export default VideoPlayer
