import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
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
    position: Absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5em;
    color: ${({ theme }) => theme.colorWhite};
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2em;
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colorWhite};
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <h2>AM</h2>
        </NavLogo>
        <MobileIcon></MobileIcon>

        <NavItems>
          <NavLink>About</NavLink>
          <NavLink>Skills</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contact</NavLink>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};
export default Navbar;
