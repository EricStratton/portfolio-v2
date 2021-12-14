import React, { useState, useEffect } from 'react';

import {
  FadeInUpWrapper,
} from './FadeInUpElements';

const FadeInUp = ({ children, delay }) => {
  const [opacity, setOpacity] = useState(0);

  const changeOpacity = () => {
    setOpacity(1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      changeOpacity();
    }, 1200 + delay); // needs to run the duration of the animation not the duration of the delay // or maybe the duration of the animation PLUS the duration of the delay
    return () => clearTimeout(timer);
  }, [delay])


  return (
    <>
      <FadeInUpWrapper delay={delay} opacity={opacity}>
        {children}
      </FadeInUpWrapper>
    </>
  )
}

export default FadeInUp;
