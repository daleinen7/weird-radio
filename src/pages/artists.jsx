import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function artists({ data }) {
  return (
    <Layout>
      <h1>Artist Index</h1>
      {data.allContentfulArtist.nodes.map((artist) => {
        return <div>{artist.name}</div>
      })}
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
