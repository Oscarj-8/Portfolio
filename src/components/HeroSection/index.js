import { styled } from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import heroImage from "../../images/heroimageNew.jpg";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 1em;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin-bottom: 1em;
  z-index: 9999;
  @media screen and (min-width: 500px) {
    padding: 0 2em;
    margin-bottom: 2.5em;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 50vh;
    margin-bottom: 0;
  }

  @media screen and (min-width: 994px) {
    padding: 0 5em;
  }

  @media screen and (min-width: 1200px) {
    padding: 0em;
    height: 70vh;
  }

  @media screen and (min-width: 1440px) {
    padding: 0em;
    margin-bottom: 9em;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  @media screen and (min-width: 768px) {
    width: 100%;
    align-items: start;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const ImageSec = styled.img`
  width: 65%;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.tertiaryColor};
  box-shadow: 18px 16px 100px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 500px) {
    width: 60%;
    max-width: 50%;
  }
  @media screen and (min-width: 1200px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3em;
  }
`;

const TextLoop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: #fff;
  font-size: 1.5em;
  @media screen and (min-width: 1200px) {
    font-size: 2em;
  }
`;

const Span = styled.span`
  position: relative;
  font-size: 1em;
  color: #4a1d75;
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 1200px) {
    font-size: 1.25em;
  }
`;

const Description = styled.div`
  color: #fff;
  line-height: 1.6em;
  letter-spacing: 1.5px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 1em;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
    font-size: 1.125em;
  }
`;

const HeroButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2em;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

const ResumeButton = styled.button`
  position: relative;
  font-size: 1em;
  padding: 0.7em;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.buttonColor};
  border: 2px solid transparent;
  color: ${({ theme }) => theme.textWhite};
  border-radius: 0.25em;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.buttonColor};
  }
  @media screen and (min-width: 1200px) {
    padding: 1em 1.5em;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

const GithubButton = styled.button`
  font-size: 1em;
  padding: 0.7em;
  letter-spacing: 1px;
  background: none;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  border-radius: 0.25em;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 2px solid transparent;
    color: #fff;
  }
  @media screen and (min-width: 1200px) {
    padding: 1em 1.5em;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

const UpIconContainer = styled.div`
  position: fixed;
  right: 1em;
  bottom: 1em;
  color: white;
  scale: 1.2;
  transition: all 1s ease-in-out;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.tertiaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
  padding: 0.8em;
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
`;

const HeroSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroller() {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }

  return (
    <HeroContainer id="about">
      <HeroText>
        <Title className="text-animation">
          Hi, i'm <br /> {Bio.name}
        </Title>
        <TextLoop>
          I am a
          <Span>
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </Span>
        </TextLoop>
        <Description>{Bio.description}</Description>
        <HeroButtons>
          <a href={Bio.resume} target="_blank" rel="noreferrer">
            <ResumeButton>View resume</ResumeButton>
          </a>
          <a href={Bio.github} target="_blank" rel="noreferrer">
            <GithubButton>GitHub account</GithubButton>
          </a>
        </HeroButtons>
      </HeroText>
      <ImageSec src={heroImage} alt="Abdulahi's img" />
      <UpIconContainer
        onClick={handleScroller}
        style={{
          opacity: `${showBackToTop ? "100%" : "0"}`,
        }}
      >
        <FaAngleDoubleUp />
      </UpIconContainer>
    </HeroContainer>
  );
};
export default HeroSection;
