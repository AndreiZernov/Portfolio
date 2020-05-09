import React from "react";
import pdf from "../assets/Andrei_Zernov_CV.pdf";

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <h5>Current Location:</h5>
        <p>Shanghai, China</p>
      </div>
      <div>
        <h5>Availability:</h5>
        <p>Full-time, Part-time, Contract</p>
      </div>
      <div>
        <h5>CV:</h5>
        <a href={pdf} target="_blank">
          Download
        </a>
      </div>
    </div>
  );
};

export default Profile;
