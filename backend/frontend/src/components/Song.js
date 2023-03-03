import React, { useContext, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';

import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

import Like from './Like';
import AuthContext from '../contexts/AuthContext';
import Edit from './Edit';
import Delete from './Delete';




const Song = ({song}) => {


  const audioRef = useRef(null)
  const {user} = useContext(AuthContext)
  const [state,setState]  = useState(song.likes.filter((like)=>like.id===user.user_id).length?true:false)
  const canEdit = song.user.id === user.user_id?true:false
  
 
  
  
  


  return (
    <div>
        {song&& <>
          <Card>
          <ul style={{display:"flex"}}>
            <li><Link to={`/song/${song.id}`}><img src={song.coveralbum} width="45" height="50"/></Link></li>
            <li><ReactAudioPlayer ref = {audioRef} src={`${song.mp3file}`}  controls/></li>
            <li><p>{song.artistName}</p></li>
            <li><Like song={song} state={state} setState={setState} /></li>
            {canEdit && <li><Link to={`/edit/${song.id}`}>Edit</Link></li>}
            {canEdit && <li><Delete id={song.id}/></li>}
          </ul>
        </Card>       
        </>}
    
    </div>
  )
}

export default Song
