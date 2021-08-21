import React, { useState } from 'react'
import play from '../images/play.svg'

export default function MediaPlayer() {
  const [radio, setRadio] = useState(false)
  const [audio] = useState(new Audio('https://s3.radio.co/sa333a8356/listen'))

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
      <script src="https://embed.radio.co/embed/sa333a8356/artwork.js"></script>
      <div className="info">
        <div className="radioco_artwork"></div>
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
        <button onClick={audioControls}>
          <img src={play} alt="Play" />
        </button>
      </div>
    </div>
  )
}
