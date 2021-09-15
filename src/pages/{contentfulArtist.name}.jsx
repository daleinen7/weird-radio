import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Artist({ data }) {
  return (
    <Layout>
      <h1>Artist page</h1>
      <h2>{data.contentfulArtist.name}</h2>
    </Layout>
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
