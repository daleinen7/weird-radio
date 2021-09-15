import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Staff({ data }) {
  return (
    <Layout>
      <h1>Staff page</h1>
      <h2>{data.contentfulStaff.name}</h2>
    </Layout>
  )
}

export const query = graphql`
  query ($name: String!) {
    contentfulStaff(name: { eq: $name }) {
      name
      role
      bio {
        raw
      }
      image {
        gatsbyImageData
      }
    }
  }
`
