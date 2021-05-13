import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import slugify from 'slugify'
import { css } from '@emotion/react'

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
      {/* header */}
      <header
        css={css`
          height: 40vh;
          position: relative;
          margin-bottom: 2rem;

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
          }

          p {
            color: var(--color-primary);
            margin-bottom: 1rem;
          }
        `}
      >
        <GatsbyImage image={pathToImage} alt={name} className="header-img" />
        <div className="header-content">
          <p>{company}</p>
          <h1>{name}</h1>
        </div>
      </header>
      {/* info */}
      {/* description */}
      {/* featured reviews */}
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
