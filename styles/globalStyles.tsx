import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html{
    box-sizing: border-box;
    font-size: 62.5%; 

    @media only screen and (max-width: 700px){
      font-size: 50%
    }

    @media only screen and (max-width: 450px){
      font-size: 32%
    }
  }

  body {
    background:  #f5f5dc;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a {
  color: inherit;
  text-decoration: none;
}
`

export default GlobalStyle
