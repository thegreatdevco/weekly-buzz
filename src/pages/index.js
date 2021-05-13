import React from 'react'
import AllReviews from '../components/all-reviews'
import Layout from '../components/layout'
import Showcase from '../components/showcase'
import SEO from '../components/seo'

const index = () => {
  return (
    <Layout>
      <SEO
        title="Home Page"
        description="Weekly Buzz homepage displaying weekly cannabis strain reviews"
      />
      <Showcase />
      <section className="page">
        <AllReviews />
      </section>
    </Layout>
  )
}

export default index
