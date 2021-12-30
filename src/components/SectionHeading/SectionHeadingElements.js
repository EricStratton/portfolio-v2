import styled from 'styled-components';
import { IoLogoTableau } from 'react-icons/io5'; 

export const SectionH2Container = styled.div`
  position: relative;
  margin-bottom: 6em;
  margin-left: 2em;
  overflow: hidden;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin: 4em 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin: 3em 0;
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    margin: 2em 0;
  }
`;

export const SectionH2 = styled.h2`
  margin-bottom: 1.2em;
`;

export const SectionH2Icon = styled(IoLogoTableau)`
  position: absolute;
  font-size: 2rem;
  top: -10px;
  left: -20px;
  opacity: 0.1;
`;