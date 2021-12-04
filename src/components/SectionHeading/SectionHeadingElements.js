import styled from 'styled-components';
import { IoLogoTableau } from 'react-icons/io5'; 

export const SectionH2Container = styled.div`
  position: relative;
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