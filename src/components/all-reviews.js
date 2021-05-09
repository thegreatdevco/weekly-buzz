import React from 'react'
import ReviewCard from './review-card'
import Tags from './tags'
import { graphql, useStaticQuery } from 'gatsby'

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
    <div>
      <Tags reviews={reviews} />
      <ReviewCard reviews={reviews} />
    </div>
  )
}

export default AllReviews
