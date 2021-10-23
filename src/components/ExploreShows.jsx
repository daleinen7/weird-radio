import React, { useState } from 'react'
import leftArrow from '../images/leftArrow.svg'
import rightArrow from '../images/rightArrow.svg'
import { StaticQuery, graphql } from 'gatsby'
import ShowSquare from './ShowSquare'

export default function ExploreShows() {
  const [page, setPage] = useState(0)

  const changePage = (direction) => {
    setPage(page + direction)
  }

  return (
    <StaticQuery
      query={graphql`
        query ExploreShows {
          allContentfulRadioShow {
            nodes {
              name
              image {
                gatsbyImageData(placeholder: BLURRED, width: 400)
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="explore">
          <h2>Explore Shows</h2>
          <ul className="explore-show">
            <button onClick={() => changePage(-1)}>
              <img src={leftArrow} alt="more shows left" />
            </button>
            {data.allContentfulRadioShow.nodes
              .slice(page, page + 3)
              .map((show, idx) => {
                return <ShowSquare show={show} key={idx} />
              })}
            <button onClick={() => changePage(1)}>
              <img src={rightArrow} alt="more shows right" />
            </button>
          </ul>
        </section>
      )}
    />
  )
}
