import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-section">
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Hand Holding A Cannabis Cigarette"
          />
          <div className="about-info">
            <h3>About</h3>
            <p>
              Weekly Buzz is a Cannabis review website where we review cannabis
              strains on a weekly basis. Our reviews are of cannabis strains
              from local dispensaries in the New England area of the United
              States.
            </p>
            <Link className="btn btn-contact">Contact Us</Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default about
