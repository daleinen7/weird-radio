import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function DJCard({ image, name }) {
  console.log('image:', image, 'name', name)
  const img = getImage(image)
  console.log(img)
  return (
    <>
      <h2>{name}</h2>
      <GatsbyImage image={img} alt={name} />
    </>
  )
}
