import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Artist({ data }) {
  const artist = data.contentfulArtist;
  return (
    <Layout>
      <section id="artist">
        <GatsbyImage image={getImage(artist.image)} alt={artist.name}/>
        <div className="artist-info">
          <header>
            <h1>{artist.name}</h1>
            <div className="divider"></div>
            <p role="doc-subtitle">Artist</p>
          </header>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iusto qui nulla natus error, tempore sit est facilis quisquam eaque id expedita quam consectetur consequatur aliquam, tenetur vitae odio ea.</p>
        </div>
      </section>
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
