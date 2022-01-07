import React from 'react';
import ParallaxComponent from './../Parallax';

import { CardContainer, CardWrapper } from './CardElements';

const Card = ({ children, width }) => {
  return (
    <>
      <ParallaxComponent>
        <CardContainer width={width}>
          <CardWrapper>
            {children}
          </CardWrapper>
        </CardContainer>
      </ParallaxComponent>
    </>
  )
}

export default Card;
