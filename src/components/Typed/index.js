import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import {
  TypedWrapper
} from './TypedElements';

const Typed = ({ string, pause }) => {
  const [finished, setFinished] = useState(false);

  const handleWhenFinished = () => {
    setFinished(!finished);
  }

  return (
    <>
      <TypedWrapper finished={finished}>
        <Typewriter cursorClassName='cursor'
          onInit={(typewriter) => {
            typewriter
            .pauseFor(pause)
            .typeString(string)
            .callFunction(handleWhenFinished)
            .start();
          }}
        />
      </TypedWrapper>
    </>
  )
}

export default Typed;
