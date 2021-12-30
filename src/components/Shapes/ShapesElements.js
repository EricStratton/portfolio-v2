import styled from 'styled-components';

export const ShapesContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: none;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    display: block;
  }
`;