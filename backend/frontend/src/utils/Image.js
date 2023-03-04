import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({song}) => {
    
  return (
    <div>
      <Link to={`/song/${song.id}`}><img src={song.coveralbum} width="50" height="50"/></Link>
    </div>
  )
}

export default Image
