import styled from "styled-components";
import { skills } from "../../data/constants";

const SkillsSection = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textWhite};
  font-family: "Montserrat", sans-serif;
  padding: 0 1em;
`;

const SkillsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  font-weight: 700;
`;

const Description = styled.h1`
  font-size: 1.125em;
  color: ${({ theme }) => theme.descriptionColor};
  font-weight: 500;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: blue;
  gap: 1em;
`;

const Skill = styled.div`
  width: 100%;
  background-color: green;
  display: flex;
  flex-direction: column;
  max-width: 31.5em;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 0.5em;
  height: 100%;
`;

const SkillTitle = styled.h3``;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsWrapper>
        <Title>Skills</Title>
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
