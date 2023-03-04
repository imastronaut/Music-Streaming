import { Card } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/Post'
import AuthContext from '../contexts/AuthContext'

const AddSong = () => {

    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [artist,setArtist] = useState('')
    const [cover,setCover] = useState(null)
    const [song,setSong] = useState(null)
    const {authTokens,songs, setSongs} = useContext(AuthContext)


  



    const handleSubmit = async(e)=>{
        e.preventDefault()

        let uploadData = new FormData();
        uploadData.append("name",name)
        uploadData.append("description",description)
        uploadData.append("artist",artist)
        uploadData.append("cover",cover,cover.name)
        uploadData.append("song",song,song.name)

        console.log("song",song,song.name)
        let response = await api.post("/songs/",uploadData,{
          "headers":
                {
                  "Content-type":"multipart/form-data",
                  "Authorization":"Bearer "+String(authTokens?.access)
                }
        })
        .catch((err)=>console.log(err))
        if(response && response.status===200){
          let New_songs = [...songs,response.data]
          setSongs(New_songs)
          navigate("/")
        }else{
          alert("upload failed")
        }

      }

    



  return (
    <div className='container'>
        <center>
        <Card className='form' style={{width:"400px"}}>
          <p style={{textAlign:"center"}}><strong>Add a new Song</strong></p>
            <form onSubmit={handleSubmit}>
              <div className='form-div'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
              </div>
              <div className='form-div'>
                <label htmlFor="decription">Description</label>
                <textarea type="text" id="decription" value={description} onChange={(e)=>setDescription(e.target.value)}/>
              </div>
              <div className='form-div'>
                <label htmlFor="artist">Artist Name</label>
                <input type="text" id="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} required/>
              </div>
              <div className='form-div'>
                <label htmlFor="cover">Cover Album</label>
                <input type="file" id="cover" name="coverimage" onChange={(e)=>setCover(e.target.files[0])} required/>
              </div>
              <div className='form-div'>
                <label htmlFor="song">Song</label>
                <input type="file" id="song" name="mp3file" onChange={(e)=>setSong(e.target.files[0])} required/>
              </div>
              <div className='form-div'>
                <button type="submit">Upload</button> 
              </div>
            </form>
        </Card>
        </center>
    </div>
  )
}

export default AddSong
