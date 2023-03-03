import { Card } from '@mui/material'
import React, { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import api from '../api/Post'

const Edit = () => {
    const {id} = useParams()
    const {songs,setSongs, authTokens} = useContext(AuthContext)
    const song = songs.find((song)=>String(song.id) === String(id))
    console.log(song)
    const navigate = useNavigate()
    const [name,setName] = useState(song?song.name:'')
    const [description,setDescription] = useState(song?song.description:'')
    const [artist,setArtist] = useState(song?song.artistName:'')
    const [cover,setCover] = useState(song.albumName)
    const [songfile,setSongfile] = useState(song.mp3file)
    
    

    const handleSubmit = async(e)=>{
        e.preventDefault()

        let uploadData = new FormData();
        uploadData.append("name",name)   
        uploadData.append("description",description)
        uploadData.append("artist",artist)
        uploadData.append("cover",cover,cover.name)
        uploadData.append("song",songfile,songfile.name)

        console.log("song",songfile,songfile.name)
        
        
        let response = await api.patch(`/modify/${id}`,uploadData,{
          "headers":
                {
                  "Content-type":"multipart/form-data",
                  "Authorization":"Bearer "+String(authTokens?.access)
                }
        })
        .catch((err)=>console.log(err))
        if(response && response.status===200){
          let originalsongs = songs.filter((song)=>String(song.id)!==String(id))
          let New_songs = [...originalsongs,response.data]
          console.log(New_songs)
          setSongs(New_songs)
          navigate("/")
        }else{
          alert("upload failed")
        }

      }


    
    return (
        <div className='container'>
        {song && <Card style={{alignItems:"center",justifyContent:"center"}}>
            <center>
             <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/><br/>
               <label htmlFor="decription">Description</label>
               <textarea type="text" id="decription" value={description} onChange={(e)=>setDescription(e.target.value)}/>
               <br/>
               <label htmlFor="artist">Artist Name</label>
               <input type="text" id="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} required/><br/>
               <label htmlFor="cover">Cover Album</label>
               <input type="file" id="cover" name="coverimage" onChange={(e)=>setCover(e.target.files[0])} required/><br/>
               <label htmlFor="song">Song</label>
               <input type="file" id="song" name="mp3file" onChange={(e)=>setSongfile(e.target.files[0])} required/><br/>
              <input type="submit" value="Edit and Upload"/>
              <button onClick={(e)=>navigate("/")}>Back</button>
            </form>
            </center>
           </Card> }
        </div>
    )
    
}
   
export default Edit
  



    
    



