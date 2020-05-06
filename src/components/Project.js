import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";

const Project = ({ data }) => (
  <div className="project">
    <Link id="info-link" to="/project">
      <h2>{data.name}</h2>
      <FaInfoCircle size="1.4em" color="black" alt="info" />
    </Link>
    <div className="project-links">
      <a href={data.links.website} target="_blank" rel="noopener noreferrer">
        <FaGlobe size="1.4em" color="black" alt="website" />
      </a>
      <a href={data.links.github} target="_blank" rel="noopener noreferrer">
        <FaGithub size="1.4em" color="black" alt="github" />
      </a>
    </div>
    <div className="images">
      <img id="laptop" src={data.images.laptop} alt="laptop" />
      <img id="tablet" src={data.images.tablet} alt="tablet" />
      <img id="phone" src={data.images.phone} alt="phone" />
    </div>
    <h3>Description</h3>
    <div className="technologies">{data.technologies}</div>
    <p>{data.description.substring(0, 270)}</p>
  </div>
);

export default Project;
