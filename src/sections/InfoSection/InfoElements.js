import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoColumnWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    flex-direction: row;
  }
`;

export const InfoDescriptionWrapper = styled.div`
  flex-grow: 1;
`;

export const InfoDescription = styled.p`
  margin-bottom: 1em;
  text-indent: ${({indent}) => (indent ? '5%' : 0 )};
`;

export const InfoImgWrapper = styled.figure`
  width: 18em;
  height: 18em;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: block;
  margin: auto; 
  overflow: hidden;
  padding-top: 0.5em;
  position: relative;
  box-shadow: 0 5px 20px 0 rgb(69 67 96 / 10%);
  
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 19em;
    height: 19em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    width: 20em;
    height: 20em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    width: 21em;
    height: 21em;
  }
`;

export const InfoImg = styled.img`
  position: absolute;
  top: 25px;
  left: -20px;
  
  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    left: 5px;
  }
`;