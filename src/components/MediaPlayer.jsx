import React from 'react'

export default function MediaPlayer() {
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
        <div className="play"></div>
      </div>
    </div>
  )
}
