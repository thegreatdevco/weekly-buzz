import React from 'react'
import globalStyles from '../assets/styles/global-styles'
import { Global, css } from '@emotion/react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <main
        css={css`
          max-width: var(--max-width);
          padding: 1rem;
          margin: 0 auto;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
