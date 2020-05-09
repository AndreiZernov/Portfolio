import React, { useEffect } from "react";
import ProjectLinks from "../components/ProjectLinks";
import DeviceImages from "../components/DeviceImages";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ProjectPage = ({ data }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <Link id="btn-back" to="/">
        <FaArrowAltCircleLeft size="2rem" color="silver" alt="go back" />
      </Link>
      <div className="background-img back-img-dark" />

      <div className="project page">
        <h1>{data.name}</h1>
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
          {data.technologyInfo.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
