import React, { useContext, useEffect, useRef, useState } from 'react'

import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Like from './Like';
import AuthContext from '../contexts/AuthContext';
import Delete from './Delete';
import {
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";




const Song = ({song}) => {


  const audioRef = useRef(null)
  const {user,songs,currentSongIndex, isPlaying,setIsPlaying,setCurrentSongIndex} = useContext(AuthContext)
  const [state,setState]  = useState(song.likes.filter((like)=>like.id===user.user_id).length?true:false)
  const canEdit = song.user.id === user.user_id?true:false 
  
  
  const handleClick = (song)=>{
    console.log("hanlde c;oedj soif")
    if(songs[currentSongIndex]===song && isPlaying){
      setIsPlaying(false)
    }else{
      setIsPlaying(true)
      let index = songs.indexOf(song)
      setCurrentSongIndex(index)
    }
  }


  return (
    <div>
        {song&& <>
          <Card>
          <ul style={{display:"flex"}}>
            <li><button  className="skip-btn" onClick={(e)=>handleClick(song)}>
            {(songs[currentSongIndex] === song && isPlaying)?<FontAwesomeIcon icon={faPause} />:<FontAwesomeIcon icon={faPlay}/>}
            </button></li>
            <li><p>{song.name}</p></li>
            <li><Link to={`/song/${song.id}`}><img src={song.coveralbum} width="45" height="50"/></Link></li>
            <li><p>{song.artistName}</p></li>
            <li><Like song={song} state={state} setState={setState} /></li>
            {canEdit && <li><Link to={`/edit/${song.id}`}><button>Edit</button></Link></li>}
            {canEdit && <li><Delete id={song.id}/></li>}
          </ul>
        </Card>       
        </>}
    
    </div>
  )
}

export default Song
