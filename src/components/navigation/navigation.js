import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li className="menu-item">
          <a href="/resume" className="menu-item-link">
            Resume
          </a>
        </li>
        <li className="menu-item">
          <a href="/blogs" className="menu-item-link">
            Blogs
          </a>
        </li>
        <li className="menu-item">
          <a href="/about" className="menu-item-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
