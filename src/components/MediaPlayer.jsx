import React, { useEffect, useState } from 'react'
import play from '../images/play.svg'

const appendScript = (srcURL, selector) => {
  const script = document.createElement('script')
  script.src = srcURL
  script.async = true
  document.querySelector(selector).appendChild(script)
  console.log('This fucking script', script)
}

export default function MediaPlayer() {
  const [radio, setRadio] = useState(false)
  const [audio] = useState(
    typeof Audio !== 'undefined' &&
      new Audio('https://s3.radio.co/sa333a8356/listen')
  )
  const audioControls = () => {
    radio ? audio.pause() : audio.play()
    setRadio(!radio)
  }

  useEffect(() => {
    // song info
    appendScript(
      'https://embed.radio.co/embed/sa333a8356/song.js',
      '#radioco_song'
    )
    // art
    appendScript(
      'https://embed.radio.co/embed/sa333a8356/artwork.js',
      '#radioco_artwork'
    )
  }, [])

  return (
    <div className="player">
      <div className="info">
        <div id="radioco_artwork"></div>
        <div className="text">
          <div>
            <div className="now-playing">Now Playing</div>
            <div className="weird-live">Weird Live!</div>
          </div>
          <div>
            <div id="radioco_song"></div>
            {/* <div className="artist">Artist Playing</div> */}
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
