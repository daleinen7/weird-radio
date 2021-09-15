import React from 'react'
import ArtistCircle from '../components/ArtistCircle'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function artists({ data }) {
  return (
    <Layout>
      <main className="artist-discover">
        <h2>Discover Our Artists</h2>
        <p role="doc-subtitle">Sonic munchies for your soundholes</p>
        <ul className="artist-discover">
          {data.allContentfulArtist.nodes
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((artist, idx) => {
              return <ArtistCircle artist={artist} key={idx} />
            })}
        </ul>
      </main>
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
