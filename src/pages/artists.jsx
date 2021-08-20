import React from 'react'
import { graphql } from 'gatsby'
export default function artists({ data }) {
  return (
    <>
      <h1>Artist Index</h1>
      {data.allContentfulArtist.nodes.map((artist) => {
        return <div>{artist.name}</div>
      })}
    </>
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
