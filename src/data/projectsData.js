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
      laptop: require("../assets/macbook-reactfinder.png"),
      tablet: require("../assets/ipad-reactfinder.png"),
      phone: require("../assets/iphone-reactfinder.png"),
    },
    links: {
      website: "https://react-finder.netlify.app/",
      github: "https://github.com/AndreiZernov/react-finder",
    },
    technologies: [
      <FaReact key={1} size="1.4rem" color="black" alt="react" />,
      <FaSass key={2} size="1.4rem" color="black" alt="sass" />,
      <FaBootstrap key={3} size="1.4rem" color="black" alt="bootstrap" />,
      <IoLogoJavascript key={4} size="1.4rem" color="black" alt="js" />,
      <img key={5} src={require("../assets/auth0.png")} alt="auth0" />,
      <img key={6} src={require("../assets/graphql.png")} alt="graphql" />,
      <img
        key={7}
        src={require("../assets/contentful.png")}
        alt="contentful"
      />,
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
      <FaReact key={1} size="1.4rem" color="black" alt="react" />,
      <FaSass key={2} size="1.4rem" color="black" alt="sass" />,
      <FaBootstrap key={3} size="1.4rem" color="black" alt="bootstrap" />,
      <IoLogoJavascript key={4} size="1.4rem" color="black" alt="js" />,
      <img key={5} src={require("../assets/graphql.png")} alt="graphql" />,
      <img
        key={6}
        src={require("../assets/contentful.png")}
        alt="contentful"
      />,
    ],
  },
  reactApp: {
    name: "React Finder App",
    description:
      "This is React Native Application with the integration of Redux, Firebase Authentication, QraphQl (all data published and managed at Contentful), Styled Components, Lottie Animations. Project fully ready for IOS, Android deployment. Responsive Design for Tablets and Phones. Published at Expo Store. Application created for community as links to Free Helpful Resources, which cover React, React Native, Redux and GraphQl materials.",
    images: {
      laptop: require("../assets/ipad-multik.png"),
      tablet: require("../assets/iphone-multik.png"),
      phone: require("../assets/iphone-multik.png"),
    },
    links: {
      website: "https://multik.netlify.app/",
      github: "https://github.com/AndreiZernov/multik",
    },
    technologies: [
      <FaApple key={1} size="1.4rem" color="black" alt="js" />,
      <FaAndroid key={2} size="1.4rem" color="black" alt="js" />,
      <FaReact key={3} size="1.4rem" color="black" alt="react" />,
      <IoLogoJavascript key={4} size="1.4rem" color="black" alt="js" />,
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
  },
};
