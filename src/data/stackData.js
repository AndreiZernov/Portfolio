import React from "react";
import {
  FaReact,
  FaSass,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaMarkdown,
  FaLinux,
  FaGithub,
  FaGitSquare,
  FaNpm,
  FaAtom,
  FaSketch,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact, DiGoogleCloudPlatform } from "react-icons/di";

export const stackData = {
  applicationData: [
    { img: <FaReact size="2.5rem" color="black" alt="react" />, name: "React" },
    {
      img: <DiReact size="2.5rem" color="black" alt="React native" />,
      name: "R Native",
    },
    {
      img: <IoLogoJavascript size="2.5rem" color="black" alt="JavaScript" />,
      name: "JavaScript",
    },
    {
      img: <img src={require("../assets/redux.png")} alt="redux" />,
      name: "Redux",
    },
    {
      img: <img src={require("../assets/graphql.png")} alt="graphql" />,
      name: "GraphQl",
    },
    { img: <FaSass size="2.5rem" color="black" alt="sass" />, name: "Sass" },
    {
      img: <img src={require("../assets/gatsby.png")} alt="gatsby" />,
      name: "Gatsby",
    },
    {
      img: <FaBootstrap size="2.5rem" color="black" alt="bootstrap" />,
      name: "Bootstrap",
    },
    { img: <FaHtml5 size="2.5rem" color="black" alt="Html5" />, name: "Html5" },
    { img: <FaCss3Alt size="2.5rem" color="black" alt="css3" />, name: "CSS3" },

    {
      img: <FaMarkdown size="2.5rem" color="black" alt="Markdown" />,
      name: "Markdown",
    },
    {
      img: <img src={require("../assets/babel.png")} alt="babel" />,
      name: "Babel",
    },
  ],
  devops: [
    {
      img: <FaGithub size="2.5rem" color="black" alt="Github" />,
      name: "Github",
    },
    { img: <FaGitSquare size="2.5rem" color="black" alt="Git" />, name: "Git" },
    { img: <FaNpm size="2.5rem" color="black" alt="Npm" />, name: "Npm" },
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
      img: <DiGoogleCloudPlatform size="2.5rem" color="black" alt="gcp" />,
      name: "GCP",
    },
  ],
  businessTools: [
    {
      img: <FaSketch size="2.5rem" color="black" alt="Sketch" />,
      name: "Sketch",
    },
    {
      img: <img src={require("../assets/contentful.png")} alt="contentful" />,
      name: "Contentful",
    },
    {
      img: <img src={require("../assets/auth0.png")} alt="auth0" />,
      name: "Auth0",
    },
    {
      img: <img src={require("../assets/netlify.png")} alt="netlify" />,
      name: "Netlify",
    },
  ],
};
