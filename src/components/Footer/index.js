import { styled } from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { socialLinks } from "../../data/constants";
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

const FooterNavLink = styled(ScrollLink)`
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
          <FooterNavLink to="about" smooth={true} duration={1500}>
            About
          </FooterNavLink>
          <FooterNavLink to="skills" smooth={true} duration={1500}>
            Skills
          </FooterNavLink>
          <FooterNavLink to="projects" smooth={true} duration={1500}>
            Projects
          </FooterNavLink>
          <FooterNavLink to="contact" smooth={true} duration={1500}>
            Contact
          </FooterNavLink>
        </FooterNavItems>
      </FooterNav>
      <SocialIcons>
        <FooterIconLink href={socialLinks.github} target="_blank">
          <FaGithub size={35} />
        </FooterIconLink>
        <FooterIconLink href={socialLinks.linkedin} target="_blank">
          <FaLinkedin size={35} />
        </FooterIconLink>
        <FooterIconLink href={socialLinks.telegram} target="_blank">
          <FaTelegramPlane size={35} />
        </FooterIconLink>
        <FooterIconLink href="https://t.me/Osci_walker" target="_blank">
          <FaTwitter size={35} />
        </FooterIconLink>
        <FooterIconLink href="https://t.me/Osci_walker" target="_blank">
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
