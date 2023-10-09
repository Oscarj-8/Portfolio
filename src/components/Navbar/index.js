import { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  top: 0;
  z-index: 2;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0em 1em;
  @media screen and (min-width: 500px) {
    padding: 0 2em;
  }

  @media screen and (min-width: 994px) {
    padding: 0 5em;
  }

  @media screen and (min-width: 1500) {
    padding: 0 7em;
  }

  @media screen and (min-width: 1400px) {
    padding: 0 10em;
  }

  @media screen and (min-width: 1800px) {
    padding: 0 13em;
  }
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

const NavLink = styled(ScrollLink)`
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
  background-color: ${({ theme }) => theme.bg};
  width: 80%;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 1;
  box-shadow: -10px 1px 20px rgba(0, 0, 0, 0.5);

  @media screen and ( 500px <= width <= 768px) {
    width: 60%;
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

const MobileNavLink = styled(ScrollLink)`
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
  cursor: pointer;
`;

const Navbar = ({ showNavLogoAndMobileIcons = true, showNavItems = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const CloseMobileNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <NavContainer>
        {showNavLogoAndMobileIcons && (
          <>
            <NavLogo>
              <h2>AM</h2>
            </NavLogo>
            <MobileIcon>
              <FaBars onClick={CloseMobileNav} color="#fff" />
            </MobileIcon>
          </>
        )}

        {showNavItems && (
          <NavItems>
            <NavLink to="/">About</NavLink>
            <NavLink to="skills" smooth={true} duration={1500}>
              Skills
            </NavLink>
            <NavLink to="projects" smooth={true} duration={1500}>
              Projects
            </NavLink>
            <NavLink to="contact" smooth={true} duration={1500}>
              Contact
            </NavLink>
          </NavItems>
        )}
      </NavContainer>
      {isOpen && (
        <MobileNav open={isOpen}>
          <CloseButton onClick={CloseMobileNav}>&times;</CloseButton>

          <MobileNavLinks>
            <MobileNavLink
              onClick={CloseMobileNav}
              to="/"
              smooth={true}
              duration={1500}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              onClick={CloseMobileNav}
              to="skills"
              smooth={true}
              duration={1500}
            >
              Skills
            </MobileNavLink>
            <MobileNavLink
              onClick={CloseMobileNav}
              to="projects"
              smooth={true}
              duration={1500}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              onClick={CloseMobileNav}
              to="contact"
              smooth={true}
              duration={1500}
            >
              Contact
            </MobileNavLink>
          </MobileNavLinks>
        </MobileNav>
      )}
    </Nav>
  );
};
export default Navbar;
