import React from "react";
import PropTypes from "prop-types";

const DeviceImages = ({ data }) => (
  <a
    href={data.links.website}
    target="_blank"
    rel="noopener noreferrer"
    className="device-images"
  >
    <img id="laptop" src={data.images.laptop} alt="laptop" />
    <img id="tablet" src={data.images.tablet} alt="tablet" />
    <img id="phone" src={data.images.phone} alt="phone" />
  </a>
);

DeviceImages.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DeviceImages;
