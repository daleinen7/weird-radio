import React from 'react'
import MediaPlayer from './MediaPlayer'
import RadioShowDetails from './RadioShowDetail'
import { Link, StaticQuery, graphql } from 'gatsby'

export default function Header() {
  return (
    <>
    <header className="mainHeader">
      <img className="logo" src="https://res.cloudinary.com/dj7bt3ah7/image/upload/c_scale,h_132,w_132/v1630886269/Screen_Shot_2021-09-05_at_5.51.29_PM_scwjec.png" />
      <Link to="/artists" className="link">ARTISTS</Link>
      <Link to="/shows" className="link">RADIO SHOWS</Link>
      <Link to="/about" className="link">ABOUT US</Link>
      {/* <input className="link" type="text" placeholder="Search.." name="search" />
      <button type="submit"><i class="fa fa-search"></i>B</button> */}
      <MediaPlayer />
    </header>
      
    </>
  )
}
