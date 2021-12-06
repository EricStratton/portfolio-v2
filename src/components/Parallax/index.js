import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxComponent = ({ children }) => {
  return (
    <>
      <Parallax y={[-20, 20]} tagOuter='div'>
        {children}
      </Parallax>
    </>
  )
}

export default ParallaxComponent;
