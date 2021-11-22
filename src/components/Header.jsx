import React, { useState } from 'react'
import logo from '../images/Logo.png'
import MediaPlayer from './MediaPlayer'
import { Link } from 'gatsby'
import menuIcon from '../images/hamburgerMenu.svg'

export default function Header() {
  const [navMenuOpen, setNavMenuOpen] = useState(false)

  const handleNavMenu = () => {
    setNavMenuOpen(!navMenuOpen)
  }

  return (
    <>
      <div className="spacer"></div>
      <header id="main">
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
          <ul className={navMenuOpen && 'nav-menu-open'}>
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
