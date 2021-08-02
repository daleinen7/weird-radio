import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

export default function RadioShow() {
  return (
    <StaticQuery
      query={graphql`
        query allShows {
          allContentfulRadioShow {
            nodes {
              name
              image {
                fluid {
                  src
                }
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
        </section>
      )}
    />
  )
}
