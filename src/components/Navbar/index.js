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
  transition: all 0.5s ease-in-out;
  position: relative;

  &:hover {
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.secondaryColor},
      ${({ theme }) => theme.tertiaryColor}
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

const MobileNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  background-color: #d4b1f4;
  width: 50%;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 1;
`;

const MobileNavLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  font-size: 1.3em;
  margin-top: 3em;
`;

const MobileNavLink = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.5s ease-in-out;
  color: ${({ theme }) => theme.textWhite};
`;

const CloseButton = styled.button`
  align-self: start;
  background: none;
  border: none;
  font-size: 3em;
  color: #fff;
  padding-left: 0.5em;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CloseMobileNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <h2>AM</h2>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={CloseMobileNav} color="#fff" />
        </MobileIcon>

        <NavItems>
          <NavLink>About</NavLink>
          <NavLink>Skills</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contact</NavLink>
        </NavItems>
      </NavContainer>
      {isOpen && (
        <MobileNav open={isOpen}>
          <CloseButton onClick={CloseMobileNav}>&times;</CloseButton>

          <MobileNavLinks>
            <MobileNavLink>About</MobileNavLink>
            <MobileNavLink>Skills</MobileNavLink>
            <MobileNavLink>Projects</MobileNavLink>
            <MobileNavLink>Contact</MobileNavLink>
          </MobileNavLinks>
        </MobileNav>
      )}
    </Nav>
  );
};
export default Navbar;
