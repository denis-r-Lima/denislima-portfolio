import { createGlobalStyle } from "styled-components";

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
    width: 100%;
    font-family: ${(props) => props.theme.typography.fontFamily};
    background: ${(props) => props.theme.pallet.color.background};
    color: ${(props) => props.theme.typography.color}
  }

  a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
