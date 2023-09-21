import { styled } from "styled-components";

import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin-bottom: 1em;

  @media screen and (min-width: 1200px) {
    gap: 3em;
  }
`;

const Abdulahi = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25em;
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: 600;
  letter-spacing: 1px;
`;

const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterNavItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5em;
  color: ${({ theme }) => theme.descriptionColor};
  text-align: center;

  @media screen and (min-width: 500px) {
    gap: 3.5em;
  }

  @media screen and (min-width: 500px) {
    gap: 5em;
  }
`;

const FooterNavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colorWhite};
  font-weight: 500;
  font-size: 1.125em;
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
    scale: 1.2;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2em;

  @media screen and (min-width: 500px) {
    gap: 3em;
  }

  @media screen and (min-width: 500px) {
    gap: 4em;
  }
`;

const FooterIconLink = styled.a`
  transition: all 0.5s ease-in-out;
  color: #7e908e;
  &:hover {
    transform: scale(1.2);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Abdulahi>Abdulahi Muhammed</Abdulahi>
      <FooterNav>
        <FooterNavItems>
          <FooterNavLink>About</FooterNavLink>
          <FooterNavLink>Skills</FooterNavLink>
          <FooterNavLink>Projects</FooterNavLink>
          <FooterNavLink>Contact</FooterNavLink>
        </FooterNavItems>
      </FooterNav>
      <SocialIcons>
        <FooterIconLink href="https://github.com/Oscarj-8">
          <FaGithub size={35} />
        </FooterIconLink>
        <FooterIconLink href="www.linkedin.com/in/abdulahi-muhammed-352851285">
          <FaLinkedin size={35} />
        </FooterIconLink>
        <FooterIconLink href="https://t.me/Osci_walker">
          <FaTelegramPlane size={35} />
        </FooterIconLink>
        <FooterIconLink href="https://t.me/Osci_walker">
          <FaTwitter size={35} />
        </FooterIconLink>
        <FooterIconLink href="https://t.me/Osci_walker">
          <FaInstagram size={35} />
        </FooterIconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
