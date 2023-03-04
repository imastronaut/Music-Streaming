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

    
    if(songs[currentSongIndex]===song && isPlaying){
      setIsPlaying(false)
    }else{
      const findIndex = (songs,song)=>{
        for(let i=0;i<songs.length;i++){
          if(songs[i].id === song.id){
            return i
          }
        }
        return -1
      }
      let index = findIndex(songs,song)
      console.log("index",index)
      console.log(index)
      setCurrentSongIndex(index)
      console.log("setcurr",currentSongIndex)
      setIsPlaying(true)
    }
  }

  console.log("setted",currentSongIndex)


  return (
    <tr style={{}}>
      {song && <>
          
                  
          <td><button  className="skip-btn" onClick={(e)=>handleClick(song)}>
          {(songs[currentSongIndex] === song && isPlaying)?<FontAwesomeIcon icon={faPause} />:<FontAwesomeIcon icon={faPlay}/>}
          </button></td>
          <td><p>{song.name}</p></td>
          <td><Link to={`/song/${song.id}`}><img src={song.coveralbum} width="45" height="50"/></Link></td>
          <td><p>{song.artistName}</p></td>
          <td><Like song={song} state={state} setState={setState} /></td>
          {canEdit && <td><Link className="link" to={`/edit/${song.id}`}><button>Edit</button></Link></td>}
          {canEdit && <td><Delete id={song.id}/></td>}

        </>}
        </tr>
    )
    
        
}

export default Song
