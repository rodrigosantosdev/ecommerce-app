import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: black;
    font-size: 1rem;
    background-color: var(--white);
  }

  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`

