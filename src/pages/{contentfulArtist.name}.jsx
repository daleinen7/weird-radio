import React from 'react'
import { graphql } from 'gatsby'

export default function Artist({ data }) {
  return (
    <>
      <h1>Artist page</h1>
      <h2>{data.contentfulArtist.name}</h2>
    </>
  )
}

export const query = graphql`
  query ($name: String!) {
    contentfulArtist(name: { eq: $name }) {
      name
      image {
        gatsbyImageData
      }
      bio {
        raw
      }
      links
    }
  }
`
