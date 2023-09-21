import { styled } from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

import footerRectangle from "../../images/footerRectangle.png";

const FooterContainer = styled.div`
  background: url(${footerRectangle}) top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding-top: 2em;

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
    gap: 3em;
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
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2em;

  @media screen and (min-width: 500px) {
    gap: 3em;
  }
`;

const FooterIconLink = styled.a`
  transition: all 0.5s ease-in-out;
  color: #7e908e;
  &:hover {
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -1em;
  gap: 0.2em;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.secondaryColor},
    ${({ theme }) => theme.tertiaryColor}
  );

  color: transparent;
`;

const TradeMark = styled.div`
  display: flex;
  gap: 0.2em;
  justify-content: center;
  align-items: center;
  color: #7e908e;
  margin: 0;
  font-size: 0.8em;
`;

const IconColor = "#7E908E";

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
      <Container>
        <TradeMark>
          <FaRegCopyright size={14} color={IconColor} /> 2023, Abdulahi
          Muhammed. all rights reserved.
        </TradeMark>
        <Line />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
