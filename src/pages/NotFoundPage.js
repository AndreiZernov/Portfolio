import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <Link id="btn-back" to="/">
        <FaArrowAltCircleLeft size="35px" color="silver" alt="go back" />
      </Link>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">
        <button id="not-found-btn" alt="go back">
          Back to Main Page
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
