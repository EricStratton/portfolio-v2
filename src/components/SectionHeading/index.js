import React from 'react';

import {
  SectionH2Container,
  SectionH2,
  SectionH2Icon
} from './SectionHeadingElements';

const SectionHeading = ({ children }) => {
  return (
    <>
      <SectionH2Container>
        <SectionH2>{children}</SectionH2>
        <SectionH2Icon />
      </SectionH2Container>
    </>
  )
}

export default SectionHeading;
