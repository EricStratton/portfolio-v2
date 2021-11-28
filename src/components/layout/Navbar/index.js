import React from 'react';

import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLink,
} from './NavElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavMenu>
            <NavItem>
              <NavLink to='/'>Navbar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Navbar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Navbar</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;
