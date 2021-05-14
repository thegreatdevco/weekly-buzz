import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

import { css } from '@emotion/react'
import SEO from '../components/seo'

const ReviewTemplate = ({ data }) => {
  const {
    name,
    company,
    rank,
    category,
    image,
    description: { description },
  } = data.contentfulReview

  const pathToImage = getImage(image)

  return (
    <Layout>
      <SEO title={name} description={description} />
      <main
        css={css`
          header {
            height: 40vh;
            position: relative;
            margin-bottom: 2rem;
          }

          h1 {
            font-size: 3rem;
            text-transform: uppercase;
          }

          .header-img {
            height: 100%;
            border-radius: var(--border-radius);
          }

          .header-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--color-light);
            background: rgba(0, 0, 0, 0.4);

            p {
              color: var(--color-primary);
              margin-bottom: 1rem;
            }
          }

          h4 {
            margin: 2rem 0;
          }

          .category {
            color: var(--color-secondary);
            margin-left: 1rem;
            font-weight: 100;
          }

          .rank {
            color: var(--color-med);
            margin-left: 1rem;
            font-weight: 100;
          }

          .review-description {
            margin: 4rem 0;

            h4 {
              margin-bottom: 1rem;
            }

            p {
              color: var(--color-med);
            }
          }

          @media screen and (min-width: 768px) {
            h1 {
              font-size: 4rem;
            }
          }
        `}
      >
        {/* image */}
        <header>
          <GatsbyImage image={pathToImage} alt={name} className="header-img" />

          <div className="header-content">
            <p>{company}</p>
            <h1>{name}</h1>
          </div>
        </header>

        {/* info */}
        <div className="review-info">
          <h4>
            Category: <span className="category">{category}</span>
          </h4>
          <h4>
            Rank: <span className="rank">{rank} out of 5</span>
          </h4>
        </div>

        {/* description */}
        <div className="review-description">
          <h4>Review:</h4>
          <p>{description}</p>
        </div>
        {/* featured reviews */}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleReview($name: String) {
    contentfulReview(name: { eq: $name }) {
      name
      category
      company
      rank
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description {
        description
      }
    }
  }
`

export default ReviewTemplate
