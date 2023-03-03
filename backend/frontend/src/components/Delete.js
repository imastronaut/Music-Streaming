import React, { useContext } from 'react'
import { AiFillPicture } from 'react-icons/ai'
import api from '../api/Post'
import AuthContext from '../contexts/AuthContext'

const Delete = ({id}) => {

    const {authTokens,songs,setSongs} = useContext(AuthContext)

    const handleDelete = async(id)=>{
        console.log("delete clicked")
        let response = await api.delete(`/modify/${id}`,{
            "headers":{
                "Content-type":"application/json",
                "Authorization":"Bearer "+String(authTokens?.access)
            }
        })
        .catch((err)=>console.log(err))
        if(response && response.status === 200){
            let new_songs = songs.filter((song)=>song.id!==id)
            setSongs(new_songs)
        }
    }
  return (
    <div>
      <button onClick={(e)=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default Delete
