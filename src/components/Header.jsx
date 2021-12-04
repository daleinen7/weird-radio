import React, { useState } from 'react'
import logo from '../images/Logo.png'
import MediaPlayer from './MediaPlayer'
import { Link } from 'gatsby'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const changeHeader = () => {
    window.scrollY >= 200 ? setScrolled(true) : setScrolled(false)
  }

  window.addEventListener('scroll', changeHeader)

  return (
    <>
      <div
        className="spacer"
        style={scrolled ? { height: '144px' } : { height: '207px' }}
      ></div>
      <header
        id="main"
        style={scrolled ? { height: '144px' } : { height: '207px' }}
      >
        <nav>
          <ul style={scrolled ? { marginTop: '0' } : { marginTop: '50px' }}>
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
        <MediaPlayer scrolled={scrolled} />
      </header>
    </>
  )
}
