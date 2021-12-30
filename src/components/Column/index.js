import React from 'react';

import {
  ColumnContainer,
} from './ColumnElements';

const Column = ({ children, width }) => {
  return (
    <>
      <ColumnContainer width={width}>
        {children}
      </ColumnContainer>
    </>
  )
}

export default Column;
