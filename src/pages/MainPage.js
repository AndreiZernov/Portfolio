import React from "react";
import { projectsData } from "../data/projectsData";
import { stackData } from "../data/stackData";
import { FaGithub, FaGlobe } from "react-icons/fa";

const stackParts = [
  { name: "technologies", class: "applicationData" },
  { name: "DevOps", class: "devops" },
  { name: "Other Tools", class: "businessTools" },
];

const MainPage = () => (
  <div className="page">
    <div className="main-page">
      <div className="main-wrap">
        <div className="main-slider"></div>
        <div className="main-slider2"></div>
        <h2>{projectsData.multik.name}</h2>

        <div className="project-links">
          <a
            href={projectsData.multik.links.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size="1.4em" color="black" alt="website" />
          </a>
          <a
            href={projectsData.multik.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.4em" color="black" alt="github" />
          </a>
        </div>
        <div className="images">
          <img
            id="laptop"
            src={projectsData.multik.images.laptop}
            alt="laptop"
          />
          <img
            id="tablet"
            src={projectsData.multik.images.tablet}
            alt="tablet"
          />
          <img id="phone" src={projectsData.multik.images.phone} alt="phone" />
        </div>
      </div>

      <div className="main-wrap">
        <div className="main-slider"></div>
        <div className="main-slider2"></div>

        <h2>{projectsData.reactFinder.name}</h2>

        <div className="project-links">
          <a
            href={projectsData.reactFinder.links.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size="1.4em" color="black" alt="website" />
          </a>
          <a
            href={projectsData.reactFinder.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.4em" color="black" alt="github" />
          </a>
        </div>
        <div className="images">
          <img
            id="laptop"
            src={projectsData.reactFinder.images.laptop}
            alt="laptop"
          />
          <img
            id="tablet"
            src={projectsData.reactFinder.images.tablet}
            alt="tablet"
          />
          <img
            id="phone"
            src={projectsData.reactFinder.images.phone}
            alt="phone"
          />
        </div>
      </div>

      <div className="main-wrap">
        <div className="main-slider"></div>
        <div className="main-slider2"></div>

        <h2>{projectsData.reactApp.name}</h2>
        <div className="project-links">
          <a
            href={projectsData.reactApp.links.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size="1.4em" color="black" alt="website" />
          </a>
          <a
            href={projectsData.reactApp.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.4em" color="black" alt="github" />
          </a>
        </div>
        <div className="images">
          <img
            id="laptop"
            src={projectsData.reactApp.images.laptop}
            alt="laptop"
          />
          <img
            id="tablet"
            src={projectsData.reactApp.images.tablet}
            alt="tablet"
          />
          <img
            id="phone"
            src={projectsData.reactApp.images.phone}
            alt="phone"
          />
        </div>
      </div>
      <div className="main-wrap">
        <div className="main-slider"></div>
        <div className="main-slider2"></div>

        <div className="stack">
          <h2>My Tech Stack</h2>
          {stackParts.map((part, i) => (
            <div key={i} className={part.class}>
              <h3>{part.name.toUpperCase()}</h3>
              {stackData[part.class].map((item, i) => (
                <div key={i}>
                  {item.img}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
