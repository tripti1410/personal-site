import React from "react";
import "./link.css";

const Link = ({ href, target, classnames, children }) => {
  return target ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${classnames}`}
    >
      {children}
    </a>
  ) : (
    <a href={href} className={`link ${classnames}`}>
      {children}
    </a>
  );
};

export default Link;
