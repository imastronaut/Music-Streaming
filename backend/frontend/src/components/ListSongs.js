import React from 'react'
import Song from './Song'
import Songslist from './Songslist'

const ListSongs = ({songs}) => {
    

  return (
    <div className='container'>
      {!songs && <p>No songs</p>}
      {songs &&
      <Songslist songs={songs}/>}
    </div>
  )
}

export default ListSongs
