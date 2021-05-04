import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavItem = styled(Link)`
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: var(transition);
  position: relative;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: var(--color-primary);
    height: 1px;
    transition: var(--transition);
  }

  &:hover {
    color: var(--color-primary);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavLinks = () => {
  return (
    <div>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </div>
  )
}

export default NavLinks
