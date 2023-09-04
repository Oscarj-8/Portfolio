import { styled } from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroContainer = styled.div`
  position: relative;
  height: calc(100% - 5em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0.5em;
`;

const HeroText = styled.div`
  flex: 1;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex: initial;
    width: 50%;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    width: 50%;
  }
`;

const Title = styled.div`
  font-size: 2.25em;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff;
`;

const TextLoop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: #fff;
  font-size: 1.5em;
`;

const Span = styled.span`
  font-size: 1.2em;
  color: #4a1d75;
  text-align: center;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.textWhite};
  line-height: 2em;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <Title>Hi i'm {Bio.name}</Title>
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
      </HeroText>
      <HeroImage></HeroImage>
    </HeroContainer>
  );
};
export default HeroSection;
