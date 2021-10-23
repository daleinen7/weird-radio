import React, { useState } from 'react'
import leftArrow from '../images/leftArrow.svg'
import rightArrow from '../images/rightArrow.svg'
import { StaticQuery, graphql } from 'gatsby'
import DJCard from './DJCard'

export default function ExploreShows() {
  const [page, setPage] = useState(0)

  const changePage = (direction) => {
    setPage(page + direction)
  }

  return (
    <StaticQuery
      query={graphql`
        query ExploreDJs {
          allContentfulStaff {
            nodes {
              image {
                gatsbyImageData(width: 410, height: 317, placeholder: BLURRED)
              }
              name
            }
          }
        }
      `}
      render={(data) => (
        <section className="explore">
          <h2>Explore DJs</h2>
          <ul className="explore-DJ discover-djs">
            <button onClick={() => changePage(-1)}>
              <img src={leftArrow} alt="more DJs left" />
            </button>
            {data.allContentfulStaff.nodes
              .slice(page, page + 3)
              .map((DJ, idx) => {
                return <DJCard name={DJ.name} image={DJ.image} key={idx} />
              })}
            <button onClick={() => changePage(1)}>
              <img src={rightArrow} alt="more DJs right" />
            </button>
          </ul>
        </section>
      )}
    />
  )
}
