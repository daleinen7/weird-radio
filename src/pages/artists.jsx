import React from 'react'
import ArtistCircle from '../components/ArtistCircle'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function artists({ data }) {
  return (
    <Layout>
      <h1>Artist Index</h1>
      <ul className="artist-discover">
        {data.allContentfulArtist.nodes
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((artist, idx) => {
            return <ArtistCircle artist={artist} key={idx} />
          })}
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query Artists {
    allContentfulArtist {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: BLURRED, width: 282, height: 282)
        }
      }
    }
  }
`
