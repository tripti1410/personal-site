import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li className="menu-item">
          <a href="/" className="menu-item-link">
            About
          </a>
        </li>
        <li className="menu-item">
          <a href="/" className="menu-item-link">
            Profile
          </a>
        </li>
        <li className="menu-item">
          <a href="/" className="menu-item-link">
            Blog
          </a>
        </li>
        <li className="menu-item">
          <a href="/" className="menu-item-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
