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
import { NavButton as Button } from './../../Button';
import { navData } from './../../../data/navData';

const Navbar = ({ isMobile, click, handleClick }) => {
  const [scrollDown, setScrollDown] = useState(false);
  const scrollPostition = useScrollPosition();
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
    if(isMobile) {
      return;
    }
    if(scrollPostition.scrollDirection === 'down') {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  }, [isMobile, scrollPostition]);

  const handleOnHover = () => setHover(!hover);

  return (
    <>
      <Nav scrollDown={scrollDown}>
        <NavContainer>
          {isContact ?
            <NavMenu>
              <PageLinkWrapper>
                <PageLink
                  to='/'
                ><Button
                    onMouseEnter={handleOnHover}
                    onMouseLeave={handleOnHover}
                >{ hover ? <MdArrowBack /> : <MdKeyboardArrowLeft /> } Home</Button></PageLink>
              </PageLinkWrapper>
            </NavMenu>
          :
            !isMobile ?
            <>
              <NavMenu>
                {navData.map((item, index) =>  {
                  return item.path === '/contact' ?
                    <PageLinkWrapper key={index}>
                      <PageLink 
                        to={item.path}
                      ><Button
                          onMouseEnter={handleOnHover}
                          onMouseLeave={handleOnHover}                
                        >{item.title}  { hover ? <MdArrowForward /> : <MdKeyboardArrowRight /> }</Button>
                      </PageLink>
                    </PageLinkWrapper>
                :
                    <NavItem key={index}>
                      <NavLink
                        to={item.path}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={78}
                      >{item.title}</NavLink>
                    </NavItem>
                  })}
                </NavMenu>
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
