import React from 'react';
import { ThemeProvider } from 'styled-components';
import "@fontsource/rubik";

import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/Theme';
import Layout from './components/layout';
import Home from './pages/Home';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
