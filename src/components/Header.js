import React, { useState, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

const Links = ["projects", "contact"];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [titleTop, setTitleTop] = useState("13px");
  const [headerHeight, setHeaderHeight] = useState("70px");

  const handleMenu = () => setOpenMenu(!openMenu);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setTitleTop("7px");
        setHeaderHeight("50px");
      } else {
        setTitleTop("13px");
        setHeaderHeight("70px");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <header style={{ height: headerHeight }}>
      <GiHamburgerMenu
        size="2rem"
        color="black"
        alt="info"
        className="header-menu"
        onClick={() => handleMenu()}
      />
      <div
        style={{
          transform: openMenu ? "translateX(0)" : "translateX(-130%)",
          opacity: openMenu ? 1 : 0,
          zIndex: openMenu ? 18 : 0,
        }}
        className="header-drop"
      >
        {Links.map((link) => (
          <Link key={link} onClick={() => handleClick()} to={`/${link}`}>
            {link.toUpperCase().replace("_", " ")}
          </Link>
        ))}
      </div>
      <div className="header-navbar">
        {Links.map((link) => (
          <NavLink key={link} onClick={() => handleClick()} to={`/${link}`}>
            {link.toUpperCase().replace("_", " ")}
          </NavLink>
        ))}
      </div>

      <Link
        className="header-name"
        style={{ top: titleTop }}
        to="/"
        onClick={() => handleClick()}
      >
        <h1>Andrew Z</h1>
      </Link>

      <Link className="header-home" to="/" onClick={() => handleClick()}>
        <FaHome size="2rem" color="black" alt="info" />
      </Link>
    </header>
  );
};

export default Header;
