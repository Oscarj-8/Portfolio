import styled from "styled-components";

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1``;
const Skills = () => {
  return (
    <SkillsSection>
      <Title>
        <Header>Check out some of the skills i've been working on:</Header>
      </Title>

      <Skills>
        {/* <Fontend></Fontend>
        <Backend></Backend>
        <Others></Others> */}
      </Skills>
    </SkillsSection>
  );
};
export default Skills;
