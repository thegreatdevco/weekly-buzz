import { css } from '@emotion/react'
import '@fontsource/poppins'

const globalStyles = css`
  :root {
    --color-primary: #2ADE93;
    --color-secondary: #F32764;
    --color-dark: #14062D;
    --color-med: #838383;
    --color-light: #FBFCFE;
    --border-radius: 3px;
    --transition: all 0.3s ease-in-out;
    --max-width: 1200px;
    --box-shadow: box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    background: var(--color-light);
    color: var(--color-dark);
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: var(--color-dark);
    text-decoration: none;
    text-transform: uppercase;
  }

  li {
    list-style: none;
  }

  img {
    width: 100%;
  }

  /* utility classes */
  .btn {
    display: inline-block;
    padding: 0.5rem 4rem;
    border: transparent;
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: var(--transition);
    outline: transparent;
    font-size: 1rem;
  }
`

export default globalStyles
