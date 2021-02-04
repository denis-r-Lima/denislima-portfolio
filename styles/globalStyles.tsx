import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html{
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 62.5%; 
    @media only screen and (max-width: 770px){
      font-size: 40%
    }
    @media only screen and (max-width: 450px){
      font-size: 50%
    }

  }

  body {
    @media only screen and (max-width: 450px){
      background: #FCF7F8;
    }
    width: 100vw;
    background: #E5E5EA;
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
  color: inherit;
  text-decoration: none;
}
`

export default GlobalStyle
