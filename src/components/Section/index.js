import React from 'react';

import { SectionContainer, SectionWrapper } from './SectionElements';

const Section = ({ children }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        {children}
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Section;
