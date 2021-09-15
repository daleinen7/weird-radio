import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

export default function ArtistCircle({ artist }) {
  return (
    <li className="artist-circle">
      <Link to={slugify(artist.name)}>
        <GatsbyImage
          image={getImage(artist.image)}
          alt={artist.name}
          className="artist-img"
        />
        {artist.name}
      </Link>
    </li>
  )
}
