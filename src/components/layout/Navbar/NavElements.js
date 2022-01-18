import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { NavLink as NavLinkR } from 'react-router-dom';


export const Nav = styled.nav`
  background: ${props => props.theme.colors.dark};
  height: 3.5em;
  display: flex;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.body};
  top: ${({scrollDown}) => (scrollDown ? '-3.5em' : 0)};
  transition: top 0.5s ease-in-out;
  position: sticky;
  z-index: 99;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  max-width: ${props => props.theme.width.max};
  margin: 0 auto;
  padding: 0 3.5em;
  height: inherit;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  align-items: center;
  height: 100%;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  height: 100%;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavLink = styled(LinkS)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover,
  &.active {
    border-bottom: 3px solid ${props => props.theme.colors.primary};
    -webkit-tap-highlight-color: transparent;
  }
`;

export const PageLinkWrapper = styled.li`
marker: none;
  position: absolute;
  right: 5%;
`;

export const MobileNav = styled.div`
  position: absolute;
  right: 5%;

  svg {
    font-size: 2rem;
    color: ${props => props.theme.colors.body};
  }
`;

export const PageLink = styled(NavLinkR)`
  color: ${props => props.theme.colors.body};
`
