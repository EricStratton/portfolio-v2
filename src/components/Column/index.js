import React from 'react';

import {
  ColumnContainer,
} from './ColumnElements';

const Column = ({ children }) => {
  return (
    <>
      <ColumnContainer>
        {children}
      </ColumnContainer>
    </>
  )
}

export default Column;
