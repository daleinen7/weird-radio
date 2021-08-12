import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ShowCard({ show }) {
  const image = getImage(show.image)
  return (
    <div className="show-card">
      <GatsbyImage
        image={image}
        alt={show.name}
        style={{ position: 'relative', right: 24, bottom: 24 }}
        imgClassName="show-card-img"
      />
      <div className="title">
        <h3>{show.name}</h3>
      </div>
    </div>
  )
}
