import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --color-primary: #2ADE93;
    --color-secondary: #F32764;
    --color-dark: #14062D;
    --color-med: #838383;
    --color-light: #FBFCFE;
    --border-radius: 10px;
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
    letter-spacing: 2px;
    font-family: 'Poppins', sans-serif;
  }
`

export default globalStyles
