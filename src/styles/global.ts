import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    
    --base: #2B2841;
    --base-dark: #1B182D;
    --rgba: rgb(237 237 237 / 80%);
    
    
    --bg-button: #FD757A;
    --bg-button-hover: #EE68A6;
    --border-color: #dadada;
    --shadow-color: #f9f9f9;

    --white: #fff;
    --black: #282828;
    --red: #E81123;
    --gray900: #898787;
    --gray100: #f9f9f9;
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

