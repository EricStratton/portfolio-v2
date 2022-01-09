import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  display: flex;
  height: 5em;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  color: ${props => props.theme.colors.body};
  cursor: pointer;
`;