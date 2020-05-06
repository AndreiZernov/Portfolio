import React from "react";
import { stackData } from "../data/stackData";

const stackParts = [
  { name: "technologies", class: "applicationData" },
  { name: "DevOps", class: "devops" },
  { name: "Other Tools", class: "businessTools" },
];

const TechStackPage = () => (
  <div className="page">
    <div className="stack">
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
);

export default TechStackPage;
