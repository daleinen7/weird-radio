import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function FeaturedArtists({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query FeaturedArtists {
          allContentfulArtist(filter: { featured: { eq: true } }) {
            nodes {
              name
              image {
                gatsbyImageData(width: 300, height: 300)
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="featured-artists">
          <h2>Featured Artists</h2>
          <p role="doc-subtitle">Sonic munchies for your soundholes</p>

          <ul>
            {data.allContentfulArtist.nodes.map((artist, idx) => {
              return (
                <li key={idx}>
                  <GatsbyImage
                    image={getImage(artist.image)}
                    alt={artist.name}
                    className="featured-artist-img"
                  />
                  <p>{artist.name}</p>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    />
  )
}
