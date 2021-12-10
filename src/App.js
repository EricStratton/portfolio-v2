import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import "@fontsource/rubik";

import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/Theme';
import Layout from './components/layout';
import Home from './pages/Home';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <GlobalStyle />
          <Layout>
            <Home />
          </Layout>
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
