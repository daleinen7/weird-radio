import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ShowCard({ show }) {
  const image = getImage(show.image)
  return (
    <>
      <h3>{show.name}</h3>
      <GatsbyImage image={image} alt={show.name} imgClassName="show-card-img" />
    </>
  )
}
