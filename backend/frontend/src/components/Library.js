import React,{useContext, useState} from 'react'
import AuthContext from '../contexts/AuthContext'
import LikedSongs from './LikedSongs'
import ListSongs from './ListSongs'


const Library = () => {
    const {songs,user} = useContext(AuthContext)
    const [uploaded, setUploaded] = useState(songs.filter((song)=>String(song.user.id)===String(user.user_id)))
    
  return (
    <div className='container'>
      {uploaded.length>0 ? <>
        This is your library - songs uploaded by you 
      <ListSongs songs={songs.filter((song)=>String(song.user.id)===String(user.user_id))}/>
      </>:<p>Yup!! No songs go ahead and upload now</p>}
    </div>
  )
}

export default Library
