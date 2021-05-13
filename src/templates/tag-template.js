import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Reviews from '../components/reviews'
import SEO from '../components/seo'
import { css } from '@emotion/react'

const TagTemplate = ({ data, pageContext }) => {
  const reviews = data.allContentfulReview.nodes

  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <div className="tags-page">
        <Reviews reviews={reviews} />
        <div
          css={css`
            display: block;
            text-align: center;
            margin: 1rem auto;
          `}
        >
          <Link to="/" className="btn btn-secondary">
            Back Home
          </Link>
        </div>
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
