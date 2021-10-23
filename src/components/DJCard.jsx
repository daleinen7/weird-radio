import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

export default function DJCard({ image, name }) {
  console.log('image:', image, 'name', name)
  const img = getImage(image)
  console.log(img)
  return (
    <Link
      className="dj-card"
      to={`/${slugify(name, { lower: true }).replace("'", '-')}`}
    >
      <GatsbyImage image={img} alt={name} />
      <div className="overlay">
        <h3>{name}</h3>
        <span className="read-bio">Read Bio</span>
      </div>
    </Link>
  )
}
