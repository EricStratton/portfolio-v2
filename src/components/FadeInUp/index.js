import React from 'react';

import {
  FadeInUpWrapper,
} from './FadeInUpElements';

const FadeInUp = ({ children, delay }) => {

  return (
    <>
      <FadeInUpWrapper delay={delay}>
        {children}
      </FadeInUpWrapper>
    </>
  )
}

export default FadeInUp
