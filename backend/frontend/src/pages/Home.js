import React, { useContext, useState } from 'react'

import ListSongs from '../components/ListSongs'
import Player from '../components/Player'
import PlayerControls from '../components/PlayerControls'

import AuthContext from '../contexts/AuthContext'


const Home = () => {

  const {logoutUser, user, songs} = useContext(AuthContext)
  







  return (
    <div className='container'>
      <p style={{weight:"40",margin:"20px"}}>Todays Awesome songs</p>   
      {songs && <ListSongs songs={songs} />} 
      {!songs && <p>No songs </p>}
        
      {/* <Player songs={songs} currentSongNo={currentSongNo} setCurrentSongNo={setCurrentSongNo} nextSongIndex={nextSongIndex}/> */}
      
    </div>
  )
}

export default Home
