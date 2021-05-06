import React from 'react'
import globalStyles from '../assets/styles/global-styles'
import { Global, css } from '@emotion/react'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <main
        css={css`
          max-width: var(--max-width);
          margin: auto;
          padding: 1rem;
          margin: 4rem auto;
        `}
      >
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout
