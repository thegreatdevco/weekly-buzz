import { css } from '@emotion/react'
import '@fontsource/poppins'
import '@fontsource/poppins/900.css'

const globalStyles = css`
  :root {
    --color-primary: #2ade93;
    --color-secondary: #f32764;
    --color-dark: #14062d;
    --color-med: #838383;
    --color-light: #fbfcfe;
    --border-radius: 3px;
    --transition: all 0.3s ease-in-out;
    --max-width: 1200px;
    --shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    --shadow-light: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 0.5;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  /* utility classes */
  .page {
    margin: 4rem 0;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 4rem;
    border: transparent;
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: var(--transition);
    outline: transparent;
    font-size: 1rem;
    margin-top: 2rem;
  }

  .btn-secondary {
    background: var(--color-secondary);
    color: var(--color-light);

    &:hover {
      background: transparent;
      box-shadow: var(--shadow);
      color: var(--color-dark);
    }
  }
`

export default globalStyles
