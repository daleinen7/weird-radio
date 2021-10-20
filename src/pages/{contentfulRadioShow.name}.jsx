import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export default function RadioShow({ data }) {
  const show = data.contentfulRadioShow
  const image = getImage(show.image)

  const bgImage = {
    backgroundImage: `url(${show.image.file.url})`,
  }
  return (
    <Layout>
      <section className="radio-show">
        <div className="show-page-background" style={bgImage}></div>
        <div className="about-radio-show">
          <GatsbyImage
            image={image}
            alt={show.name}
            imgClassName="show-card-img"
          />
          <h2>{data.contentfulRadioShow.name}</h2>
          <p>{show.dayAndTime}</p>
          <p>{show.hostName}</p>
          {renderRichText(show.showDescription)}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($name: String!) {
    contentfulRadioShow(name: { eq: $name }) {
      image {
        gatsbyImageData
        file {
          url
        }
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
