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
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact, DiGoogleCloudPlatform } from "react-icons/di";
import "bootstrap/dist/css/bootstrap.min.css";

export const stackData = {
  applicationData: [
    {
      img: (
        <FaReact
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="react"
        />
      ),
      name: "React",
    },
    {
      img: (
        <DiReact
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="React native"
        />
      ),
      name: "R Native",
    },
    {
      img: (
        <IoLogoJavascript
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="JavaScript"
        />
      ),
      name: "JavaScript",
    },
    {
      img: (
        <img
          className="d-block w-100"
          src={require("../assets/redux.png")}
          alt="redux"
        />
      ),
      name: "Redux",
    },
    {
      img: (
        <img
          className="d-block w-100"
          src={require("../assets/graphql.png")}
          alt="graphql"
        />
      ),
      name: "GraphQl",
    },
    {
      img: (
        <FaSass
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="sass"
        />
      ),
      name: "Sass",
    },
    {
      img: (
        <img
          className="d-block w-100"
          src={require("../assets/gatsby.png")}
          alt="gatsby"
        />
      ),
      name: "Gatsby",
    },
    {
      img: (
        <FaBootstrap
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="bootstrap"
        />
      ),
      name: "Bootstrap",
    },
    {
      img: (
        <FaHtml5
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="Html5"
        />
      ),
      name: "Html5",
    },
    {
      img: (
        <FaCss3Alt
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="css3"
        />
      ),
      name: "CSS3",
    },

    {
      img: (
        <FaMarkdown
          className="d-block w-100"
          size="2.5rem"
          color="white"
          alt="Markdown"
        />
      ),
      name: "Markdown",
    },
    {
      img: (
        <img
          className="d-block w-100"
          src={require("../assets/babel.png")}
          alt="babel"
        />
      ),
      name: "Babel",
    },
  ],
  devops: [
    {
      img: <FaGithub size="2.5rem" color="white" alt="Github" />,
      name: "Github",
    },
    { img: <FaGitSquare size="2.5rem" color="white" alt="Git" />, name: "Git" },
    { img: <FaNpm size="2.5rem" color="white" alt="Npm" />, name: "Npm" },
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
      img: <DiGoogleCloudPlatform size="2.5rem" color="white" alt="gcp" />,
      name: "GCP",
    },
  ],
  businessTools: [
    {
      img: <FaSketch size="2.5rem" color="white" alt="Sketch" />,
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
