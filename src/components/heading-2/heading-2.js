import React from "react";
import "./heading-2.css";

const Heading2 = ({ heading, iconClass }) => (
  <h2 className="heading-2">
    {iconClass && <i className={iconClass} />} {heading}
  </h2>
);

export default Heading2;