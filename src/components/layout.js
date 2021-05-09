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
          padding: 1rem;
          margin: 4rem auto;

          @media screen and (min-width: 768px) {
            margin-top: 4rem;
          }
        `}
      >
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout
