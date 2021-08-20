import React from 'react'
import { graphql } from 'gatsby'

export default function Staff({ data }) {
  return (
    <>
      <h1>Staff page</h1>
      <h2>{data.contentfulStaff.name}</h2>
    </>
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
