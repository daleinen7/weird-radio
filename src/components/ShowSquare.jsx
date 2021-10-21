import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

export default function ShowSquare({ show }) {
  const image = getImage(show.image)
  return (
    <li className="show-square">
      <Link to={`/${slugify(show.name)}`} className="content-container">
        <GatsbyImage
          image={image}
          alt={show.name}
          imgClassName="show-square-img"
        />
        <div className="info">
          <h3>{show.name}</h3>
          <p>DAILY @ 6PM</p>
          <p className="dj">DJ NELSON</p>
        </div>
      </Link>
    </li>
  )
}
