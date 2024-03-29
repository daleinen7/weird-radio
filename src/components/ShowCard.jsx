import React from 'react'
import { Link } from 'gatsby'
import slugify from 'slugify'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ShowCard({ show }) {
  const image = getImage(show.image)
  return (
    <Link to={`/${slugify(show.name, { lower: true }).replace("'", '-')}`}>
      <div className="show-card">
        <GatsbyImage
          image={image}
          alt={show.name}
          style={{ position: 'relative', right: 24, bottom: 24 }}
          imgClassName="show-card-img"
        />
        <div className="show-card-info">
          <div className="title">
            <h3>{show.name}</h3>
          </div>
          <p className="time">{show.dayAndTime}</p>
          <p className="dj">{show.hostName}</p>
        </div>
      </div>
    </Link>
  )
}
