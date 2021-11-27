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
              <NavLink>Navbar</NavLink>
            </NavItem>
            <NavItem>Navbar</NavItem>
            <NavItem>Navbar</NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;
