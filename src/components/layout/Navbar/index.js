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
              <NavLink 
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='experience'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Projects</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;
