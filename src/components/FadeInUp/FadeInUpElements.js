import styled, { keyframes } from 'styled-components';

const FadeInUpAnimation = keyframes`
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const FadeInUpWrapper = styled.div`
  opacity: 0;
  
  &.fade-up-in {
    animation: ${FadeInUpAnimation} 1.2s linear ${props => props.delay + 'ms'};
    animation-fill-mode: forwards;
  }
`;
