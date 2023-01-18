import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --white: #fff;
    --black: #282828;
    --gray: #898787;
    --graylight: #f9f9f9;
    --base-color: rgb(114,184,0);
    --base-color-dark: rgb(189 255 80);
    --rgba: rgb(237 237 237 / 80%);
    --border-color: #dadada;
    --shadow-color: #f9f9f9;
  }

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

