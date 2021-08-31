import * as React from 'react'
import Layout from '../components/Layout'
import RadioShow from '../components/RadioShow'
import FeaturedArtists from '../components/FeaturedArtists'
import Support from '../components/Support'
import '../scss/style.scss'

const IndexPage = () => {
  return (
    <Layout>
      <FeaturedArtists />
      <RadioShow />
      <Support />
    </Layout>
  )
}

export default IndexPage
