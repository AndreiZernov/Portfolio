import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FaGithub, FaGlobe } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = ({
  name,
  title,
  subtitle,
  img1,
  img2,
  linkNav,
  websiteLink,
  githubLink,
  stackData,
}) => {
  return (
    <div className={name}>
      {name === "wrap1" && <h1>{title}</h1>}

      {["wrap2", "wrap3", "wrap4"].includes(name) && (
        <Link to={linkNav}>
          <div className="photo-wrap">
            <img id="photo1" src={img1} alt="mltk1" />

            {name === "wrap2" ? (
              <img id="photo2" src={img2} alt="mltk2" />
            ) : (
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: img2,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={300}
                width={300}
              />
            )}
          </div>
        </Link>
      )}

      <div className="title-cube">
        <h2>{subtitle}</h2>
        {["wrap2", "wrap3", "wrap4"].includes(name) && (
          <div className="links">
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <FaGlobe size="1.4em" color="white" alt="website" />
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size="1.4em" color="white" alt="github" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
