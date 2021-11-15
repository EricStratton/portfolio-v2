import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/Theme';
import Layout from './components/layout';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>

        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
