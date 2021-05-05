import React from 'react'
import { Link } from 'gatsby'

const NavLinks = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default NavLinks
