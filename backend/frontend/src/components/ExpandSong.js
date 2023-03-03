import React, { useContext, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import Card from '@mui/material/Card';
import { AiFillHeart } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import Like from './Like';



const ExpandSong = () => {
    const {songs,user} = useContext(AuthContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const audiofile = useRef()
    const song = songs.find((song)=>String(song.id)===String(id))
    const [state,setState]  = useState(song.likes.filter((like)=>like.id===user.user_id).length?true:false)
    
  return (
    <div className='container'>
      <div className='middle'>
        Expanding song
        {song&&<center>
        <Card style={{width:"400px"}}>
          <ul>
            <li><BsChevronDoubleDown style={{textAlign:"right"}} onClick={(e)=>navigate("/")}></BsChevronDoubleDown></li>
            <li><p>{song.name}</p></li>
          </ul>
          <img src={song.coveralbum} width="330" height="330"/>
          <p></p>
          <ReactAudioPlayer ref = {audiofile} src={`${song.mp3file}`}  controls style={{width:"500"}} />
          <Like song={song} state={state} setState={setState}/>
          <p>Artist : {song.artistName}</p>
          <p>{song.description}</p>
        </Card>
        </center>}
        
    </div>
    </div>
    
  )
}

export default ExpandSong
