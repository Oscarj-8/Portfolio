import styled from "styled-components";

export const CircleOne = styled.div`
  position: absolute;
  background-color: #25cfa7;
  border-radius: 50%;
  width: 60vw;
  height: 60vw;
  top: 0vh;
  left: -10vw;
  filter: blur(5em);

  @media screen and (min-width: 500px) {
    opacity: 80%;
    top: -10vh;
    // filter: blur(10em);
  }

  @media screen and (min-width: 768px) {
    top: -25vh;
    opacity: 60%;
    left: -15vw;
  }

  @media screen and (min-width: 992px) {
    top: -35vh;
    left: -13vw;
  }

  @media screen and (min-width: 1200px) {
    top: -55vh;
    opacity: 70%;
  }

  @media screen and (min-width: 1440px) {
    width: 30vw;
    top: -70vh;
    opacity: 80%;
  }
`;

export const CircleTwo = styled.div`
  position: absolute;
  background-color: #9925cf;
  border-radius: 50%;
  width: 30vw;
  height: 60vw;
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

export const CircleThree = styled.div`
  position: absolute;
  background-color: #25cfa7;
  border-radius: 50%;
  width: 20vw;
  height: 60vw;
  top: 300vh;
  right: -15vw;
  filter: blur(10em);
  z-index: 1;

  @media screen and (min-width: 500px) {
    top: 260vh;
    opacity: 80%;
  }

  @media screen and (min-width: 768px) {
    opacity: 60%;
    top: 210vh;
  }

  @media screen and (min-width: 1200px) {
    opacity: 70%;
  }

  @media screen and (min-width: 1440px) {
    width: 30vw;
    filter: blur(18em);
    opacity: 25%;
    right: -10vw;
  }
`;

export const CircleFour = styled.div`
  position: absolute;
  background-color: #9925cf;
  border-radius: 50%;
  width: 30vw;
  height: 80vw;
  top: 375vh;
  left: -5vw;
  filter: blur(6em);
  opacity: 70%;
  z-index: 1;

  @media screen and (min-width: 500px) {
    top: 420vh;
    opacity: 50%;
  }

  @media screen and (min-width: 768px) {
    opacity: 30%;
    top: 300vh;
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
    opacity: 20%;
    top: 350vh;
  }
`;
