import styled from 'styled-components';

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