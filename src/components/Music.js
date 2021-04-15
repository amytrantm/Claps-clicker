import React from 'react';
import useSound from 'use-sound';
import SoundHelix from '../SoundHelix-Song-6.mp3'

const  Music= (props) => {
   const { isMuted } = props

   //hook
   const [playMusic, { isPlaying, stop }] = useSound(
      SoundHelix,
      {volumn: 0.05}
      ); 

   console.log(useSound(SoundHelix))

   if (isMuted && isPlaying) {
      stop();
   }
   
   const onClick = () => {
      if (isMuted) {
         stop()
      } else {
         isPlaying ? stop() : playMusic()
      }
   }
   
   return (
      <div className="container left" id='container-left'>
         <div className='small-btn'>
            <i
               onClick={onClick} 
               className={isPlaying ? "fa fa-lg fa-stop-circle" : "fa fa-lg fa-play-circle" }>
            </i>
         </div>
         <p>{isMuted && !isPlaying ? "Turn sound on for music 🔝 " : ""}</p>
      </div>
   );
}

export default Music