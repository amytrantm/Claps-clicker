import React, { useState } from 'react'
import useSound from 'use-sound'
import applauseSound from '../applause.mp3'
import handClapSound from '../hand-clap-1.mp3'

 const Claps = (props) => {
   const {isMuted} = props
   
   const [claps, setClaps] = useState(0);

   //use-sound hook
   const [playApplause, { stop: stopApplause }] = useSound(
      applauseSound,
      { volume: 0.5 ,
      soundEnabled: true,
      },
    );

   const [playbackRate, setPlaybackRate] = React.useState(0.50);

   //hover
   const [playClap] = useSound(handClapSound, {
      playbackRate,
      volume: 1 ,
      interrupt: true,
      soundEnabled: true,
   });

   const handleClick  = () =>{
      if (isMuted){  
         setClaps(claps + 1)
      } else{
         setClaps(claps + 1)
         setPlaybackRate(playbackRate + 0.05);
         playClap();
      }
   }

   const onMouseEnter = () => {
      if (!isMuted) {
         playApplause()
      }
   }

   return (
      <div className="container right" id='score_container' >
         <div></div>
         <div className="counter-container">Total claps: <span id="coffee_counter" >{claps}</span></div>
         <div id="claps_emoji" 
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={() => stopApplause() }
            >
            👏
         </div>
         <p>{isMuted ? "Turn sound on for applause 🔝" : ""}</p>
      </div>
   );
}

export default Claps