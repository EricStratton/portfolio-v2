import React from 'react';

import {
  FadeInUpWrapper,
} from './FadeInUpElements';

const FadeInUp = ({ children }) => {

  return (
    <>
      <FadeInUpWrapper>
        {children}
      </FadeInUpWrapper>
    </>
  )
}

export default FadeInUp
