import React from "react";
import profile from "../../profile.JPG";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img className="profile-image" src={profile} alt="Tripti" />
      </div>
      <div className="profile-description">
        Frontend developer; CSS aficionado; <i class="fas fa-heart red-heart"></i> CSS Grids; writer; learning software and life lessions <i class="fas fa-smile yellow-smile"></i> Wife of passionate developer Amith george <i class="fas fa-heart red-heart"></i>
      </div>
    </div>
  );
};

export default Profile;