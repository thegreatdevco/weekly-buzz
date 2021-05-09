import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const ReviewCard = ({ reviews = [] }) => {
  return (
    <div>
      {reviews.map(review => {
        const { company, name, category, image, id } = review
        const imagePath = getImage(image)
        const slug = slugify(name, { lower: true })

        return (
          <Link to={`/${slug}`} key={id}>
            <GatsbyImage image={imagePath} alt="review image" />
            <h4>{name}</h4>
            <h5>{company}</h5>
            <p>{category}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default ReviewCard
