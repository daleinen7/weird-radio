import React from 'react'
import logo from '../images/Logo.png'
import MediaPlayer from './MediaPlayer'
import { Link } from 'gatsby'

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
              <Link to="/artists" activeClassName="active">
                Artists
              </Link>
            </li>
            <li>
              <Link to="/shows" activeClassName="active">
                Radio Shows
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <MediaPlayer />
      </header>
    </>
  )
}
