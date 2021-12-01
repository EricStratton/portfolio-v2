import React from 'react';

import Section from './../../components/Section';
import Column from './../../components/Column';
import SectionHeading from './../../components/SectionHeading';
import Card from './../../components/Card';
import {
  InfoWrapper,
  InfoColumnWrapper,
} from './InfoElements';

const InfoSection = () => {
  return (
    <>
      <Section>
        <InfoWrapper>
        <SectionHeading>About Me</SectionHeading>
          <InfoColumnWrapper>
            <Column third>
              <p>Test 1</p>
            </Column>
            <Column>
              <Card>
                <p>Test 2</p>
              </Card>
            </Column>
          </InfoColumnWrapper>
        </InfoWrapper>
      </Section>
    </>
  )
}

export default InfoSection;
