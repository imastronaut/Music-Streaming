import React,{useState,useRef,useEffect, useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import PlayerControls from "./PlayerControls";

const Player = () => {
    // const audioElement = useRef(null);
    const {songs, currentSongIndex,setCurrentSongIndex,nextSongIndex} = useContext(AuthContext)
    const [isPlaying, setIsPlaying] = useState(false);

    console.log("currentsongindex",currentSongIndex)
    // useEffect(() => {
    //     if (isPlaying) {
    //         audioElement.current.play();
    //     } else {
    //         audioElement.current.pause();
    //     }
    // });

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
