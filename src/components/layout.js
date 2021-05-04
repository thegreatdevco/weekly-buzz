import React from 'react'
import globalStyles from '../assets/styles/global-styles'
import { Global, css } from '@emotion/react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
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
