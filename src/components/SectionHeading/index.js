import React from 'react';

import FadeInUp from './../FadeInUp';
import {
  SectionH2Container,
  SectionH2,
  SectionH2Icon
} from './SectionHeadingElements';

const SectionHeading = ({ children, delay }) => {
  return (
    <>
      <FadeInUp delay={delay}>
        <SectionH2Container>
          <SectionH2>{children}</SectionH2>
          <SectionH2Icon />
        </SectionH2Container>
      </FadeInUp>
    </>
  )
}

export default SectionHeading;
