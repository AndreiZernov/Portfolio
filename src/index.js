import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./css/app.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.register();
