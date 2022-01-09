import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { useWindowSize } from '../../hooks/useWindowSize';

const ParallaxComponent = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if(size[0] < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return (
    <>
      <Parallax y={isMobile ? [-0, 0] : [-20, 20]} tagOuter='div'>
        {children}
      </Parallax>
    </>
  )
}

export default ParallaxComponent;
