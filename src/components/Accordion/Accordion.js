import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;

export const AccordionHead = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-height: 2em;
  margin-bottom: ${({ isOpen }) => (isOpen && '1em')};
`;

export const AccordionCodeIcon = styled.a`
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: ${props => props.theme.colors.dark};

  &:hover {
    transform: translate(0, -5px);
  }
`;

export const AccordionToggle = styled.div`
  display: flex;
  cursor: pointer;
  flex: 1;
  height: 100%;
`;

export const AccordionToggleIcon = styled.span`
  margin: auto 0 auto auto;
`;

export const AccordionBody = styled.div`
  flex: 1;
  padding: 0;
  margin: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
`;