import React, { useContext, useState } from 'react'
import { AiFillPicture } from 'react-icons/ai'
import api from '../api/Post'
import AuthContext from '../contexts/AuthContext'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';

const Delete = ({id}) => {

    const {authTokens,songs,setSongs} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleDelete = async(id)=>{
     
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
            <Popup trigger=
                {<button> Delete </button>}
                >
                {
                    close => (
                        <Card >
                            Are you Sure you want to delete?
                            <ul style={{display:"flex"}}>
                              <li style={{margin:"15px"}}><button onClick={() => close()}>No</button></li>
                              <li style={{margin:"15px"}}><button onClick={()=>handleDelete(id)}>Yes</button></li>
                            </ul>
                        </Card>
                    )
                }
            </Popup>
        </div>
  )
}

export default Delete
