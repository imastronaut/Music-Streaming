import React from 'react'
import Song from './Song'

const Songslist = ({songs}) => {
  return (
    <>
    {songs && 
    <table style={{width:"100%"}}>
        <tr>
            <th>Status</th>
            <th>SongName</th>
            <th>Cover Album</th>
            <th>Artist Name</th>
        </tr>
        {songs.map((song)=>(
                <Song song={song}/>
            ))} 
        
    </table>
    }
    </>
  )
}

export default Songslist
