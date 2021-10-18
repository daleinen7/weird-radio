import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

export default function DJCard({ image, name }) {
  console.log('image:', image, 'name', name)
  const img = getImage(image)
  console.log(img)
  return (
    <Link to={`/${slugify(name, { lower: true }).replace("'", '-')}`}>
      <div className="dj-card">
        <h2>{name}</h2>
        <GatsbyImage image={img} alt={name} />
      </div>
    </Link>
  )
}
