import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
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
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
