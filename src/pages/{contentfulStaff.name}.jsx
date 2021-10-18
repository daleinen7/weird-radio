import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export default function Staff({ data }) {
  const staff = data.contentfulStaff
  return (
    <Layout>
      <section id="artist">
        <GatsbyImage image={getImage(staff.image)} alt={staff.name} />
        <div className="artist-info">
          <header>
            <h1>{staff.name}</h1>
            <div className="divider"></div>
            <p role="doc-subtitle">{staff.role}</p>
          </header>
          {renderRichText(staff.bio)}
        </div>
      </section>
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
