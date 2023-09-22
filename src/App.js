import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;

const CircleOne = styled.div`
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    width: 35em;
    height: 35em;
    opacity: 80%;
    border-radius: 50%;
    top: -10em;
    left: -30em;
    background-color: #25CFA7;
    filter: blur(20em);
    z-index: 0;

    @media screen and (min-width: 768px) {
   top: -5em;
    left: -80em;
    }

`;

const CircleTwo = styled.div`
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    width: 35em;
    height: 35em;
    opacity: 45%;
    border-radius: 50%;
    top: 25em;
    right: -53em;
    background-color: #9925CF;
    filter: blur(10em);
    z-index: 0;
  }

  @media screen and (min-width: 500px) {
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
        <Footer />
      </Body>
    </ThemeProvider>
  );
}
export default App;
