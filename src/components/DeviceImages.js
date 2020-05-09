import React from "react";

const DeviceImages = ({ data }) => (
  <div className="device-images">
    <img id="laptop" src={data.images.laptop} alt="laptop" />
    <img id="tablet" src={data.images.tablet} alt="tablet" />
    <img id="phone" src={data.images.phone} alt="phone" />
  </div>
);

export default DeviceImages;
