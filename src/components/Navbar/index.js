import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './Navbaritem'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            hello
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar