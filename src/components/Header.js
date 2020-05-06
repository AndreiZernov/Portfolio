import React from "react";
import { NavLink } from "react-router-dom";

const links = ["contact_me", "about"];

const Header = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <NavLink
        activeStyle={{
          opacity: 1,
        }}
        className="header-name"
        to="/"
        onClick={() => handleClick()}
      >
        <h1>Andrew Z</h1>
        <h5>Front-End Software Engineer</h5>
      </NavLink>
      <div className="header-navbar">
        {links.map((link) => (
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              opacity: 1,
            }}
            key={link}
            onClick={() => handleClick()}
            to={`/${link.replace(/_/g, "")}`}
          >
            {link.replace(/_/g, " ")}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
