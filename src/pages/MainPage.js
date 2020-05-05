import React from "react";
import Project from "../components/Project";
import Stack from "../components/Stack";
import { projectsData } from "../data/projectsData";

const MainPage = () => (
  <div className="page">
    <main>
      <h1>Andrew Zernov</h1>
      <p>Front-End Software Engineer</p>
    </main>
    <Stack />
    <h1>Projects</h1>
    <section className="main-projects">
      <Project data={projectsData.multik} />
      <Project data={projectsData.reactFinder} />
      <Project data={projectsData.reactApp} />
    </section>
  </div>
);

export default MainPage;
