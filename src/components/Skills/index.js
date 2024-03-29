import styled from "styled-components";
import { skills } from "../../data/constants";

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textWhite};
  font-family: "Montserrat", sans-serif;
  padding: 0 1em;
  margin-bottom: 2em;
`;

const SkillsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1em;
`;

const Title = styled.h1`
  position: relative;
  margin: 0;
  font-size: 1.725em;
  font-weight: 700;
  @media screen and (min-width: 994px) {
    font-size: ${({ theme }) => theme.sectionTitle};
  }
`;

const Description = styled.h1`
  font-size: 1.125em;
  color: ${({ theme }) => theme.descriptionColor};
  font-weight: 500;
  margin: 0 0 1em 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: strech;
  justify-content: center;
  gap: 3em;

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;

const Skill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 0.5em;
  min-height: 18em;
  // flex-grow: 1;
  padding: 1em;
  box-shadow: 2px 2px 10px rgba(27, 154, 130, 0.5);
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.03);
    box-shadow: 2px 2px 20px rgba(27, 154, 130, 0.5);
  }

  @media screen and (min-width: 500px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    width: 68%;
  }

  @media screen and (min-width: 994px) {
    width: 36%;
  }

  @media screen and (min-width: 1440px) {
    width: 30%;
  }
`;

const SkillTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.descriptionColor};
  font-size: 1.375em;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25em;
  align-self: center;
  margin-bottom: 1em;
`;

const SkillItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 1.5em;
  font-size: 1.125em;
  color: ${({ theme }) => theme.descriptionColor};
  font-size: 1.125em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
    box-shadow: 2px 2px 10px rgba(27, 154, 130, 0.5);
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsWrapper>
        <Title className="line">Skills</Title>
        <Description>
          Check out some of the skills i've been working on:
        </Description>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill key={item.title}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillImage src={skill.image} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </SkillsWrapper>
    </SkillsSection>
  );
};
export default Skills;
