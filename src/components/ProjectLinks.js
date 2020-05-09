import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectLinks = ({ websiteLink, githubLink }) => (
  <div className="links">
    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
      <FaGlobe size="1.4em" color="white" alt="website" />
    </a>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub size="1.4em" color="white" alt="github" />
    </a>
  </div>
);

export default ProjectLinks;
