import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import TechStackPage from "./pages/TechStackPage";
import ContactMePage from "./pages/ContactMePage";
import NotFoundPage from "./pages/NotFoundPage";

import { projectsData } from "./data/projectsData";

const Routes = () => {
  let location = useLocation();
  return (
    <Route path="*">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
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
        </CSSTransition>
      </TransitionGroup>
    </Route>
  );
};

export default Routes;
