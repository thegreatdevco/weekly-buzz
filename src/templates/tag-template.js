import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Reviews from '../components/reviews'

const TagTemplate = ({ data }) => {
  const reviews = data.allContentfulReview.nodes

  return (
    <Layout>
      <div className="tags-page">
        <h3>All reviews containing the </h3>
        <Reviews reviews={reviews} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getTaggedReviews($tag: String) {
    allContentfulReview(
      sort: { fields: name, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        company
        category
        name
      }
    }
  }
`

export default TagTemplate
