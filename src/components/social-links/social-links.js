import React from "react";
import "./social-links.css";

const SocialLinks = () => {
  return (
    <div className="social-link-container">
      <a href="https://twitter.com/imtraptir" className="social-link" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://github.com/tripti1410" className="social-link" target="_blank">
        <i className="fab fa-github" />
      </a>
      <a href="www.linkedin.com/in/imtraptir" className="social-link" target="_blank">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://medium.com/@r_tripti" className="social-link" target="_blank">
      <i className="fab fa-medium-m"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
