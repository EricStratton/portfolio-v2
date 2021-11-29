import React from 'react';
import { CardContainer, CardWrapper } from './CardElements';

const Card = ({ children }) => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          {children}
        </CardWrapper>
      </CardContainer>
    </>
  )
}

export default Card;
