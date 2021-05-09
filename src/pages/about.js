import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const about = () => {
  return (
    <Layout>
      <main
        className="page"
        css={css`
          .about-section {
            display: grid;
            grid-template-column: 1fr;
          }

          .about-info {
            text-align: center;
            margin: 4rem 0;
          }

          h2 {
            font-weight: 900;
            margin-bottom: 1rem;
          }

          p {
            color: var(--color-med);
            margin-top: 2rem;
          }

          @media screen and (min-width: 768px) {
            .about-section {
              grid-template-columns: repeat(2, 1fr);
              gap: 2rem;
              align-items: center;
            }
          }
        `}
      >
        <section className="about-section">
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Hand Holding A Cannabis Cigarette"
          />
          <div className="about-info">
            <h2>About</h2>
            <p>
              Weekly Buzz is a Cannabis review website where we review cannabis
              strains on a weekly basis. Our reviews are of cannabis strains
              from local dispensaries in the New England area of the United
              States.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default about
