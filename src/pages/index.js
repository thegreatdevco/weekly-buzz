import React from 'react'
import AllReviews from '../components/all-reviews'
import Layout from '../components/layout'
import Showcase from '../components/showcase'

const index = () => {
  return (
    <Layout>
      <Showcase />
      <section className="page">
        <AllReviews />
      </section>
    </Layout>
  )
}

export default index
