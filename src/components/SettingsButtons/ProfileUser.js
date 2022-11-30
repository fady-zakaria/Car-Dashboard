import React, { useState } from "react";
import "./settingsbuttons.scss";
import Avatar from "@mui/material/Avatar";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const ProfileUser = () => {
  const [file, setFile] = useState("");

  const handleAdd = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="profile">
      <div className="profile-top">
        <div className="profile-title">
          <p className="title">Profile</p>
          <p className="title-desc">
            Update your photo and personal details here.
          </p>
          <hr className="profile-line" />
        </div>
        <div className="profile-address">
          <form onSubmit={handleAdd}>
            <div className="live-in">
              <div className="live-in-wrap">
                <label>Live in</label>
                <div className="live-in-wrap-input">
                  <img alt="home" src="\assets\images\home.png" />
                  <input placeholder="Zuichi, Switzerland" />
                </div>
              </div>
              <div className="street-addr-wrap">
                <label>Street Address</label>
                <div className="street-addr-wrap-input">
                  <img alt="home" src="\assets\images\home.png" />
                  <input placeholder="2445 Crosswind Drive" />
                </div>
              </div>
            </div>
            <div className="email-address">
              <label>Email Address</label>
              <div className="email-address-input">
                <img alt="message" src="\assets\images\message.png" />
                <input placeholder="uihutofficial@gmail.com" />
              </div>
            </div>
            <div className="dobAndGender">
              <div className="live-in-wrap">
                <label>Date Of Birth</label>
                <div className="live-in-wrap-input">
                  <img alt="home" src="\assets\images\birthday.png" />
                  <input placeholder="07.12.195" />
                </div>
              </div>
              <div className="street-addr-wrap">
                <label>Gender</label>

                <select className="gender-input">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <hr className="profile-line" style={{ marginTop: 30 }} />
            <div className="photo">
              <div className="photo-wrapper">
                <div className="photo-title-wrap">
                  <p className="photo-title">Your photo</p>
                  <p className="photo-desc">
                    This will be displayed on your profile.
                  </p>
                </div>
                <Avatar src="/broken-image.jpg" />
              </div>
              <div className="photo-buttons">
                <button className="del-btn">Delete</button>
                <button className="update-btn">Update</button>
              </div>
            </div>
            <FileUploadIcon />
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              //   style={{ display: "none" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
