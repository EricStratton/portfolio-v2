import styled  from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  max-width: 76.5em;
  align-items: center;
  min-width: ${props => props.theme.width.min};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    min-height: 50em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    min-height: 60em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    min-height: 75em;
    margin: 0 auto;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2em 0;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 2em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 3em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    padding: 4em;
  }
`;