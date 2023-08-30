import { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.7em;
  z-index: 1;
  width: 100%;
  max-width: 80em;
  padding: 2em;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;

    font-size: 1.5em;
    color: ${({ theme }) => theme.colorWhite};
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2.5em;
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colorWhite};
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      width: 0;
      height: 5px;
      border-radius: 12px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.secondaryColor},
        ${({ theme }) => theme.tertiaryColor}
      );
      transform: translateX(-50%);
      transition: all 0.5s ease-in-out;
    }
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileNav = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  top: 0;
  right: 0;
  background-color: #d4b1f4;
  padding: 1em;
  width: 50%;
  transition: all 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const MobileNavLink = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.5s ease-in-out;
  color: ${({ theme }) => theme.textWhite};
  &:hover {
    color: blue;
  }
`;

const Navbar = () => {
  const [open, isOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <h2>AM</h2>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => isOpen(!open)} color="#fff" />
        </MobileIcon>

        <NavItems>
          <NavLink>About</NavLink>
          <NavLink>Skills</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contact</NavLink>
        </NavItems>
      </NavContainer>
      {open && (
        <MobileNav open={open}>
          <MobileNavLink>About</MobileNavLink>
          <MobileNavLink>Skills</MobileNavLink>
          <MobileNavLink>Projects</MobileNavLink>
          <MobileNavLink>Contact</MobileNavLink>
        </MobileNav>
      )}
    </Nav>
  );
};
export default Navbar;
