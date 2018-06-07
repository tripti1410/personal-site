import React from "react";
import "./social-links.css";

const SocialLinks = () => {
  return (
    <div className="social-link-container">
      <a href="https://twitter.com/imtraptir" className="social-link">
        <i className="fab fa-twitter-square fa-2x" />
      </a>
      <a href="https://github.com/tripti1410" className="social-link">
        <i className="fab fa-github-square fa-2x" />
      </a>
      <a href="www.linkedin.com/in/imtraptir" className="social-link">
        <i className="fab fa-linkedin fa-2x" />
      </a>
    </div>
  );
};

export default SocialLinks;
