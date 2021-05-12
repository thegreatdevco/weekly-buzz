import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'
import Reviews from '../components/reviews'
import { graphql } from 'gatsby'

const contact = ({
  data: {
    allContentfulReview: { nodes: reviews },
  },
}) => {
  return (
    <Layout>
      <main
        className="page"
        css={css`
          .contact-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            text-align: center;
          }

          p {
            color: var(--color-med);
            margin-top: 2rem;
          }

          .contact-info {
            margin-bottom: 2rem;
          }

          input,
          label,
          textarea {
            display: block;
            width: 100%;
            margin-bottom: 0.5rem;
          }

          input {
            padding: 0.75rem;
          }

          input,
          textarea {
            border-radius: var(--border-radius);
            outline: transparent;
            border: 1px solid var(--color-med);
          }

          button {
            display: block;
            width: 100%;
          }

          @media screen and (min-width: 768px) {
            .contact-section {
              grid-template-columns: repeat(2, 1fr);
              gap: 2rem;
              align-items: center;
            }
          }
        `}
      >
        <section className="contact-section">
          <div className="contact-info">
            <h2>Contact</h2>
            <p>
              Feel free to give us a shout, we would love to hear from you. Want
              to contribute, got some ideas or just want to say hay. Hit us on
              on the contact form
            </p>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Email</label>
                <input type="text" name="email" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Name</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </form>
          </div>
        </section>
        <section className="featured-reviews">
          <Reviews reviews={reviews} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulReview(
      filter: { featured: { eq: true } }
      sort: { order: ASC, fields: name }
    ) {
      nodes {
        company
        category
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
        name
        id
      }
    }
  }
`

export default contact
