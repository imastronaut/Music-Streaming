import React, { useContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthContext, { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './utils/PrivateRoute'
import AddSong from './components/AddSong'
import ExpandSong from './components/ExpandSong'
import Sidebar from './components/Sidebar'
import LikedSongs from './components/LikedSongs'
import Library from './components/Library'
import Edit from './components/Edit'
import Player from './components/Player'


const App = () => {
  const {user,songs} = useContext(AuthContext)
  
  
  


  return (
    <div className='App'>
      
    
      
      {user && <Sidebar/> }
        <Routes>
          <Route path="" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/addSong" element={<PrivateRoute><AddSong/></PrivateRoute>}/>
          <Route path="/library" element={<PrivateRoute><Library/></PrivateRoute>}/>
          <Route path="/song/:id" element={<PrivateRoute><ExpandSong></ExpandSong></PrivateRoute>}/>
          <Route path="/liked/" element={<PrivateRoute><LikedSongs/></PrivateRoute>}/>
          <Route path="/edit/:id" element={<PrivateRoute><Edit/></PrivateRoute>}/>
        </Routes> 

        

        
        <footer>{songs && user && <Player/>}</footer>
    
      
    </div>
  )
}

export default App
