import * as React from 'react'
import Layout from '../components/Layout'
import FeaturedArtists from '../components/FeaturedArtists'
import '../scss/style.scss'

const IndexPage = () => {
  return (
    <Layout>
      <FeaturedArtists />
    </Layout>
  )
}

export default IndexPage
