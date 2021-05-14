import React from 'react'
import setupTags from '../assets/utils/setup-tags'
import { Link } from 'gatsby'
import slugify from 'slugify'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import { css } from '@emotion/react'

const Tags = ({ reviews }) => {
  const newTags = setupTags(reviews)

  return (
    <div
      css={css`
        .tag {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--color-secondary);
          color: var(--color-dark);
          margin: 1rem 0;
          padding: 0.5rem;
          border-radius: var(--borderRadius);
          transition: var(--transition);

          &:hover {
            background: transparent;
            box-shadow: var(--shadow);
          }
        }

        .tag-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .check-icon {
          margin-right: 2rem;
        }

        @media screen and (min-width: 768px) {
          .check-icon {
            margin-right: 0.25rem;
          }
        }
      `}
    >
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index} className="tag">
              <div className="tag-info">
                <AiFillCheckCircle className="check-icon" />
                {text} ({value})
              </div>
              <FaArrowRight />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
