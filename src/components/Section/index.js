import React from 'react';

import { SectionContainer, SectionWrapper } from './SectionElements';

const Section = ({ children, id }) => {
  return (
    <SectionContainer id={id}>
      <SectionWrapper>
        {children}
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Section;
