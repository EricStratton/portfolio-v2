import styled, { keyframes } from 'styled-components';
import { HiOutlineCode } from 'react-icons/hi';

const breatheInAnimation = keyframes`
  0% {
    height: 25%; 
    width: 25%;
    opacity: 0;
  }
  50% {
    height: 80%;
    width: 80%;
  }
  100% {
    height: 64%;
    width: auto;
    opacity: 1;
  }
`;

export const HeroWrapper = styled.div`
  background: ${props => props.theme.colors.dark};
  position: relative;
`;

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroImgWrapper = styled.div`
  margin-bottom: 2em;
`;

export const HeroImgCircle = styled.div`
  background: ${props => props.theme.colors.primary};
  height: 200px;
  width: 200px; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8em;
`;

export const HeroCodeIcon = styled(HiOutlineCode)`
  color: ${props => props.theme.colors.body};
  animation: ${breatheInAnimation} 1s ease-in-out;
`;

export const HeroTextWrapper = styled.div`
  color: ${props => props.theme.colors.body};
  text-align: center;
  margin-bottom: 3em;

  h1 {
    margin-bottom: 0.3em;
  }

  p {
    font-size: ${props => props.theme.fontSizes.lg}; 
  }
`;

export const HeroIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroIconLink = styled.a`
  font-size: 2.5rem;
  padding: 0 0.3em;
  color: ${props => props.theme.colors.body};
`;