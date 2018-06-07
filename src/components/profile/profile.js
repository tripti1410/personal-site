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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </div>
  );
};

export default Profile;