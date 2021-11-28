import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background: ${props => props.theme.colors.dark};
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
`;

export const HeroImgRendered = styled.img`
  height: fit-content;
  object-fit: cover;
`;

export const HeroTextWrapper = styled.div`
  color: ${props => props.theme.colors.body};
  text-align: center;
`;

export const Name = styled.h1`
  margin-bottom: 0.5em;
`;

export const HeroDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: 1em;
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