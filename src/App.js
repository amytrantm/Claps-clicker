import './App.css';

import React, { useState } from 'react'
import Scores from'./components/Scores.js'
import Music from './components/Music.js'

const App = () => {
 
  const [ isMuted, setIsMuted ] = useState(false)

  const toggleMuted = ()=> {
    setIsMuted(!isMuted)
  }
  return (
    <div className='column-container'>
     
      <div className='column'>
        <div className="container left" id='container-left'>
          <button className="muteBtn" onClick={toggleMuted}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
        <Music isMuted={isMuted}/>
      </div>
      <div className='column'>
        <Scores isMuted={isMuted}/>
      </div >
    </div>
  )
}

export default App;
