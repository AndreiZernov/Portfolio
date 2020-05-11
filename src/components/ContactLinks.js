import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { IoMdMailOpen } from "react-icons/io";

const FooterContent = [
  {
    id: 0,
    url: "https://github.com/AndreiZernov",
    img: <FaGithub size="1.4em" color="white" alt="github" />,
    info: "www.github.com/AndreiZernov",
  },
  {
    id: 1,
    url: "https://www.linkedin.com/in/andrei-zernov/",
    img: <FaLinkedin size="1.4em" color="white" alt="linkedin" />,
    info: "www.linkedin.com/in/andrei-zernov",
  },
  {
    id: 2,
    url: "mailto:andrei.zernov@outlook.com",
    img: <IoMdMailOpen size="1.4em" color="white" alt="mail" />,
    info: "andrei.zernov@outlook.com",
  },
];

const ContactLinks = () => (
  <div className="contact-links">
    {FooterContent.map((link) => (
      <div key={link.id}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.img}
        </a>
        <p>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.info}
          </a>
        </p>
      </div>
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
      <AiFillWechat size="1.4em" color="white" alt="wechat" />
    </OverlayTrigger>{" "}
    <p>Id: AndreiZernov</p>
  </div>
);

export default ContactLinks;
