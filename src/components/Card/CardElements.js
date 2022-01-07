import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgb(69 67 96 / 10%);
  margin-bottom: 5em;
  width: ${({width}) => (width ? width : 'auto')};
  background-color: ${props => props.theme.colors.body};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-bottom: 4em;
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 3em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    margin-bottom: 2em;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2em;
`;