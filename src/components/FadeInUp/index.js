import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import {
  FadeInUpWrapper,
} from './FadeInUpElements';

const FadeInUp = ({ children, delay, initialInView }) => {
  const [inView, setInView] = useState(initialInView ? true : false);

  return (
    <>
      <InView 
      onChange={setInView}
      threshold={0.2}
      initialInView={initialInView}
      triggerOnce>
        <FadeInUpWrapper className={inView ? 'fade-up-in' : ''} delay={delay}>
          {children}
        </FadeInUpWrapper>
      </InView>
    </>
  )
}

export default FadeInUp;
