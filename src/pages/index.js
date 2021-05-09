import React from 'react'
import AllReviews from '../components/all-reviews'
import Layout from '../components/layout'
import Showcase from '../components/showcase'

const index = () => {
  return (
    <Layout>
      <Showcase />
      <AllReviews />
    </Layout>
  )
}

export default index
