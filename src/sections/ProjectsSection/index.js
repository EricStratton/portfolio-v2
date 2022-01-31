import React from 'react';

import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Column from '../../components/Column';
import Card from '../../components/Card';
import FadeInUp from '../../components/FadeInUp';
import {
  ProjectsWrapper,
  ProjectsColumnWrapper,
  ProjectsTextWrapper,
  ProjectsHeading,
  ProjectsDescription,
} from './ProjectsElements';
import Accordion from '../../components/Accordion';
import LazyVideo from '../../components/LazyVideo';
import Paro from './../../assets/paro.mp4';
import FindWax from './../../assets/findWax.mp4';


const ProjectsSection = () => {
  return (
    <Section id={'projects'}>
      <ProjectsWrapper>
        <SectionHeading delay={100}>Projects</SectionHeading>
        <ProjectsColumnWrapper>
          <Column>
              <ProjectsTextWrapper>
                <FadeInUp delay={200}>
                  <ProjectsHeading>FindWax</ProjectsHeading>
                  <ProjectsDescription>FindWax is a mobile app designed to locate nearby record stores. Built using Expo, FindWax aims to simplify and streamline record store discovery in new cities.</ProjectsDescription>
                </FadeInUp>
              </ProjectsTextWrapper>
          </Column>
          <Column>
            <Card>
              <Accordion
                link='https://github.com/EricStratton/find-wax'
              >
                <LazyVideo video={FindWax} />
              </Accordion>
            </Card>
          </Column>
        </ProjectsColumnWrapper>
        <ProjectsColumnWrapper reverse>
          <Column>
              <FadeInUp delay={300}>
                <ProjectsTextWrapper>
                  <ProjectsHeading>Paro</ProjectsHeading>
                  <ProjectsDescription>Paro exists to bridge the preferential rift between analog and digital listening. Paro allows users to discover new music digitally to connect with physically.</ProjectsDescription>
                </ProjectsTextWrapper>
              </FadeInUp>
          </Column>
          <Column>
            <Card>
              <Accordion
                link='https://github.com/EricStratton/paro-team-week'
              >
                <LazyVideo video={Paro} />
              </Accordion>
            </Card>
          </Column>
        </ProjectsColumnWrapper>
      </ProjectsWrapper>
    </Section>
  )
}

export default ProjectsSection;