import React, { useState } from 'react'
import ArtistCircle from './ArtistCircle'
import leftArrow from '../images/leftArrow.svg'
import rightArrow from '../images/rightArrow.svg'
import { StaticQuery, graphql } from 'gatsby'

export default function ExploreArtists() {
  const [page, setPage] = useState(0)

  const changePage = (direction) => {
    setPage(page + direction)
  }

  return (
    <StaticQuery
      query={graphql`
        query ExploreArtists {
          allContentfulArtist {
            nodes {
              name
              image {
                gatsbyImageData(width: 300, height: 300)
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="explore">
          <h2>Explore Artists</h2>
          <ul>
            <button onClick={() => changePage(-1)}>
              <img src={leftArrow} alt="more artists left" />
            </button>
            {data.allContentfulArtist.nodes
              .slice(page, page + 3)
              .map((artist, idx) => {
                return <ArtistCircle artist={artist} key={idx} />
              })}
            <button onClick={() => changePage(1)}>
              <img src={rightArrow} alt="more artists right" />
            </button>
          </ul>
        </section>
      )}
    />
  )
}
