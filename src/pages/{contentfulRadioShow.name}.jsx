import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function RadioShow({ data }) {
  const show = data.contentfulRadioShow
  const image = getImage(show.image)
  console.log(image)
  return (
    <Layout>
      <div className="show-page-background">
        <GatsbyImage
          image={image}
          alt={show.name}
          style={{ position: 'absolute' }}
        />
        <div className="about-radio-show">
          <GatsbyImage
            image={image}
            alt={show.name}
            imgClassName="show-card-img"
          />
          <h2>{data.contentfulRadioShow.name}</h2>
        </div>
      </div>
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
