import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import Image from '../utils/Image'
import Detail from "../utils/Detail";
import Like from "./Like";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Delete from "./Delete";



function PlayerControls({SkipSong,isPlaying,setIsPlaying,song}) {


  const {user} = useContext(AuthContext)
  const [state,setState]  = useState(song?song.likes.filter((like)=>like.id===user.user_id).length?true:false:false)
  const canEdit = song.user.id === user.user_id?true:false 

  console.log(song)
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
       <ul style={{display:"flex"}}>
        <li><Image song={song}/></li>
        <li><Detail song={song}/></li>
        {/* <li style={{marginInline:"40px",marginTop:"10px"}}><Like song={song} state={state} setState={setState}/></li> */}
        <li><audio src={song.mp3file} ref = {audioRef}/></li>
        <li style={{margin:"15px",marginLeft:"350px"}}><button className="skip-btn" onClick={() => SkipSong(false)}>
          <FontAwesomeIcon icon={faBackward} />
        </button></li>
        <li style={{margin:"15px"}}>
        <button
          className="play-btn"
          onClick={() => setIsPlaying(!isPlaying)}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
          </li>
        <li style={{margin:"15px"}}>
          <button className="skip-btn" onClick={() =>SkipSong()}>
          <FontAwesomeIcon icon={faForward} />
          </button>
          </li>
          {canEdit && <li style={{margin:"15px"}}><Link className="link" to={`/edit/${song.id}`}><button>Edit</button></Link></li>}
          {canEdit && <li style={{margin:"15px"}}><Delete id={song.id}/></li>}
        
       </ul>
      {/* <audio src={song.mp3file} ref = {audioRef}/>
      <ul style={{display:"flex"}}>
        <li style={{margin:"15px"}}><button className="skip-btn" onClick={() => SkipSong(false)}>
          <FontAwesomeIcon icon={faBackward} />
        </button></li>
        <li style={{margin:"15px"}}>
        <button
          className="play-btn"
          onClick={() => setIsPlaying(!isPlaying)}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
          </li>
        <li stryle={{margin:"15px"}}>
          <button className="skip-btn" onClick={() =>SkipSong()}>
          <FontAwesomeIcon icon={faForward} />
          </button>
      </li>
      </ul> */}
       </>}
    </div>
  );
}

export default PlayerControls;