import react from "../images/react.png";
import angular from "../images/angualr.png";
import js from "../images/javaScript.png";
import html from "../images/html.png";
import bootstrap from "../images/bootstrap.png";
import materialui from "../images/materialUi.png";
import css from "../images/css.png";
import typescript from "../images/typescript.png";
import tailwind from "../images/tailwind.png";
import node from "../images/node.png";
import mongoDB from "../images/mongoDB.png";
import express from "../images/express.png";
import mySql from "../images/mySql.png";
import vsCode from "../images/vsCode.png";
import andriodStudio from "../images/andriodStudio.png";
import github from "../images/github.png";
import git from "../images/git.png";
import ps from "../images/ps.png";
import figma from "../images/figma.png";
import xd from "../images/xd.png";
import taskTrackerReact from "../images/taskTrackerReact.png";
import taskTraackerAngular from "../images/taskTrackerAngular.png";
import lewach from "../images/lewach.png";
import hr from "../images/hr.png";
import githubUserFinder from "../images/githubUserFinder.png";
import reactWeatherWebApp from "../images/reactWeatherWebApp.png";

export const Bio = {
  name: "Abdulahi Muhammed",
  roles: [
    "Full stack developer",
    "UI/UX Designer",
    "Web Developer",
    "Programmer",
  ],
  description:
    "a versatile creator passionate about crafting digital solutions that are as functional as they are visually engaging. I thrive on the journey of translating innovative ideas into seamless, user-centered experiences",
  resume:
    "https://drive.google.com/file/d/11TGQMVX8AFVdda9iQExLVNn9qyOhY55R/view?usp=sharing",
  github: "https://github.com/Oscarj-8",
};

export const socialLinks = {
  github: "https://github.com/Oscarj-8",
  linkedin: "https://www.linkedin.com/in/abdulahi-muhammed-352851285/",
  telegram: "https://t.me/Osci_walker",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: react,
      },
      {
        name: "Angular",
        image: angular,
      },
      {
        name: "Javascript",
        image: js,
      },
      {
        name: "HTML5",
        image: html,
      },
      {
        name: "Bootstrap",
        image: bootstrap,
      },
      {
        name: "Material UI",
        image: materialui,
      },
      {
        name: "CSS3",
        image: css,
      },
      {
        name: "TypeScript",
        image: typescript,
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.Js",
        image: node,
      },
      {
        name: "Express Js",
        image: express,
      },
      {
        name: "MongoDB",
        image: mongoDB,
      },
      {
        name: "MySQL",
        image: mySql,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Vs Code",
        image: vsCode,
      },
      {
        name: "Android Studio",
        image: andriodStudio,
      },
      {
        name: "GitHub",
        image: github,
      },
      {
        name: "Git",
        image: git,
      },
      {
        name: "Adobe Photoshop",
        image: ps,
      },
      {
        name: "Figma",
        image: figma,
      },
      {
        name: "Adobe XD",
        image: xd,
      },
    ],
  },
];

export const projects = [
  {
    id: 0,

    image: hr,
    title: "Hr sample",
    description:
      " Angular-based HR web app featuring an in-memory database, designed for efficient CRUD operations on candidate and employee data. This project demonstrates streamlined data management, highlighting its potential to optimize HR processes.",
    tags: [
      "Angular",
      "In-memory DB",
      "EsLint",
      "TypeScript",
      "Angular services",
    ],
    repository: "https://github.com/Oscarj-8/Hr-app",
  },
  {
    id: 1,
    image: lewach,
    title: "Lewach Items Exchange ",
    description:
      "This platform offers users a dynamic and intuitive interface to effortlessly trade items. powered by Node.js, the backend ensures swift and secure communication, allowing users to list, browse, and connect with others for mutually beneficial exchanges.",
    tags: ["ReactJs", "NodeJs", "ExpressJs", "JavaScript", "MongoDB", "EsLint"],
    repository: "https://github.com/Oscarj-8/Lewach_items_exchange",
  },
  {
    id: 2,
    image: githubUserFinder,
    title: "GitHub User Finder",
    description:
      "The GitHub User Finder is a web application developed using Vite and React, designed to streamline the process of discovering GitHub users and exploring their profiles. Leveraging the GitHub API for seamless data retrieval, this project provides an intuitive and efficient platform for users to search, view, and gather information about GitHub profiles.",
    tags: ["Vite", "React", "JavaScript", "EsLint", "GitHub API"],
    repository: "https://github.com/Oscarj-8/github-user-finder",
  },

  {
    id: 3,
    image: reactWeatherWebApp,
    title: "React Weather Web App",
    description:
      "This is a simple weather application built with Vite and React, utilizing the OpenWeather API to fetch real-time weather data. Users can enter a city name, and the app will display information such as the current weather, description, and temperature.",
    tags: ["ReactJs", "Vite", "EsLint", "JavaScript", "OpenWeather API"],
    repository: "https://github.com/Oscarj-8/react-weather-app",
  },

  {
    id: 4,
    image: taskTrackerReact,
    title: "Task Tracker (ReactJS)",
    description:
      "This task tracker web app built with ReactJS and JSON server allows you to easily add and track tasks with customizable dates and reminders. With a simple and intuitive interface, you can quickly stay on top of your to-do list.",
    tags: ["ReactJs", "Json-server", "EsLint", "JavaScript"],
    repository: "https://github.com/Oscarj-8/React-Task-Tracker",
  },
  {
    id: 5,
    image: taskTraackerAngular,
    title: "Task Tracker (Angular)",
    description:
      "This task tracker web app built with Angular and Json-server allows you to easily add and track tasks with customizable dates and reminders. With a simple and intuitive interface, you can quickly stay on top of your to-do list.",
    tags: ["Angular", "Json-server", "EsLint", "TypeScript"],
    repository: "https://github.com/Oscarj-8/Angular-Task-Tracker",
  },
];
