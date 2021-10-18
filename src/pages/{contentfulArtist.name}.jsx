import React from 'react'
import ExploreArtists from '../components/ExploreArtists'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export default function Artist({ data }) {
  const artist = data.contentfulArtist
  return (
    <Layout>
      <section id="artist">
        <GatsbyImage image={getImage(artist.image)} alt={artist.name} />
        <div className="artist-info">
          <header>
            <h1>{artist.name}</h1>
            <div className="divider"></div>
            <p role="doc-subtitle">Artist</p>
          </header>
          <p>{renderRichText(artist.bio)}</p>
        </div>
      </section>
      <ExploreArtists />
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
