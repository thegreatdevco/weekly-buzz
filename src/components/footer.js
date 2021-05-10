import React from 'react'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <div
      css={css`
        background: var(--color-dark);
        color: var(--color-light);
        text-align: center;
        padding: 1rem;
        line-height: 2;

        a {
          color: var(--color-primary);
        }

        .wrap {
          max-width: var(--max-width);
          margin: auto;
        }

        @media screen and (min-width: 992px) {
          .wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}
    >
      <div className="wrap">
        <p>&copy; Weekly Buzz {new Date().getFullYear()}</p>
        <p>
          Designed & Developed By: <a href="thegreatdevco.com">TGDC</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
