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
        <IoLogoJavascript
          size="3rem"
          color="rgba(236, 234, 7, 0.94)"
          alt="JavaScript"
        />
      ),
      name: "JavaScript",
    },
    {
      img: <FaReact size="3rem" color="rgb(13, 226, 240)" alt="react" />,
      name: "React",
    },
    {
      img: <FaNodeJs size="3rem" color="rgb(28, 207, 62)" alt="Node JS" />,
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
      img: <FaBootstrap size="3rem" color="rgb(70, 38, 110)" alt="bootstrap" />,
      name: "Bootstrap",
    },
    {
      img: <FaSass size="3rem" color="rgb(237, 58, 225)" alt="sass" />,
      name: "Sass",
    },
  ],
  applicationData: [
    {
      img: (
        <IoLogoJavascript
          size="3rem"
          color="rgba(236, 234, 7, 0.94)"
          alt="JavaScript"
        />
      ),
      name: "JavaScript",
    },
    {
      img: <FaReact size="3rem" color="rgb(13, 226, 240)" alt="react" />,
      name: "React",
    },
    {
      img: (
        <DiReact size="3rem" color="rgb(121, 224, 231)" alt="React native" />
      ),
      name: "R Native",
    },
    {
      img: <FaNodeJs size="3rem" color="rgb(28, 207, 62)" alt="Node JS" />,
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
      img: <FaSass size="3rem" color="rgb(237, 58, 225)" alt="sass" />,
      name: "Sass",
    },
    {
      img: <img src={require("../assets/gatsby.png")} alt="gatsby" />,
      name: "Gatsby",
    },
    {
      img: (
        <FaBootstrap size="3rem" color="rgb(100, 68, 150)" alt="bootstrap" />
      ),
      name: "Bootstrap",
    },
    {
      img: <FaHtml5 size="3rem" color="rgb(250, 121, 15)" alt="Html5" />,
      name: "Html5",
    },
    {
      img: <FaCss3Alt size="3rem" color="rgb(73, 79, 235)" alt="css3" />,
      name: "CSS3",
    },

    {
      img: <FaMarkdown size="3rem" color="brown" alt="Markdown" />,
      name: "Markdown",
    },
    {
      img: <img src={require("../assets/babel.png")} alt="babel" />,
      name: "Babel",
    },
  ],
  devops: [
    {
      img: <FaGithub size="3rem" color="lightblue" alt="Github" />,
      name: "Github",
    },
    {
      img: <FaGitSquare size="3rem" color="rgb(250, 121, 15)" alt="Git" />,
      name: "Git",
    },
    { img: <FaNpm size="3rem" color="tomato" alt="Npm" />, name: "Npm" },
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
      img: <DiGoogleCloudPlatform size="3rem" color="tomato" alt="gcp" />,
      name: "GCP",
    },
  ],
  businessTools: [
    {
      img: <FaSketch size="3rem" color="orange" alt="Sketch" />,
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
