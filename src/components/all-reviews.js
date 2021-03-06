import React from 'react'
import ReviewCard from './reviews'
import Tags from './tags'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'

const query = graphql`
  {
    allContentfulReview {
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

const AllReviews = () => {
  const data = useStaticQuery(query)
  const reviews = data.allContentfulReview.nodes

  return (
    <div
      css={css`
        display: grid;
        gap: 2rem;
        text-align: center;
        margin-bottom: 1rem;

        @media screen and (min-width: 768px) {
          grid-template-columns: 200px 1fr;
        }
      `}
    >
      <Tags reviews={reviews} />
      <ReviewCard reviews={reviews} />
    </div>
  )
}

export default AllReviews
