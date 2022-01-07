import styled from 'styled-components';

export const StyledButton = styled.button`
  flex: 1;
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

  &:hover {
    background-color: ${props => props.theme.colors.dark};
    transform: translate(0, -5px);
    box-shadow: 0 5px 20px 0 rgb(69 67 96 / 10%);
  }
`;