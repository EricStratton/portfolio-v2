import React from 'react';

import Section from './../../components/Section';
import Column from './../../components/Column';
import SectionHeading from './../../components/SectionHeading';
import Card from './../../components/Card';
import FadeInUp from './../../components/FadeInUp';
import {
  ExperienceWrapper,
  ExperienceColumnWrapper,
  ExperienceTimelineContainer,
  ExperienceTimelineTextContainer,
  SchoolIcon,
  WorkIcon,
  ExperienceTimeline,
} from './ExperienceElements';

const ExperienceSection = () => {
  return (
    <>
      <Section id={'experience'}>
        <ExperienceWrapper>
          <SectionHeading delay={100}>Experience</SectionHeading>
          <ExperienceColumnWrapper>
            <Column>
              <Card>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <p className='dates'>2014 - 2019</p>
                      <h3>Western Washington University</h3>
                      <p>Bachelor's Degree</p>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <SchoolIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <p className='dates'>2020 - 2021</p>
                      <h3>Epicodus</h3>
                      <p>Certificate in Web & Moble Development</p>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <SchoolIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimeline />
              </Card>
            </Column>
            <Column>
              <Card>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <p className='dates'>2021 - 2021</p>
                      <h3>GiftRibbn</h3>
                      <p>Web Developer</p>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <WorkIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimelineContainer>
                  <ExperienceTimelineTextContainer>
                    <FadeInUp delay={100}>
                      <p className='dates'>2021 - Current</p>
                      <h3>EnviroIssues</h3>
                      <p>Web Developer</p>
                    </FadeInUp>
                  </ExperienceTimelineTextContainer>
                  <WorkIcon />
                </ExperienceTimelineContainer>
                <ExperienceTimeline />
              </Card>
            </Column>
          </ExperienceColumnWrapper>
        </ExperienceWrapper>
      </Section>
    </>
  )
}

export default ExperienceSection;
