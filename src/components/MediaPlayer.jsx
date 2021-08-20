import React, { useEffect, useState } from 'react'
import play from '../images/play.svg'

export default function MediaPlayer() {
  const [radio, setRadio] = useState(false)
  const [audio, setAudio] = useState(
    new Audio('https://s3.radio.co/sa333a8356/listen')
  )

  const audioControls = () => {
    let isPlaying = radio

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }

    setRadio(!isPlaying)
  }

  return (
    <div className="player">
      <div className="info">
        <img src="" alt="" className="current-image" />
        <div className="text">
          <div>
            <div className="now-playing">Now Playing</div>
            <div className="weird-live">Weird Live!</div>
          </div>
          <div>
            <div className="song">Song Playing</div>
            <div className="artist">Artist Playing</div>
          </div>
        </div>
      </div>
      <div className="controls">
        <audio src="https://s3.radio.co/sa333a8356/listen" type="audio/mpeg">
          {' '}
          I'm sorry. You're browser doesn't support HTML5 <code>
            audio
          </code>.{' '}
        </audio>
        <button onClick={audioControls}>
          <img src={play} alt="Play" />
        </button>
      </div>
    </div>
  )
}
