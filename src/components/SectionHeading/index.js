import React from 'react';

import {
  SectionH2,
} from './SectionHeadingElements';

const SectionHeading = ({ children }) => {
  return (
    <>
      <SectionH2>{children}</SectionH2>
    </>
  )
}

export default SectionHeading;
