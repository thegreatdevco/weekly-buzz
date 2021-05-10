import React from 'react'
import setupTags from '../assets/utils/setup-tags'

const Tags = ({ reviews }) => {
  const newTags = setupTags(reviews)

  return (
    <div>
      <h3>tags component</h3>
    </div>
  )
}

export default Tags
