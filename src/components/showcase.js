import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

const Showcase = () => {
  return (
    <header
      css={css`
        height: 40vh;
        position: relative;
        margin-bottom: 2rem;

        .showcase-img {
          height: 100%;
          border-radius: var(--border-radius);
        }

        .showcase-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: var(--color-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.4);

          span {
            color: var(--color-primary);
          }
        }

        @media screen and (min-width: 768px) {
          h1 {
            font-size: 4rem;
          }
        }
      `}
    >
      <StaticImage
        src="../assets/images/showcase.jpg"
        alt="Cannabis Flower"
        className="showcase-img"
        layout="fullWidth"
        placeholder="tracedSVG"
      />
      <div className="showcase-text">
        <h1>
          Weekly <span>Buzz</span>
        </h1>
        <p>Check out weekly cannabis strain reviews</p>
      </div>
    </header>
  )
}

export default Showcase
