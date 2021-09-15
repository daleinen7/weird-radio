import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function RadioShow({ data }) {
  return (
    <Layout>
      <h1>Show page</h1>
      <h2>{data.contentfulRadioShow.name}</h2>
    </Layout>
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
