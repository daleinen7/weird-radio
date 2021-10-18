import React from 'react'
import ArtistCircle from './ArtistCircle'
import { StaticQuery, graphql } from 'gatsby'

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
              return <ArtistCircle artist={artist} key={idx} />
            })}
          </ul>
        </section>
      )}
    />
  )
}
