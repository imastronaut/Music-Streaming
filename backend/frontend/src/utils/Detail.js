import React from 'react'

const Detail = ({song}) => {
  return (
    <div>
      <ul>
        <li style={{color:"white"}}><strong>{song.name}</strong></li>
        <li style={{color:"white"}}><small>{song.artistName}</small></li>
      </ul>
    </div>
  )
}

export default Detail
