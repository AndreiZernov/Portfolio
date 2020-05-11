import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import TechStackPage from "./pages/TechStackPage";
import ContactMePage from "./pages/ContactMePage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter as Router } from "react-router-dom";

import { projectsData } from "./data/projectsData";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route
        path="/projectMultic"
        component={() => <ProjectPage data={projectsData.multik} />}
      />
      <Route
        path="/projectReactWeb"
        component={() => <ProjectPage data={projectsData.reactFinder} />}
      />
      <Route
        path="/projectReactApp"
        component={() => <ProjectPage data={projectsData.reactApp} />}
      />
      <Route path="/mytechstack" component={TechStackPage} />
      <Route path="/contactme" component={ContactMePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;
