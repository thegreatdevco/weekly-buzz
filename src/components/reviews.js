import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'
import { css } from '@emotion/react'

const Reviews = ({ reviews = [] }) => {
  return (
    <div
      css={css`
        display: grid;
        gap: 1rem;

        .card {
          margin: 0.25rem 0;
          text-align: center;
          background: var(--color-light);
          box-shadow: var(--shadow);
          padding: 1rem;

          &:hover {
            box-shadow: var(--shadow-light);
          }
        }

        .review-img {
          height: 300px;
        }

        h4 {
          margin-top: 1rem;
        }

        p {
          color: var(--color-primary);
          margin-bottom: 1rem;
          background: var(--color-dark);
          border-radius: var(--border-radius);
        }

        @media screen and (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);

          .review-img {
            height: 200px;
          }
        }

        @media screen and (min-width: 1100px) {
          grid-template-columns: repeat(3, 1fr);
        }
      `}
    >
      {reviews.map(review => {
        const { company, name, category, image, id } = review
        const imagePath = getImage(image)
        const slug = slugify(name, { lower: true })

        return (
          <Link to={`/${slug}`} key={id} className="card">
            <GatsbyImage
              image={imagePath}
              alt="review image"
              className="review-img"
            />
            <h4>{name}</h4>
            <p>{company}</p>
            <h5>{category}</h5>
          </Link>
        )
      })}
    </div>
  )
}

export default Reviews
