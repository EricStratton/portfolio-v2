import styled from 'styled-components';
import { Link } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  background-color: ${props => props.theme.colors.dark};
  top: 3.5em;
  display: block;
  transition: 0.3s ease-in-out;
  right: ${({click}) => (click ? 0 : '-100%')};
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 2em;
`;

export const SidebarMenu = styled.ul`
  color: ${props => props.theme.colors.body};
`;

export const SidebarItem = styled.li`
  height: 100%;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;

  &.active {
    -webkit-tap-highlight-color: transparent;
  }
`;