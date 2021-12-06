import React from 'react';
import ParallaxComponent from './../Parallax';

import { CardContainer, CardWrapper } from './CardElements';

const Card = ({ children }) => {
  return (
    <>
      <ParallaxComponent>
        <CardContainer>
          <CardWrapper>
            {children}
          </CardWrapper>
        </CardContainer>
      </ParallaxComponent>
    </>
  )
}

export default Card;
