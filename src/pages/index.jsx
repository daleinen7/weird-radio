import * as React from 'react'
import Layout from '../components/Layout'
import RadioShow from '../components/RadioShow'
import FeaturedArtists from '../components/FeaturedArtists'
import '../scss/style.scss'

const IndexPage = () => {
  return (
    <Layout>
      <FeaturedArtists />
      <RadioShow />
    </Layout>
  )
}

export default IndexPage
