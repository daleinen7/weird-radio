import React from 'react'
import logo from '../images/Logo.png'
import MediaPlayer from './MediaPlayer'

export default function Header() {
  return (
    <>
      <div className="spacer"></div>
      <header id="main">
        <nav>
          <ul>
            <li className={logo}>
              <a href="/">
                <img src={logo} alt="Weird Radio" />
              </a>
            </li>
            <li>
              <a href="/artists">Artists</a>
            </li>
            <li>
              <a href="/shows">Radio Shows</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>
        <MediaPlayer />
      </header>
    </>
  )
}
