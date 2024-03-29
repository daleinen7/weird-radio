import React, { useState, useEffect } from 'react'
import logo from '../images/Logo.png'
import smallLogo from '../images/smallLogo.svg'
import MediaPlayer from './MediaPlayer'
import { Link } from 'gatsby'
import menuIcon from '../images/hamburgerMenu.svg'

export default function Header() {
  const [navMenuOpen, setNavMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleNavMenu = () => {
    setNavMenuOpen(!navMenuOpen)
  }

  useEffect(() => {
    const isWindow = typeof window !== 'undefined'
    const onScroll = () => {
      window.scrollY >= 200 ? setScrolled(true) : setScrolled(false)
    }
    isWindow && window.addEventListener('scroll', onScroll)
  })

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
          <button
            area-label={navMenuOpen ? 'close menu' : 'open menu'}
            onClick={handleNavMenu}
          >
            <img
              src={menuIcon}
              alt={navMenuOpen ? 'close menu' : 'open menu'}
            />
          </button>
          <ul
            className={navMenuOpen && 'nav-menu-open'}
            style={scrolled ? { marginTop: '0' } : { marginTop: '50px' }}
          >
            <li className={logo}>
              <a href="/">
                <picture>
                  <source media="(min-width: 575px)" srcSet={logo} />
                  <img src={smallLogo} alt="Weird Radio" />
                </picture>
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
