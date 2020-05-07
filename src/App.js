import React from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Routes />
    <Footer />
  </>
);

export default withRouter(App);
