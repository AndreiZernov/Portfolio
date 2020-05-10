import React from "react";
import { FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const projectsData = {
  reactFinder: {
    name: "React Finder Web",
    description:
      "Application created for community as links to Free Helpful Resources, which cover React, React Native, Redux and GraphQl materials. This is React Web Application with the integration of React Context and Hooks, Auth0 Authentication with fast Github and Google Login, QraphQl (all data published and managed at Contentful), Bootstrap component library, Formspree form backend email service, Lottie Animations.",
    images: {
      laptop: require("../assets/macbook-reactfinder.png"),
      tablet: require("../assets/ipad-reactfinder.png"),
      phone: require("../assets/iphone-reactfinder.png"),
    },
    links: {
      website: "https://react-finder.netlify.app/",
      github: "https://github.com/AndreiZernov/react-finder",
    },
    technologies: [
      <FaReact key={1} size="2.5rem" color="white" alt="react" />,
      <FaSass key={2} size="2.5rem" color="white" alt="sass" />,
      <FaBootstrap key={3} size="2.5rem" color="white" alt="bootstrap" />,
      <IoLogoJavascript key={4} size="2.5rem" color="white" alt="js" />,
      <img key={5} src={require("../assets/auth0.svg")} alt="auth0" />,
      <img key={6} src={require("../assets/graphql.png")} alt="graphql" />,
      <img
        key={7}
        src={require("../assets/contentful.png")}
        alt="contentful"
      />,
    ],
    technologyInfo: [
      "React: 16.13.0",
      "Bootstrap 4: 4.4.1",
      "Auth0 Authentication: 9.13.1",
      "SASS: 4.13.1",
      "Contentful: 7.14.3",
      "React Lottie: 1.2.3",
      "Formspree (backend service)",
    ],
  },
  multik: {
    name: "Multik Collection",
    description:
      "Gallery of Projects and Photo Collection for Professional Photographer MLTK, React Progressive Web Application with the integration of React Context and Hooks, SASS, QraphQl, Bootstrap component library, Animation with ScrollMagic and GSAP libraries.",
    images: {
      laptop: require("../assets/macbook-multik.png"),
      tablet: require("../assets/ipad-multik.png"),
      phone: require("../assets/iphone-multik.png"),
    },
    links: {
      website: "https://multik.netlify.app/",
      github: "https://github.com/AndreiZernov/multik",
    },
    technologies: [
      <FaReact key={1} size="2.5rem" color="white" alt="react" />,
      <FaSass key={2} size="2.5rem" color="white" alt="sass" />,
      <FaBootstrap key={3} size="2.5rem" color="white" alt="bootstrap" />,
      <IoLogoJavascript key={4} size="2.5rem" color="white" alt="js" />,
      <img key={5} src={require("../assets/graphql.png")} alt="graphql" />,
      <img
        key={6}
        src={require("../assets/contentful.png")}
        alt="contentful"
      />,
    ],
    technologyInfo: [
      "React: 16.13.0",
      "SASS: 4.13.1",
      "Bootstrap: 4.4.1",
      "Contentful: 7.14.3",
      "scrollmagic: 2.0.7",
      "react-gsap: 1.2.0",
    ],
  },
  reactApp: {
    name: "React Finder App",
    description:
      "This is React Native Application with the integration of Redux, Firebase Authentication, QraphQl (all data published and managed at Contentful), Styled Components, Lottie Animations. Project fully ready for IOS, Android deployment. Responsive Design for Tablets and Phones. Published at Expo Store. Application created for community as links to Free Helpful Resources, which cover React, React Native, Redux and GraphQl materials.",
    images: {
      laptop: require("../assets/ipad-reactnative.png"),
      tablet: require("../assets/iphone-reactnative.png"),
      phone: require("../assets/galaxy-reactnative.png"),
    },
    links: {
      website: "https://expo.io/@andrewzer/react-finder",
      github: "https://github.com/AndreiZernov/react-finder-native",
    },
    technologies: [
      <FaReact key={3} size="2.5rem" color="white" alt="react" />,
      <IoLogoJavascript key={4} size="2.5rem" color="white" alt="js" />,
      <img key={5} src={require("../assets/graphql.png")} alt="graphql" />,
      <img key={6} src={require("../assets/redux.png")} alt="redux" />,
      <img
        key={7}
        src={require("../assets/contentful.png")}
        alt="contentful"
      />,
      <img key={8} src={require("../assets/firebase.png")} alt="firebase" />,
      <img key={9} src={require("../assets/expo.png")} alt="expo" />,
    ],
    technologyInfo: [
      "React: 16.9.0",
      "React Redux: 7.2.0",
      "Expo: 37.0.3",
      "Styled Components: 5.1.0",
      "Contentful: 7.14.2",
      "Firebase: 7.14.0",
      "Lottie: 3.3.2",
    ],
  },
};
