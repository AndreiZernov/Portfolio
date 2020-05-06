import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import MainPage from "./pages/MainTry";
import ProjectsPage from "./pages/ProjectsPage";
import TechStackPage from "./pages/TechStackPage";

const Routes = () => {
  let location = useLocation();
  return (
    <Route path="*">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={MainPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/mytechstack" component={TechStackPage} />

            {/* <Route path="/techstack" component={StackPage} />
            <Route path="/contactme" component={ContaactMePage} /> */}

            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Route>
  );
};

export default Routes;
