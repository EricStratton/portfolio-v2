import styled from 'styled-components';
import { IoSchoolOutline, IoBriefcaseOutline } from 'react-icons/io5';

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExperienceColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    flex-direction: row;
  }
`;

export const ExperienceTimelineContainer = styled.div`
  position: relative;
  margin-bottom: 2em;
`;

export const ExperienceTimelineTextContainer = styled.div`
  padding-left: 4em;
  position: relative;

  h3 {
    margin-bottom: 0.2em;
  }
  .dates {
    opacity: 0.7;
    margin-bottom: 0.4em;
  }
`;

export const SchoolIcon = styled(IoSchoolOutline)`
  position: absolute;
  font-size: 1.5rem;
  top: 0px;
  left: -11px;
`;

export const WorkIcon = styled(IoBriefcaseOutline)`
  position: absolute;
  font-size: 1.5rem;
  top: 0px;
  left: -11px;
`;  

export const ExperienceTimeline = styled.span`
  position: absolute;
  background-color: black;
  width: 2px;
  top: 30px;
  bottom: 30px;
`;