import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ShowCard from '../components/ShowCard'

export default function shows({ data }) {
  return (
    <Layout>
      <h2>Weird Radio Shows</h2>
      <p role="doc-subtitle">Your daily dose of weird</p>

      {data.allContentfulRadioShow.nodes.map((show) => (
        <ShowCard show={show} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query Shows {
    allContentfulRadioShow {
      nodes {
        name
        showDescription {
          raw
        }
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
