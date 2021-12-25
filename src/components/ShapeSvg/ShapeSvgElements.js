import styled from 'styled-components';

export const Svg = styled.svg.attrs(props => ({
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  'data-speed': props.dataSpeed
}))`
  height: 5%;
  width: 5%;
  overflow: visible;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};

  /* top: 0;
  left: 0; */
`;

