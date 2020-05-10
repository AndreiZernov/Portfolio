import React, { useEffect } from "react";
import ContactLinks from "../components/ContactLinks";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import pdf from "../assets/Andrei_Zernov_CV.pdf";

const ContactMePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <Link id="btn-back" to="/">
        <FaArrowAltCircleLeft size="2rem" color="silver" alt="go back" />
      </Link>
      <div className="background-img back-img-dark" />

      <div className="page contact-me">
        <h1>Andrei Zernov</h1>
        <p>Front End Software Engineer</p>
        <div className="cv">
          <h5>CV:</h5>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
        <p>
          I am a Front-End Software Engineer with extensive knowledge of Network
          and Cybersecurity Concepts. I have a Master’s Degree in Business
          Management from Pacific National University and +5 years of working
          experience in an international environment. My primary focus and
          inspiration for my studies are Web Development. In my free time, study
          UI, UX design and Application engineering to extend my expertise. I am
          both driven and self-motivated and continuously experimenting with new
          technologies and techniques. Very passionate about Web Engineering and
          strive to better myself as a developer, and the development community
          as a whole.
        </p>
        <ContactLinks />
      </div>
    </div>
  );
};

export default ContactMePage;
