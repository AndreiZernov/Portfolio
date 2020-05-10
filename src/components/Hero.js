import React from "react";
import PropTypes from "prop-types";
import ProjectLinks from "./ProjectLinks";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

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
      {name === "wrap1" && (
        <Link to={linkNav}>
          <div className="photo-wrap">
            <img id="logo" src={require("../assets/logo.svg")} alt="profLogo" />

            <h1>Andrei Zernov</h1>
            <p>Front End Software Engineer</p>
          </div>
        </Link>
      )}

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
        <Link to={linkNav}>
          <h2>{subtitle}</h2>
        </Link>

        {["wrap2", "wrap3", "wrap4"].includes(name) && (
          <ProjectLinks websiteLink={websiteLink} githubLink={githubLink} />
        )}
      </div>

      {name === "wrap5" && (
        <Link to={linkNav}>
          <div className="photo-wrap">
            <div className="stack-wrap">
              {stackData.map((item) => (
                <div>{item.img}</div>
              ))}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  img1: PropTypes.element.isRequired,
  img2: PropTypes.element.isRequired,
  linkNav: PropTypes.string.isRequired,
  websiteLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  stackData: PropTypes.object.isRequired,
};

export default Hero;
