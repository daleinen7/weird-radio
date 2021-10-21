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
          <div className="show-img-container">
            <GatsbyImage image={image} alt={show.name} />
          </div>
          <div className="show-info">
            <h2>{data.contentfulRadioShow.name}</h2>
            <p>{show.dayAndTime}</p>
            <p className="dj">{show.hostName}</p>
            {renderRichText(show.showDescription)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($name: String!) {
    contentfulRadioShow(name: { eq: $name }) {
      image {
        gatsbyImageData(width: 360)
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
