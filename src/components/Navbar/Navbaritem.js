import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {Link as LinkS} from "react-scroll"
export const Nav = styled.nav`
  background: #000;
  height: 120px;
  // margin-top: -80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size; 1rem;
  position: sticky;
  top: 0;
  z-index:10;

  @media screen and (max-width: 960px) {
    transition: 0.5s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  z-index; 1;
  width: 100%
  padding: 0 25px;
  max-width: 1000px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  font-weight: bold;
  text-decoration: none;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuItem = styled.li`
  height: 120px;
  `;

export const NavLink = styled(LinkS)``;
