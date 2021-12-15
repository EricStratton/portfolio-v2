import React from 'react';

import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Column from '../../components/Column';
import Card from '../../components/Card';
import {
  ProjectsWrapper,
  ProjectsColumnWrapper,
} from './ProjectsElements';

const ProjectsSection = () => {
  return (
    <Section>
      <ProjectsWrapper>
        <SectionHeading delay={100}>Projects</SectionHeading>
        <ProjectsColumnWrapper>
          <Column>

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

          </Column>
        </ProjectsColumnWrapper>
      </ProjectsWrapper>
    </Section>
  )
}

export default ProjectsSection;
