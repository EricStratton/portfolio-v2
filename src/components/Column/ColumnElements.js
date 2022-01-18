import styled from 'styled-components';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: auto;
  height: auto;
  padding: 0 .8em;
  margin-bottom: 4em;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-bottom: 3em;
    padding: 0 1em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 2em;
    width: ${({width}) => (width ? width : '100%')};
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    margin-bottom: 0;
  }
`;