import React from "react";
import Link from "../link/link";
import ProfileName from "../profile-name/profile-name";
import profile from "../../profile.JPG";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__image-container">
        <img className="profile__image" src={profile} alt="Tripti" />
      </div>
      <ProfileName />
      <div className="profile__description">
        <span className="item">Frontend developer</span>
        <span className="separator">|</span>
        <span className="item">CSS aficionado</span>
        <span className="separator">|</span>
        <span className="item">
          <i className="fas fa-heart red-heart" />&nbsp; CSS Grids
        </span>
        <span className="separator">|</span>
        <span className="item">Writer</span>
        <span className="separator">|</span>
        <span className="item">Learning software and life lessions</span>
        <span className="separator">|</span>
        <span className="item">
          Riding the waves with &nbsp;
          <Link target href="https://www.linkedin.com/in/amithgeorge/">Amith George</Link>
          &nbsp;<i className="fas fa-heart red-heart" />
        </span>
      </div>
    </div>
  );
};

export default Profile;
