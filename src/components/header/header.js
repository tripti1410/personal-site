import React from "react";
import SocialLinks from "../social-links/social-links";
import Navigation from "../navigation/navigation";
import Profile from "../profile/profile";
import "./header.css";

const Header = () => {
  return (
    <header className="masthead">
      <Profile />
      <Navigation />
      <SocialLinks />
    </header>
  );
};

export default Header;
