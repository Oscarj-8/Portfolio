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

const Circle = styled.div`
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    width: 30em;
    height: 30em;
    border-radius: 50%;
    top: -14em;
    left: -25em;
    background-color: ${({ theme }) => theme.secondaryColor};
    filter: blur(5em);
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Circle />
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
