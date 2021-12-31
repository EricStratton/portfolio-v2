import React from 'react';

import Layout from './components/layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
