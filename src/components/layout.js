import React from 'react'
import globalStyles from '../assets/styles/global-styles'
import { Global, css } from '@emotion/react'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <header></header>
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
