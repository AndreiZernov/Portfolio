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
    { img: <FaSass size="2.5rem" color="black" alt="sass" />, name: "Sass" },
    {
      img: <FaBootstrap size="2.5rem" color="black" alt="bootstrap" />,
      name: "Bootstrap",
    },
    {
      img: <IoLogoJavascript size="2.5rem" color="black" alt="JavaScript" />,
      name: "JavaScript",
    },
    { img: <FaHtml5 size="2.5rem" color="black" alt="Html5" />, name: "Html5" },
    {
      img: <DiReact size="2.5rem" color="black" alt="React native" />,
      name: "R Native",
    },
    { img: <FaCss3Alt size="2.5rem" color="black" alt="css3" />, name: "CSS3" },
    {
      img: <DiGoogleCloudPlatform size="2.5rem" color="black" alt="gcp" />,
      name: "GCP",
    },
    {
      img: <FaMarkdown size="2.5rem" color="black" alt="Markdown" />,
      name: "Markdown",
    },
    { img: <FaLinux size="2.5rem" color="black" alt="linux" />, name: "Linux" },
    {
      img: <img src={require("../assets/firebase.png")} alt="firebase" />,
      name: "Firebase",
    },
    {
      img: <img src={require("../assets/redux.png")} alt="redux" />,
      name: "Redux",
    },
    {
      img: <img src={require("../assets/graphql.png")} alt="graphql" />,
      name: "GraphQl",
    },
  ],
  Utilities: [
    {
      img: <img src={require("../assets/gatsby.png")} alt="gatsby" />,
      name: "Gatsby",
    },
    {
      img: <img src={require("../assets/auth0.png")} alt="auth0" />,
      name: "Auth0",
    },
    {
      img: <img src={require("../assets/netlify.png")} alt="netlify" />,
      name: "Netlify",
    },
    {
      img: <img src={require("../assets/expo.png")} alt="expo" />,
      name: "Expo",
    },
  ],
  devops: [
    {
      img: <FaGithub size="2.5rem" color="black" alt="Github" />,
      name: "Github",
    },
    { img: <FaGitSquare size="2.5rem" color="black" alt="Git" />, name: "Git" },
    { img: <FaNpm size="2.5rem" color="black" alt="Npm" />, name: "Npm" },
    { img: <FaAtom size="2.5rem" color="black" alt="Atom" />, name: "Atom" },
    {
      img: <img src={require("../assets/virtualbox.png")} alt="VirtualBox" />,
      name: "VirtualBox",
    },
    {
      img: <img src={require("../assets/babel.png")} alt="babel" />,
      name: "Babel",
    },
    {
      img: <img src={require("../assets/travis.png")} alt="travis" />,
      name: "Travis CI",
    },
  ],
  businessTools: [
    {
      img: <FaSketch size="2.5rem" color="black" alt="Sketch" />,
      name: "Sketch",
    },
    {
      img: (
        <img src={require("../assets/googlefonts.png")} alt="Google Fonts" />
      ),
      name: "G Fonts",
    },
    {
      img: <img src={require("../assets/contentful.png")} alt="contentful" />,
      name: "Contentful",
    },
  ],
};
