import React from "react";
import {
  FaReact,
  FaSass,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaMarkdown,
  FaGithub,
  FaGitSquare,
  FaNpm,
  FaSketch,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact, DiGoogleCloudPlatform } from "react-icons/di";
import "bootstrap/dist/css/bootstrap.min.css";

export const stackData = {
  hero: [
    {
      img: (
        <IoLogoJavascript color="rgba(236, 234, 7, 0.94)" alt="JavaScript" />
      ),
      name: "JavaScript",
    },
    {
      img: <FaReact color="rgb(13, 226, 240)" alt="react" />,
      name: "React",
    },
    {
      img: <FaNodeJs color="rgb(28, 207, 62)" alt="Node JS" />,
      name: "Node JS",
    },
    {
      img: <img src={require("../assets/redux.png")} alt="redux" />,
      name: "Redux",
    },
    {
      img: <img src={require("../assets/graphql.png")} alt="graphql" />,
      name: "GraphQl",
    },
    {
      img: <FaBootstrap color="rgb(70, 38, 110)" alt="bootstrap" />,
      name: "Bootstrap",
    },
    {
      img: <FaSass color="rgb(237, 58, 225)" alt="sass" />,
      name: "Sass",
    },
  ],
  applicationData: [
    {
      img: (
        <IoLogoJavascript color="rgba(236, 234, 7, 0.94)" alt="JavaScript" />
      ),
      name: "JavaScript",
    },
    {
      img: <FaReact color="rgb(13, 226, 240)" alt="react" />,
      name: "React",
    },
    {
      img: <DiReact color="rgb(121, 224, 231)" alt="React native" />,
      name: "R Native",
    },
    {
      img: <FaNodeJs color="rgb(28, 207, 62)" alt="Node JS" />,
      name: "Node JS",
    },
    {
      img: <img src={require("../assets/redux.png")} alt="redux" />,
      name: "Redux",
    },
    {
      img: <img src={require("../assets/graphql.png")} alt="graphql" />,
      name: "GraphQl",
    },
    {
      img: <FaSass color="rgb(237, 58, 225)" alt="sass" />,
      name: "Sass",
    },
    {
      img: <img src={require("../assets/gatsby.png")} alt="gatsby" />,
      name: "Gatsby",
    },
    {
      img: <FaBootstrap color="rgb(100, 68, 150)" alt="bootstrap" />,
      name: "Bootstrap",
    },
    {
      img: <FaHtml5 color="rgb(250, 121, 15)" alt="Html5" />,
      name: "Html5",
    },
    {
      img: <FaCss3Alt color="rgb(73, 79, 235)" alt="css3" />,
      name: "CSS3",
    },

    {
      img: <FaMarkdown color="brown" alt="Markdown" />,
      name: "Markdown",
    },
    {
      img: <img src={require("../assets/babel.png")} alt="babel" />,
      name: "Babel",
    },
  ],
  devops: [
    {
      img: <FaGithub color="lightblue" alt="Github" />,
      name: "Github",
    },
    {
      img: <FaGitSquare color="rgb(250, 121, 15)" alt="Git" />,
      name: "Git",
    },
    { img: <FaNpm color="tomato" alt="Npm" />, name: "Npm" },
    {
      img: <img src={require("../assets/virtualbox.png")} alt="VirtualBox" />,
      name: "VirtualBox",
    },
    {
      img: <img src={require("../assets/expo.png")} alt="expo" />,
      name: "Expo",
    },

    {
      img: <img src={require("../assets/travis.png")} alt="travis" />,
      name: "Travis CI",
    },
    {
      img: <img src={require("../assets/firebase.png")} alt="firebase" />,
      name: "Firebase",
    },
    {
      img: <DiGoogleCloudPlatform color="tomato" alt="gcp" />,
      name: "GCP",
    },
  ],
  businessTools: [
    {
      img: <FaSketch color="orange" alt="Sketch" />,
      name: "Sketch",
    },
    {
      img: <img src={require("../assets/contentful.png")} alt="contentful" />,
      name: "Contentful",
    },
    {
      img: <img src={require("../assets/auth0.svg")} alt="auth0" />,
      name: "Auth0",
    },
    {
      img: <img src={require("../assets/netlify.png")} alt="netlify" />,
      name: "Netlify",
    },
  ],
};
