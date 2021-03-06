import React from "react";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  let data = new Date();
  return (
    <footer>
      <ContactLinks />
      <span>
        &copy; Copyright {data.getFullYear()}, Andrei Zernov. All Rights
        Reserved
      </span>
    </footer>
  );
};

export default Footer;
