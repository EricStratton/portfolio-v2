import React, { useState } from 'react';

import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLink,
} from './NavElements';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { useEffect } from 'react/cjs/react.development';

const Navbar = () => {
  const scrollPostition = useScrollPosition();
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    if(scrollPostition.scrollDirection === 'down') {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  }, [scrollPostition]);

  return (
    <>
      <Nav scrollDown={scrollDown}>
        <NavContainer>
          <NavMenu>
            <NavItem>
              <NavLink 
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={78}
              >About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='experience'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={78}
              >Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={78}
              >Projects</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;
