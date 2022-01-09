import React from 'react';

import Section from './../../components/Section';
import Column from './../../components/Column';
import SectionHeading from './../../components/SectionHeading';
import Card from './../../components/Card';
import FadeInUp from './../../components/FadeInUp';
import {
  InfoWrapper,
  InfoColumnWrapper,
  InfoDescriptionWrapper,
  InfoDescription,
  InfoImgWrapper,
  InfoImg,
} from './InfoElements';
import it_me from './../../assets/it_me.png';

const InfoSection = () => {
  return (
    <>
      <Section id={'about'}>
        <InfoWrapper>
          <SectionHeading delay={100}>About Me</SectionHeading>
          <InfoColumnWrapper>
            <Column width='50%'>
              <InfoImgWrapper>
                <InfoImg src={it_me} />
              </InfoImgWrapper>
            </Column>
            <Column>
              <Card>
                <InfoDescriptionWrapper>
                  <FadeInUp delay={100}>
                    <InfoDescription indent>In my day-to-day, I build and maintain short-lived SPA’s aimed to generate community engagement for local initiatives using WordPress and Javascript. In my spare time, I work on honing my skills in React.js – currently, I’m working on a headless application using WordPress and React.js to provide a faster, more modern solution to online community engagement.</InfoDescription>
                  </FadeInUp>
                  <FadeInUp delay={200}>
                    <InfoDescription>Outside of development, I have a passion for rock climbing in its various forms. Though I spend most of my time bouldering. One of the great things about living in the Northwest is the easy access to beautiful crags.</InfoDescription>
                  </FadeInUp>
                  <FadeInUp delay={300}>
                    <InfoDescription>I also like to spend time in local record shops, digging for the coolest old-school house music LPs. Music has always been, and will always be, a major driving force for me. On weekends, I like to attend events with friends and find sweet reprieve from my more cerebral programs of choice.</InfoDescription>
                  </FadeInUp>
                </InfoDescriptionWrapper>
              </Card>
            </Column>
          </InfoColumnWrapper>
        </InfoWrapper>
      </Section>
    </>
  )
}

export default InfoSection;
