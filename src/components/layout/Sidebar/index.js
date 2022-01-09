import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
} from './Sidebar';
import { NavButton as Button } from './../../Button';
import { navData } from './../../../data/navData';

const Sidebar = ({ click, handleClick }) => {
  return (
    <>
      <SidebarContainer click={click}>
        <SidebarWrapper>
          <SidebarMenu>
            {navData.map((item, index) => {
              return item.path === '/contact' ?
              <NavLink key={index} to={item.path} onClick={handleClick}>
                <Button>{item.title}</Button>
              </NavLink>
              :
              <SidebarItem key={index}>
                <SidebarLink 
                to={item.path}  
                onClick={handleClick}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-78}
                >
                  {item.title}
                </SidebarLink>
              </SidebarItem>
            })}
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;
