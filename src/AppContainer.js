import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import "@fontsource/rubik";

import App from './../src/App';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/Theme';

const AppContainer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <GlobalStyle />
          <App />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  )
}

export default AppContainer
