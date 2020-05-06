import React from "react";
import Lottie from "react-lottie";

import animationData from "../assets/lottie-react-logo.json";

import animationData2 from "../assets/lottie-react-firebase.json";

const MainPage = () => (
  <div className="main-container">
    <div className="wrap1">
      <h1>Andrew Zernov</h1>
      <div className="title-cube">
        <h2>Contact Me</h2>
      </div>
    </div>
    <div className="wrap2">
      <div className="photo-wrap">
        <img
          id="photo1"
          src={require("../assets/hero-multik1.webp")}
          alt="mltk1"
        />

        <img
          id="photo2"
          src={require("../assets/hero-multik.png")}
          alt="mltk2"
        />
      </div>

      <div className="title-cube">
        <h2>Multik Web App</h2>
      </div>
    </div>
    <div className="wrap3">
      <div className="photo-wrap">
        <Lottie
          id="photo2"
          options={{
            loop: false,
            autoplay: false,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={300}
          width={300}
        />
      </div>

      <div className="title-cube">
        <h2>React Finder Web</h2>
      </div>
    </div>
    <div className="wrap4">
      <div className="photo-wrap">
        <Lottie
          id="photo2"
          options={{
            loop: false,
            autoplay: false,
            animationData: animationData2,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={300}
          width={300}
        />
      </div>
      <div className="title-cube">
        <h2>React Finder App</h2>
      </div>
    </div>
    <div className="wrap5">
      <div className="title-cube">
        <h2>My Tech Stack</h2>
      </div>
    </div>
  </div>
);

export default MainPage;
