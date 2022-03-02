import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavMenuItem, NavLink, DropdownIcon} from './Navbaritem'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer> 
          <NavLogo to="/">
            hello
          </NavLogo>
          <DropdownIcon>
            <FaBars/>
            </DropdownIcon>
          <NavMenu>
            <NavMenuItem>
            <NavLink to="about">About</NavLink>
            </NavMenuItem>
            <NavMenuItem>
            <NavLink to="about">Skills</NavLink>
            </NavMenuItem>
            <NavMenuItem>
            <NavLink to="about">Projects</NavLink>
            </NavMenuItem>
            <NavMenuItem>
            <NavLink to="about">Education</NavLink>
            </NavMenuItem>
            
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar