import React from 'react';

import Section from './../../components/Section';
import Column from './../../components/Column';
import {
  InfoWrapper,
  InfoHeading,
  InfoColumnWrapper,
} from './InfoElements';

const InfoSection = () => {
  return (
    <>
      <Section>
        <InfoWrapper>
        <InfoHeading>About Me</InfoHeading>
          <InfoColumnWrapper>
            <Column>
              <p>Test 1</p>
            </Column>
            <Column>
              <p>Test 2</p>
            </Column>
          </InfoColumnWrapper>
        </InfoWrapper>
      </Section>
    </>
  )
}

export default InfoSection;
