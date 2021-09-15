import React from 'react'
import Layout from '../components/Layout'
import DJCard from '../components/DJCard'
import Support from '../components/Support'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function AboutPage({ data }) {
  return (
    <Layout>
      <main>
        <section className="about">
          <div className="copy">
            <h2>About Us</h2>
            <p role="doc-subtitle">AVANTE - GARDE, ECCENTRIC, WEIRD</p>
            <p className="intro">
              You are listening to <span className="purp">Weird Radio</span>,
              your source for the hidden gems of the digital wasteland and the
              intellectual jungle.{' '}
            </p>
            <p>
              We’re bringing you the hottest new jams of the new wave, whatever
              that new wave might be. You’ll hear all the best noise, the most
              fascinating stories, the best drops on new events, and all the
              weird news. Stay WEIRD!
            </p>
            <blockquote>
              <h3>
                <span className="green">Weird Radio</span> saved me.
              </h3>
              <p>
                I got sick of paying to get my music heard. When I founded this
                station, I did so because I knew there was a better way. We’ve
                created a nexus to connect bands, their fanbases and new
                listeners. We’re Weird, and we’re proud of it.
              </p>
              <p>-Skylar Meany</p>
            </blockquote>
          </div>
          <div className="logo">
            <StaticImage src="../images/LargeLogo.png" alt="Weird Radio" />
          </div>
        </section>
        <section className="discover">
          <h2>Discover Our DJs</h2>
          <p role="doc-subtitle">Sonic Munchies for Your Soundholes</p>
          <ul className="discover-djs">
            {data.allContentfulStaff.nodes.map((dj) => {
              return (
                <li>
                  <DJCard name={dj.name} image={dj.image} key={dj.name} />
                </li>
              )
            })}
          </ul>
        </section>
        <Support />
      </main>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query DJs {
    allContentfulStaff {
      nodes {
        image {
          gatsbyImageData(width: 410, height: 317, placeholder: BLURRED)
        }
        name
      }
    }
  }
`
