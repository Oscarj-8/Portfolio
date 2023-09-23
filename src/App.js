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

// const CircleOne = styled.div`
//   position: absolute;

//   &::before {
//     content: "";
//     position: absolute;
//     width: 35em;
//     height: 35em;
//     opacity: 50%;
//     border-radius: 50%;
//     top: -10em;
//     left: -30em;
//     background-color: #25cfa7;
//     filter: blur(10em);
//     z-index: 0;

//     @media screen and (min-width: 500px) {
//       opacity: 40%;
//       left: -25em;
//     }

//     @media screen and (min-width: 1200px) {
//       left: -15em;
//     }

//     @media screen and (min-width: 1400px) {
//       opacity: 70%;
//     }
//   }
// `;

// const CircleTwo = styled.div`
//   position: absolute;

//   &::before {
//     content: "";
//     position: absolute;
//     width: 35em;
//     height: 35em;
//     opacity: 30%;
//     border-radius: 50%;
//     top: 25em;
//     right: -53em;
//     background-color: #9925cf;
//     filter: blur(10em);
//     z-index: 0;

//     @media screen and (min-width: 500px) {
//       opacity: 40%;
//       top: 25em;
//       right: -60em;
//     }

//     @media screen and (min-width: 768px) {
//       top: 5em;
//       right: -70em;
//     }

//     @media screen and (min-width: 768px) {
//       top: 5em;
//       right: -80em;
//     }

//     @media screen and (min-width: 1200px) {
//       top: 10em;
//       right: -85em;
//     }

//     @media screen and (min-width: 1400px) {
//       right: -90em;
//     }

//     @media screen and (min-width: 1600px) {
//       right: -105em;
//     }

//     @media screen and (min-width: 1800px) {
//       top: 15em;
//       right: -120em;
//     }
//   }
// `;

const CircleOne = styled.div`
  position: absolute;
  background-color: #25cfa7;
  border-radius: 50%;
  width: 30vw;
  height: 60vw;
  top: 0vh;
  left: -8vw;
  filter: blur(10em);

  @media screen and (min-width: 500px) {
    opacity: 40%;
    top: -10vh;
    left: -12vw;
  }

  @media screen and (min-width: 768px) {
    top: -30vh;
    opacity: 50%;
  }

  @media screen and (min-width: 992px) {
    opacity: 40%;
  }

  @media screen and (min-width: 1200px) {
    top: -40vh;
    opacity: 70%;
  }

  @media screen and (min-width: 1440px) {
    top: -70vh;
    opacity: 80%;
  }
`;

const CircleTwo = styled.div`
  position: absolute;
  background-color: #9925cf;
  border-radius: 50%;
  width: 30vw;
  height: 80vw;
  top: 65vh;
  right: -8vw;
  filter: blur(10em);
  opacity: 70%;

  @media screen and (min-width: 500px) {
    opacity: 30%;
    right: -15vw;
  }

  @media screen and (min-width: 768px) {
    opacity: 30%;
    top: 15vh;
  }

  @media screen and (min-width: 992px) {
    height: 60vw;
    opacity: 25%;
  }

  @media screen and (min-width: 1200px) {
    right: -10vw;
    opacity: 35%;
  }

  @media screen and (min-width: 1440px) {
    opacity: 47%;
    top: 20vh;
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
        <Footer />
      </Body>
    </ThemeProvider>
  );
}
export default App;
