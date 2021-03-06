import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProjectsColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    margin-bottom: 1em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    margin-bottom: 2.5em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
    margin-bottom: 4em;
  }
`; 

export const ProjectsTextWrapper = styled.div`
  width: 80%;
`;

export const ProjectsHeading = styled.h3`
  margin-bottom: 1em;
`;

export const ProjectsDescription = styled.p`
  line-height: 1.4;
`;