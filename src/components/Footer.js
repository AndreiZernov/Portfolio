import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterContent = [
  {
    id: 0,
    url: "https://github.com/AndreiZernov",
    img: <FaGithub size="1.4em" color="black" alt="github" />,
  },
  {
    id: 1,
    url: "https://www.linkedin.com/in/andrei-zernov/",
    img: <FaLinkedin size="1.4em" color="black" alt="linkedin" />,
  },
  {
    id: 2,
    url: "https://wa.link/kz7x7z",
    img: <IoLogoWhatsapp size="1.4em" color="black" alt="whatsapp" />,
  },
];

const Footer = () => {
  let data = new Date();
  return (
    <footer>
      <div>
        {FooterContent.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.img}
          </a>
        ))}
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={
            <Popover>
              <Popover.Content>
                <img
                  style={{ width: "15vh" }}
                  src={require("../assets/qrcode.jpg")}
                  alt="logo"
                />
              </Popover.Content>
            </Popover>
          }
        >
          <AiFillWechat size="1.4em" color="black" alt="wechat" />
        </OverlayTrigger>{" "}
      </div>
      <span>
        &copy; Copyright {data.getFullYear()}, Andrew Zernov. All Rights
        Reserved
      </span>
    </footer>
  );
};

export default Footer;
