import { projects } from "../../data/constants";
import { styled } from "styled-components";

const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1em;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 1em;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.725em;
  font-weight: 700;
  color: ${({ theme }) => theme.textWhite};
  @media screen and (min-width: 994px) {
    font-size: ${({ theme }) => theme.sectionTitle};
  }
`;

const Description = styled.h1`
  font-size: 1.125em;
  color: ${({ theme }) => theme.descriptionColor};
  font-weight: 500;
  text-align: center;
  margin: 0 0 1em 0;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  align-items: strech;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 2em;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Project = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.projectCardColor};
  max-width: 19em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  border-radius: 0.25em;
  box-shadow: 2px 2px 20px rgba(20, 116, 105, 0.5);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: none;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 0.25em;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.projectTagColor};
  font-size: 0.75em;
  padding: 0.5em 1em;
  border-radius: 1em;
  font-weight: 500;
  letter-spacing: 1px;
`;

const ProjectTitle = styled.h3`
  width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.textWhite};
`;

const ProjectDescription = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.descriptionColor};
  line-height: 1.5em;
`;

const GoToButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.projectTagColor};
  border: none;
  padding: 1em;
  border-radius: 0.25em;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: #260149;
  }
`;

const Projects = (index) => {
  return (
    <ProjectsSection id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          Below, you'll find an overview of the various projects i've had the
          privilege to work on thus far:
        </Description>
        <ProjectsContainer>
          {projects.map((item) => (
            <Project key={item.id + 32}>
              <ProjectImage src={item.image} />
              <Tags>
                {item.tags.map((tag) => (
                  <Tag key={tag + 1}>{tag}</Tag>
                ))}
              </Tags>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectDescription>{item.description}</ProjectDescription>
              <a
                href={item.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoToButton>Go to repository</GoToButton>
              </a>
            </Project>
          ))}
        </ProjectsContainer>
      </Wrapper>
    </ProjectsSection>
  );
};
export default Projects;
