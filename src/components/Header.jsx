import React from 'react'
import logo from '../images/Logo.png'
import MediaPlayer from './MediaPlayer'
<<<<<<< HEAD
import RadioShowDetails from './RadioShowDetail'
import { Link, StaticQuery, graphql } from 'gatsby'
=======
import { Link } from 'gatsby'
>>>>>>> 99d619ac933e6c39c787f4b4c63a992cf73f76b7

export default function Header() {
  return (
    <>
<<<<<<< HEAD
    <header className="mainHeader">
      <img className="logo" src="https://res.cloudinary.com/dj7bt3ah7/image/upload/c_scale,h_132,w_132/v1630886269/Screen_Shot_2021-09-05_at_5.51.29_PM_scwjec.png" />
      <Link to="/artists" className="link">ARTISTS</Link>
      <Link to="/shows" className="link">RADIO SHOWS</Link>
      <Link to="/about" className="link">ABOUT US</Link>
      {/* <input className="link" type="text" placeholder="Search.." name="search" />
      <button type="submit"><i class="fa fa-search"></i>B</button> */}
      <MediaPlayer />
    </header>
      
=======
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
>>>>>>> 99d619ac933e6c39c787f4b4c63a992cf73f76b7
    </>
  )
}
