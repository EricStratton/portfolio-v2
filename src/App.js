import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
