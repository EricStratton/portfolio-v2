import React from 'react';

import {
  ColumnContainer,
} from './ColumnElements';

const Column = ({ children, third }) => {
  return (
    <>
      <ColumnContainer third={third}>
        {children}
      </ColumnContainer>
    </>
  )
}

export default Column;
