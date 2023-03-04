import React, { useContext, useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import AuthContext from '../contexts/AuthContext';
import api from '../api/Post'
import LikedSongs from './LikedSongs';

const Like = ({song,state,setState}) => {

    const {user,authTokens,likedSongs,setLikedSongs,getSongs,getLikedSongs} = useContext(AuthContext)
    
    
    

    const handleLike = async(state,id)=>{
      if(!state){
        let response = await api.post(`likes/song/${id}`,{"email":"ok"},{
          "headers":{
            "Content-type":"application/json",
            "Authorization":"Bearer "+String(authTokens?.access)
          }
        })
        .catch((err)=>console.log(err))
        if(response && response.status === 200){
          setState(true)
          let new_liked = [...likedSongs,response.data]
          setLikedSongs(new_liked)
        
          getSongs()
          
          
        }
      }else{
        let response = await api.delete(`likes/song/${id}`,{
          "headers":{
            "Content-type":"application/json",
            "Authorization":"Bearer "+String(authTokens?.access)
          }
        })
        .catch((err)=>console.log(err))
        if(response && response.status === 200){
          
          setState(false)
          let new_liked = likedSongs.filter((song)=>(song.id)!==id)
          setLikedSongs(new_liked)
          getSongs()
      }
      
      
    }
  }

    
    
  return (
    <div>
      <AiFillHeart  style={{width:"35",height:"35",color:state?"red":"white"}} onClick={(e)=>handleLike(state,song.id)}/>
    </div>
  )
}

export default Like
