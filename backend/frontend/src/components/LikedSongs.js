import React, { useContext, useEffect } from 'react'
import AuthContext from '../contexts/AuthContext'
import ListSongs from './ListSongs'
import Song from './Song'

const LikedSongs = () => {
    const {likedSongs} = useContext(AuthContext)
    

  return (
    <div className='container'>
      <p>Liked Songs</p>
        {likedSongs && <ListSongs songs={likedSongs}/>}
    </div>
  )
}

export default LikedSongs
