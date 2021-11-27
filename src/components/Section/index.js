import React from 'react';

import { SectionContainer } from './SectionElements';

const Section = ({ children }) => {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  )
}

export default Section;
