import React from "react";
import {
  FaReact,
  FaSass,
  FaBootstrap,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const projectsData = {
  reactFinder: {
    name: "React Finder",
    description:
      "Application created for community as links to Free Helpful Resources, which cover React, React Native, Redux and GraphQl materials. This is React Web Application with the integration of React Context and Hooks, Auth0 Authentication with fast Github and Google Login, QraphQl (all data published and managed at Contentful), Bootstrap component library, Formspree form backend email service, Lottie Animations.",
    images: {
      laptop: require("../assets/MacBook-ReactFinder.png"),
      tablet: require("../assets/IPad-ReactFinder.png"),
      phone: require("../assets/IPhone-ReactFinder.png"),
    },
    links: {
      website: "https://react-finder.netlify.app/",
      github: "https://github.com/AndreiZernov/react-finder",
    },
    technologies: [
      <FaReact size="1.4rem" color="black" alt="react" />,
      <FaSass size="1.4rem" color="black" alt="sass" />,
      <FaBootstrap size="1.4rem" color="black" alt="bootstrap" />,
      <IoLogoJavascript size="1.4rem" color="black" alt="js" />,
      <img src={require("../assets/auth0.png")} alt="auth0" />,
      <img src={require("../assets/graphql.png")} alt="graphql" />,
      <img src={require("../assets/contentful.png")} alt="contentful" />,
    ],
  },
  multik: {
    name: "Multik Collection",
    description:
      "Gallery of Projects and Photo Collection for Professional photographer Artem Zuev, React Progressive Web Application with the integration of React Context and Hooks, SASS, QraphQl, Bootstrap component library, Animation with ScrollMagic and GSAP libraries.",
    images: {
      laptop: require(`../assets/MacBook-Multik.png`),
      tablet: require(`../assets/IPad-Multik.png`),
      phone: require(`../assets/IPhone-Multik.png`),
    },
    links: {
      website: "https://multik.netlify.app/",
      github: "https://github.com/AndreiZernov/multik",
    },
    technologies: [
      <FaReact size="1.4rem" color="black" alt="react" />,
      <FaSass size="1.4rem" color="black" alt="sass" />,
      <FaBootstrap size="1.4rem" color="black" alt="bootstrap" />,
      <IoLogoJavascript size="1.4rem" color="black" alt="js" />,
      <img src={require("../assets/graphql.png")} alt="graphql" />,
      <img src={require("../assets/contentful.png")} alt="contentful" />,
    ],
  },
  reactApp: {
    name: "React Finder App",
    description:
      "This is React Native Application with the integration of Redux, Firebase Authentication, QraphQl (all data published and managed at Contentful), Styled Components, Lottie Animations. Project fully ready for IOS, Android deployment. Responsive Design for Tablets and Phones. Published at Expo Store. Application created for community as links to Free Helpful Resources, which cover React, React Native, Redux and GraphQl materials.",
    images: {
      laptop: require(`../assets/IPad-Multik.png`),
      tablet: require(`../assets/IPhone-Multik.png`),
      phone: require(`../assets/IPhone-Multik.png`),
    },
    links: {
      website: "https://multik.netlify.app/",
      github: "https://github.com/AndreiZernov/multik",
    },
    technologies: [
      <FaApple size="1.4rem" color="black" alt="js" />,
      <FaAndroid size="1.4rem" color="black" alt="js" />,
      <FaReact size="1.4rem" color="black" alt="react" />,
      <IoLogoJavascript size="1.4rem" color="black" alt="js" />,
      <img src={require("../assets/graphql.png")} alt="graphql" />,
      <img src={require("../assets/redux.png")} alt="redux" />,
      <img src={require("../assets/contentful.png")} alt="contentful" />,
      <img src={require("../assets/firebase.png")} alt="firebase" />,
      <img src={require("../assets/expo.png")} alt="expo" />,
    ],
  },
};
