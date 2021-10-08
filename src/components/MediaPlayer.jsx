import React, { useEffect, useState, useRef } from 'react'
import play from '../images/play.svg'
import pause from '../images/pause.svg'

const appendScript = (srcURL, selector) => {
  const script = document.createElement('script')
  script.src = srcURL
  script.async = true
  document.querySelector(selector).appendChild(script)
}

export default function MediaPlayer() {
  const [radio, setRadio] = useState(false)
  const [audio] = useState(
    typeof Audio !== 'undefined' &&
      new Audio('https://s3.radio.co/sa333a8356/listen')
  )

  let embedDiv
  let songInfo
  let artistInfo
  let info

  const audioControls = () => {
    radio ? audio.pause() : audio.play()
    setRadio(!radio)
  }

  const appendScriptAndSplit = (srcURL, selector) => {
    const script = document.createElement('script')
    script.src = srcURL
    script.async = true
    const parentDiv = document.querySelector(selector)
    parentDiv.appendChild(script)

    setTimeout(() => {
      embedDiv = document.querySelector('.radioco_song')
      songInfo = document.createElement('div')
      artistInfo = document.createElement('div')
      info = embedDiv.innerText.split(' - ')
      songInfo.innerText = info[1]
      songInfo.classList.add('song')
      artistInfo.innerText = info[0]
      artistInfo.classList.add('artist')
      parentDiv.appendChild(songInfo)
      parentDiv.appendChild(artistInfo)
      embedDiv.setAttribute('hidden', 'true')
      const callback = function () {
        info = embedDiv.innerText.split(' - ')
        songInfo.innerText = info[1]
        artistInfo.innerText = info[0]
      }

      const observer = new MutationObserver(callback)

      observer.observe(embedDiv, { childList: true })
    }, 400)
  }

  useEffect(() => {
    // song info
    appendScriptAndSplit(
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
          <img src={radio ? pause : play} alt="Play" />
        </button>
      </div>
    </div>
  )
}
