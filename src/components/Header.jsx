import React from 'react'
import MediaPlayer from './MediaPlayer'
import RadioShowDetails from './RadioShowDetail'
import { Link, StaticQuery, graphql } from 'gatsby'

export default function Header() {
  return (
    <>
    <header>
      <Link to="/">ARTISTS</Link>
      <Link to="/">RADIO SHOWS</Link>
      <Link to="/">ABOUT US</Link>
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit"><i class="fa fa-search"></i>B</button>
    </header>
      <MediaPlayer />
      
     
    </>
  )
}
