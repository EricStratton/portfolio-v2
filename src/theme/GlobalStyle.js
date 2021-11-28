import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Rubik";
    src: asset-url("./../fonts/Rubik/Rubik-VariableFont_wght.ttf") format("truetype");
  }
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  body {
    line-height: 1;

    background: ${props => props.theme.colors.body};
  }
  h1, h2, h3, h4, h5, h6 {
  font-family: "Rubik", sans-serif;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
