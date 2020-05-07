import React from "react";
import Hero from "../components/Hero";
import animationData from "../assets/lottie-react-logo.json";
import animationData2 from "../assets/lottie-react-firebase.json";
import { stackData } from "../data/stackData";

const MainPage = () => {
  return (
    <>
      <div className="background-img" />
      <div className="main-container">
        <Hero
          name="wrap1"
          linkNav="/contactme"
          title="Andrew Zernov"
          subtitle="Contact Me"
        />
        <Hero
          websiteLink={"https://multik.netlify.app/"}
          githubLink={"https://github.com/AndreiZernov/multik"}
          name="wrap2"
          linkNav="/projectMultic"
          subtitle="Multik Web App"
          img1={require("../assets/hero-multik1.webp")}
          img2={require("../assets/hero-multik.png")}
        />
        <Hero
          websiteLink={"https://react-finder.netlify.app/"}
          githubLink={"https://github.com/AndreiZernov/react-finder"}
          name="wrap3"
          linkNav="/projectReactWeb"
          subtitle="React Finder Web"
          img1={require("../assets/hero-multik1.webp")}
          img2={animationData}
        />
        <Hero
          websiteLink={"https://expo.io/@andrewzer/react-finder"}
          githubLink={"https://github.com/AndreiZernov/multik"}
          name="wrap4"
          linkNav="/projectReactApp"
          subtitle="React Finder App"
          img1={require("../assets/hero-multik1.webp")}
          img2={animationData2}
        />
        <Hero
          stackData={stackData}
          name="wrap5"
          linkNav="/techstack"
          subtitle="My Tech Stack"
        />
      </div>
    </>
  );
};

export default MainPage;
