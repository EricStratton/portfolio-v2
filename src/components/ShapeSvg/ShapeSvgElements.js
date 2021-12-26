import styled from 'styled-components';

export const Svg = styled.svg.attrs(props => ({
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  'data-speed': props.dataSpeed
}))`
  height: 3%;
  width: 3%;
  overflow: visible;
  position: absolute;
  filter: drop-shadow(2px 4px 2px #64403E);
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
`;

