import React,{useState,useRef,useEffect, useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import PlayerControls from "./PlayerControls";

const Player = () => {
    // const audioElement = useRef(null);
    const {songs, currentSongIndex,setCurrentSongIndex,nextSongIndex,isPlaying,setIsPlaying} = useContext(AuthContext)
    

    console.log("currentsongindex",currentSongIndex)
    

     const SkipSong = (forwards = true) => {
         if (forwards) {
             setCurrentSongIndex(() => {
               let temp = currentSongIndex;
               temp++;
                return temp%songs.length;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;
                if(temp<0){
                    temp = songs.length -1
                }
                return temp%songs.length
            });
        }
    }

    
    return (
        <div className='container'>
           <div className='player'>
            {songs && <>
                This is a Player
            <PlayerControls SkipSong={SkipSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={songs[currentSongIndex]}/>
            </>}
        </div>
        </div>
    
  )
}

export default Player
