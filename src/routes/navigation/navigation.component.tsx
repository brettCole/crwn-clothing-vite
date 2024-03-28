/// <reference types="vite-plugin-svgr/client" />
import CrwnLogo from "../../assets/crown.svg?react";

import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer
} from './navigation.styles';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          
        </NavLinks>
        <Outlet />
      </NavigationContainer>
    </>
  )
}

export default Navigation;