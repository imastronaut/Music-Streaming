import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";


function PlayerControls({SkipSong,isPlaying,setIsPlaying,song}) {
    console.log("song",song)
    const audioRef = useRef(null)
    useEffect(()=>{
      if(song&&isPlaying){
        audioRef.current.play()
      }
      else if(song){
        audioRef.current.pause()
      }
    })
  return (
    <div className="music-player--controls" style={{}}>
       {song && <>
      <audio src={song.mp3file} ref = {audioRef}/>
      <button className="skip-btn" onClick={() => SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={() =>SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
       </>}
    </div>
  );
}

export default PlayerControls;