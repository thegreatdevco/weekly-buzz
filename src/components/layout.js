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
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        `}
      >
        <main
          css={css`
            max-width: var(--max-width);
            padding: 1rem;
            margin: 0 auto;
            flex-grow: 1;
          `}
        >
          {children}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Layout
