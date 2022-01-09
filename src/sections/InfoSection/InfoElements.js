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
  width: 21em;
  height: 21em;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: block;
  margin: auto; 
  overflow: hidden;
  padding-top: 0.5em;
  position: relative;
  box-shadow: 0 5px 20px 0 rgb(69 67 96 / 10%);
`;

export const InfoImg = styled.img`
  position: absolute;
  top: 5;
`;