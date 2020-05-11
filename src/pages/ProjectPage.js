import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ProjectLinks from "../components/ProjectLinks";
import DeviceImages from "../components/DeviceImages";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ProjectPage = ({ data }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="project">
      <Link id="btn-back" to="/">
        <FaArrowAltCircleLeft size="35px" color="silver" alt="go back" />
      </Link>
      <h1>
        <a
          href={data.links.website}
          target="_blank"
          rel="noopener noreferrer"
          className="device-images"
        >
          {data.name}
        </a>
      </h1>
      <ProjectLinks
        websiteLink={data.links.website}
        githubLink={data.links.github}
      />
      <div className="description-wrap">
        <h5>Description</h5>
        <p>{data.description}</p>
      </div>
      <DeviceImages data={data} />
      <div className="technologies">{data.technologies}</div>
      <h2>Technologies</h2>
      <ul className="technology-info">
        {data.technologyInfo.map((info, i) => (
          <li key={i}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectPage;
