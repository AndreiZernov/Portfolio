import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { stackData } from "../data/stackData";

const stackParts = [
  { name: "technologies", class: "applicationData" },
  { name: "DevOps", class: "devops" },
  { name: "Other Tools", class: "businessTools" },
];

const TechStackPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="background-image">
      <div className="stack">
        <Link id="btn-back" to="/">
          <FaArrowAltCircleLeft size="35px" color="silver" alt="go back" />
        </Link>
        <h1>My Tech Stack</h1>
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
};

export default TechStackPage;
