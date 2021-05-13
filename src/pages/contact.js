import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'
import Reviews from '../components/reviews'
import { graphql } from 'gatsby'
import { useForm } from '@formspree/react'
import SEO from '../components/seo'

const Contact = ({
  data: {
    allContentfulReview: { nodes: reviews },
  },
}) => {
  const [state, handleSubmit] = useForm('xdoyegze')
  if (state.succeeded) {
    return <p>Thanks, message sent!</p>
  }

  return (
    <Layout>
      <SEO
        title="Contact Page"
        description="Contact page for Weekly Buzz cannabis reviews"
      />
      <main
        className="page"
        css={css`
          .contact-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 4rem;
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Name</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
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

export default Contact
