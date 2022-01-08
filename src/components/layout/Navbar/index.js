import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdArrowForward, MdArrowBack } from 'react-icons/md';

import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLink,
  MobileNav,
  PageLinkWrapper,
  PageLink,
} from './NavElements';
import { useScrollPosition } from './../../../hooks/useScrollPosition';
import { useWindowSize } from './../../../hooks/useWindowSize';
import { NavButton as Button } from './../../Button';

const Navbar = () => {
  const scrollPostition = useScrollPosition();
  const [scrollDown, setScrollDown] = useState(false);
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();
  const [isContact, setIsContact] = useState(false);
  const location = useLocation();  
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if(location.pathname === '/contact') {
      setIsContact(true);
    } else {
      setIsContact(false);
    }
  }, [location]);

  useEffect(() => {
    if(size[0] < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  useEffect(() => {
    if(isMobile) {
      return;
    }
    if (scrollPostition.scrollDirection === 'down') {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  }, [isMobile, scrollPostition]);

  const handleClick = () => setClick(!click);

  const handleOnHover = () => setHover(!hover);

  return (
    <>
      <Nav scrollDown={scrollDown}>
        <NavContainer>
          {isContact ?
            <PageLinkWrapper>
              <PageLink
                to='/'
              ><Button
                  onMouseEnter={handleOnHover}
                  onMouseLeave={handleOnHover}
              >{ hover ? <MdArrowBack /> : <MdKeyboardArrowLeft /> } Home</Button></PageLink>
            </PageLinkWrapper>
          :
            !isMobile ?
            <>
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
                <PageLinkWrapper>
                  <PageLink 
                    to='/contact'
                  ><Button
                      onMouseEnter={handleOnHover}
                      onMouseLeave={handleOnHover}                
                    >Contact me  { hover ? <MdArrowForward /> : <MdKeyboardArrowRight /> }</Button>
                  </PageLink>
                </PageLinkWrapper>
              </>
              :
              <MobileNav onClick={handleClick}>
                { click ? <FaTimes /> : <FaBars /> }
              </MobileNav>
          }
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;
