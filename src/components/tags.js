import React from 'react'
import setupTags from '../assets/utils/setup-tags'
import { Link } from 'gatsby'
import slugify from 'slugify'

const Tags = ({ reviews }) => {
  const newTags = setupTags(reviews)

  return (
    <div>
      <h4>Search Tags</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
