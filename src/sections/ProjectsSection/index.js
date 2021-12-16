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

            </Card>
          </Column>
        </ProjectsColumnWrapper>
        <ProjectsColumnWrapper>
          <Column>
            <Card>

            </Card>
          </Column>
          <Column>
              <FadeInUp delay={300}>
                <ProjectsTextWrapper>
                  <ProjectsHeading>Paro</ProjectsHeading>
                  <ProjectsDescription>Paro exists to bridge the preferential rift between analog and digital listening. Paro allows users to discover new music digitally to connect with physically.</ProjectsDescription>
                </ProjectsTextWrapper>
              </FadeInUp>
          </Column>
        </ProjectsColumnWrapper>
      </ProjectsWrapper>
    </Section>
  )
}

export default ProjectsSection;