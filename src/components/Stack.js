import React from "react";
import { stackData } from "../data/stackData";

const Stack = () => (
  <div className="stack">
    <h2>My Tech Stack</h2>
    <div className="applicationData">
      <h3>Application & Data</h3>
      {stackData.applicationData.map((item) => (
        <div>
          {item.img}
          <p>{item.name}</p>
        </div>
      ))}
      <p></p>
    </div>
    <div className="Utilities">
      <h3>Utilities</h3>
      {stackData.Utilities.map((item) => (
        <div>
          {item.img}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
    <div className="devops">
      <h3>DevOps</h3>
      {stackData.devops.map((item) => (
        <div>
          {item.img}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
    <div className="businessTools">
      <h3>Business Tools</h3>
      {stackData.businessTools.map((item) => (
        <div>
          {item.img}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Stack;
