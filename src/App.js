import React from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />
    <Routes />
    <Footer />
  </>
);

export default withRouter(App);
