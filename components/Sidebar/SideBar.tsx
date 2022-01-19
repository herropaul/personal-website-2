import React, { useState } from 'react';
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks} from './SideBarElements';

const SideBar = () => {
    return(
        <>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>PN</NavLogo>
              <NavMenu>
                <NavItem>
                  <NavLinks to="about">About</NavLinks>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </>
    );
}

export default SideBar;