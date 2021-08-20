import React from 'react'
import { graphql } from 'gatsby'

export default function RadioShow({ data }) {
  return (
    <>
      <h1>Show page</h1>
      <h2>{data.contentfulRadioShow.name}</h2>
    </>
  )
}

export const query = graphql`
  query ($name: String!) {
    contentfulRadioShow(name: { eq: $name }) {
      image {
        gatsbyImageData
      }
      name
      hostName
      dayAndTime
      showDescription {
        raw
      }
    }
  }
`
