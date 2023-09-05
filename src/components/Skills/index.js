import styled from "styled-components";

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textWhite};
  font-family: "Montserrat", sans-serif;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
`;

const SkillsTop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`;

const Description = styled.h1`
  font-size: 1.125em;
  color: ${({ theme }) => theme.descriptionColor};
  font-weight: 600;
`;

const Skill = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`;

const Frontend = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 0.25em;
`;

const FrontendHeader = styled.h2``;

const Backend = styled.div`
  display: grid;
  place-items: center;
`;

const Others = styled.div`
  display: grid;
  place-items: center;
`;

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsTop>
        <Title>Skills</Title>
        <Description>
          Check out some of the skills i've been working on:
        </Description>
      </SkillsTop>
      <Skill>
        <Frontend>
          <FrontendHeader />
        </Frontend>
        <Backend>This is Backend</Backend>
        <Others>This is Others</Others>
      </Skill>
    </SkillsSection>
  );
};
export default Skills;
