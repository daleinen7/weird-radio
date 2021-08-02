import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ShowCard({ show }) {
  console.log(show.image)
  const image = getImage(show.image)
  return (
    <li className="show-card">
      <GatsbyImage image={image} alt={show.name} imgClassName="show-card-img" />
      <h3>{show.name}</h3>
    </li>
  )
}
