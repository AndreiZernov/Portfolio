import React from "react";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const ProjectsPage = () => (
  <div className="page">
    <section className="main-projects">
      <Project data={projectsData.multik} />
      <Project data={projectsData.reactFinder} />
      <Project data={projectsData.reactApp} />
    </section>
  </div>
);

export default ProjectsPage;
