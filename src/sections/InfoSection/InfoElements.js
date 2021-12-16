import styled from 'styled-components';
import { BsRecordCircleFill, BsCode } from 'react-icons/bs';
import { FaMountain } from 'react-icons/fa';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoColumnWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const InfoDescriptionWrapper = styled.div`
  flex-grow: 1;
`;

export const InfoDescription = styled.p`
  margin-bottom: 1em;
  text-indent: ${({indent}) => (indent ? '5%' : 0 )};
`;

export const InfoIconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2.5rem;
  padding: 0 2em;
`;

export const RecordIcon = styled(BsRecordCircleFill)`
  
`;

export const CodeIcon = styled(BsCode)`

`;

export const MountainIcon = styled(FaMountain)`

`;