import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

const CircleOne = styled.div`
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    width: 30em;
    height: 30em;
    opacity: 50%;
    border-radius: 50%;
    top: -10em;
    left: -20em;
    background-color: ${({ theme }) => theme.secondaryColor};
    filter: blur(10em);
    z-index: 0;
  }
`;

const CircleTwo = styled.div`
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    width: 30em;
    height: 30em;
    opacity: 50%;
    border-radius: 50%;
    top: 20em;
    right: -45em;
    background-color: ${({ theme }) => theme.tertiaryColor};
    filter: blur(10em);
    z-index: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CircleOne />
      <CircleTwo />
      <Body>
        <Navbar />
        <HeroSection />
        <Skills />
        <Projects />
        <ContactMe />
      </Body>
    </ThemeProvider>
  );
}
export default App;
