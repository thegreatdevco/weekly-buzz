import React from 'react'
import globalStyles from '../assets/styles/global-styles'
import { Global, css } from '@emotion/react'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
