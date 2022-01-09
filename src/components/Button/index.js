import React from 'react';

import { ForSubmit, ForNav } from './Button';

export const SubmitButton = ({ children }) => {
  return (
    <ForSubmit type='submit'>{children}</ForSubmit>
  )
}

export const NavButton = ({ children, onMouseEnter, onMouseLeave }) => {
  return (
    <ForNav
      type='button'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      transparent
    >{children}</ForNav>
  )
}