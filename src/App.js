import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import {
  CircleOne,
  CircleTwo,
  CircleThree,
  CircleFour,
} from "./components/Circles";

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <CircleOne />
        <CircleTwo />
        <CircleThree />
        <CircleFour />
        <Navbar />
        <HeroSection />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </Body>
    </ThemeProvider>
  );
}
export default App;
