import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'gatsby'
import play from '../images/play.svg'
import pause from '../images/pause.svg'
import volumeSymbol from '../images/volume.svg'
import volumeEmpty from '../images/volumeEmpty.svg'
import volumeFill from '../images/volumeFill.svg'

const appendScript = (srcURL, selector) => {
  const script = document.createElement('script')
  script.src = srcURL
  script.async = true
  document.querySelector(selector).appendChild(script)
}

export default function MediaPlayer() {
  const [radio, setRadio] = useState(false)
  const [volume, setVolume] = useState(6)
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

  const changeVolume = (e) => {
    setVolume(e.target.value)
  }

  useEffect(() => {
    audio.volume = volume * 0.1
  }, [volume])

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
        <div className="player-history">
          <Link to="/history" activeClassName="active">
            see recently played &#62;
          </Link>
        </div>
      </div>
      <div className="controls">
        <button onClick={audioControls}>
          <img src={radio ? pause : play} alt="Play" />
        </button>
        <div className="volumeControl">
          <label htmlFor="volume">
            <img src={volumeSymbol} alt="" />
          </label>
          <input
            className="styled-slider slider-progress"
            type="range"
            name="volume"
            id="volume"
            min="0"
            max="10"
            onChange={changeVolume}
            value={volume}
          />
        </div>
      </div>
    </div>
  )
}
