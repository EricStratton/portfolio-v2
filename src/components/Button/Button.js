import styled from 'styled-components';

const StyledButton = styled.button`
  flex: 1;
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.body};
  border: transparent;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 0.3em 0.5em;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 auto;
  font-family: inherit;
`;

export const ForSubmit = styled(StyledButton)`
  &:hover {
    background-color: ${props => props.theme.colors.dark};
    transform: translate(0, -5px);
    box-shadow: 0 5px 20px 0 rgb(69 67 96 / 10%);
  }
`;

export const ForNav = styled(StyledButton)`
  &:hover {
    transition: all 0.4s ease-in-out;
    transform: scale(1.04); 
  }
`;