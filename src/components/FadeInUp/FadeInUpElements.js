import styled, { keyframes } from 'styled-components';

const FadeInUpAnimation = keyframes`
  from {
    transform: translate3d(0, 40px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const FadeInUpWrapper = styled.div.attrs(props => ({
  delay: props.delay,
  opacity: props.opacity,
}))`
  animation: ${FadeInUpAnimation} 1.2s linear ${props => props.delay + 'ms'};
  opacity: ${props => props.opacity};
`;
