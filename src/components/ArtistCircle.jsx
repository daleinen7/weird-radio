import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ArtistCircle({ artist }) {
  return (
    <li className="artist-circle">
      <GatsbyImage
        image={getImage(artist.image)}
        alt={artist.name}
        className="artist-img"
      />
      <p>{artist.name}</p>
    </li>
  )
}
