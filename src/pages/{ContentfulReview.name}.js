import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import slugify from 'slugify'

const ReviewTemplate = ({ data }) => {
  return <Layout>{data.contentfulReview.name}</Layout>
}

export const query = graphql`
  query getSingleReview($name: String) {
    contentfulReview(name: { eq: $name }) {
      name
      company
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        description
      }
      rank
      category
    }
  }
`

export default ReviewTemplate
