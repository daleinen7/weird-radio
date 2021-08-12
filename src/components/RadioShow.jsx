import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import ShowSquare from './ShowSquare'

export default function RadioShow() {
  return (
    <StaticQuery
      query={graphql`
        query allShows {
          allContentfulRadioShow {
            nodes {
              name
              image {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="shows-feature">
          <header>
            <h2>Weird Radio Shows</h2>
            <Link to="/shows">View All</Link>
          </header>
          <p role="doc-subtitle">Your daily dose of weird</p>
          <ul>
            {data.allContentfulRadioShow.nodes.map((show, idx) => {
              return <ShowSquare show={show} key={idx} />
            })}
          </ul>
        </section>
      )}
    />
  )
}
