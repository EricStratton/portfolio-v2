import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  html {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    line-height: 1;

    background: ${props => props.theme.colors.body};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Rubik";
    font-weight: 700;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.7rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
