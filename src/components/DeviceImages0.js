import React from "react";
import PropTypes from "prop-types";

const DeviceImages = ({ data }) => (
  <div className="device-images">
    <img id="laptop" src={data.images.laptop} alt="laptop" />
    <img id="tablet" src={data.images.tablet} alt="tablet" />
    <img id="phone" src={data.images.phone} alt="phone" />
  </div>
);

DeviceImages.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DeviceImages;
