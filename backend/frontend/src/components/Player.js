import React,{useState,useRef,useEffect, useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import ExpandSong from './ExpandSong';
import PlayerControls from "./PlayerControls";

const Player = () => {
    // const audioElement = useRef(null);
    const {songs, currentSongIndex,setCurrentSongIndex,nextSongIndex,isPlaying,setIsPlaying} = useContext(AuthContext)

    const song = songs[currentSongIndex]
    

     const SkipSong = (forwards = true) => {
         if (forwards) {
             setCurrentSongIndex(() => {
               let temp = currentSongIndex;
               temp++;
                return temp%songs.length;
            });
            setIsPlaying(true)
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;
                if(temp<0){
                    temp = songs.length -1
                }
                return temp%songs.length
            });
            setIsPlaying(true)
        }
    }

    
    return (
           <div className='player'>
            {song && <>    
            <PlayerControls SkipSong={SkipSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={song}/>
            </>}
        </div>
    
  )
}

export default Player
