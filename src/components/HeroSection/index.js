import { styled } from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import heroImage1 from "../../images/heroImage1.jpg";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 1em;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 2em;
  @media screen and (min-width: 500px) {
    padding: 0 2em;
  }
  @media screen and (min-width: 768px) {
    padding: 0 4em;
    flex-direction: row;
  }
  @media screen and (min-width: 994px) {
    margin-top: 6em;
    padding: 0 5em;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 6em;
    padding: 0 7em;
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
  width: 85%;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.tertiaryColor};
  @media screen and (min-width: 500px) {
    width: 60%;
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
  font-size: 1em;
  color: #4a1d75;
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 1200px) {
    font-size: 1.25em;
  }
`;

const Description = styled.div`
  color: ${({ theme }) => theme.descriptionColor};
  line-height: 1.6em;
  letter-spacing: 1.5px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1em;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
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
  font-weight: 500;
  padding: 0.7em;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.buttonColor};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.textWhite};
  border-radius: 0.25em;
  &:hover {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.buttonColor};
  }
`;

const GithubButton = styled.button`
  font-size: 1em;
  font-weight: 500;
  padding: 0.7em;
  letter-spacing: 1px;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  border-radius: 0.25em;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 1px solid transparent;
    color: #fff;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <Title>
          Hi i'm <br /> {Bio.name}
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
          <ResumeButton>Get resume</ResumeButton>
          <GithubButton>GitHub account</GithubButton>
        </HeroButtons>
      </HeroText>

      <ImageSec src={heroImage1} alt="Abdulahi's img" />
    </HeroContainer>
  );
};
export default HeroSection;
