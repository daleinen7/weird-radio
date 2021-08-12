import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ShowSquare({ show }) {
  console.log(show.image)
  const image = getImage(show.image)
  return (
    <li className="show-card">
      <div className="content-container">
        <GatsbyImage
          image={image}
          alt={show.name}
          imgClassName="show-card-img"
        />
        <div className="info">
          <h3>{show.name}</h3>
          <p>DAILY @ 6PM</p>
          <p className="dj">DJ NELSON</p>
        </div>
      </div>
    </li>
  )
}
