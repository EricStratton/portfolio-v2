import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import { useWindowSize } from './../../hooks/useWindowSize';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    if(size[0] < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return (
    <>
      { isMobile && <Sidebar click={click} handleClick={handleClick} /> }
      <Navbar isMobile={isMobile} click={click} handleClick={handleClick} />
        {children}
      <Footer />
    </>
  )
}

export default Layout;
