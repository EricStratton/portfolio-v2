import styled from 'styled-components';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: ${({third}) => (third ? '50%' : '100%')};
  height: auto;
`;