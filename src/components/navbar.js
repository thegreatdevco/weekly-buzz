import React, { useState } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import logo from '../assets/images/logo.svg'
import { CgMenuRight } from 'react-icons/cg'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;

        .nav-center {
          width: 90vw;
          max-width: var(--max-width);
        }

        .nav-header {
          height: 6rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .img {
          width: 70px;
        }

        button {
          border: transparent;
          outline: transparent;
          color: var(--color-primary);
          font-size: 3rem;
          background: transparent;
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            color: var(--color-secondary);
            transform: rotate(45deg);
          }
        }

        .nav-links {
          height: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }

        .show-links {
          height: 100vh;
          margin-top: 5rem;
        }

        .nav-link {
          display: block;
          text-align: center;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: var(--color-dark);
          letter-spacing: 2px;
          margin: 2rem auto;
          transition: var(--transition);
          border-bottom: 0.25rem solid transparent;

          &:hover {
            border-bottom: 0.25rem solid var(--color-primary);
          }
        }

        .active-link {
          color: var(--color-primary);
        }

        @media screen and (min-width: 992px) {
          height: 6rem;
          padding: 0;

          button {
            display: none;
          }

          .nav-center {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .nav-header {
            ${'' /* padding: 0;
            margin-right: 2rem; */}
            height: auto;
          }

          .nav-links {
            height: auto !important;
            flex-direction: row;
            align-items: center;
          }

          .main-links {
            display: flex;
          }

          .nav-link {
            margin-left: 1rem;
            font-size: 1rem;
          }
        }
      `}
    >
      <div className="nav-center">
        {/* header section */}
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Weekly Buzz Logo" className="img" />
          </Link>
          <button
            aria-label="hamburger menu button"
            onClick={() => setShow(!show)}
          >
            <CgMenuRight />
          </button>
        </div>

        {/* navigation links */}
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="nav-link contact-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
