import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SettingsButtons from "../SettingsButtons/SettingsButtons";
import "./settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-top">
          <p className="settings-title">Settings</p>
          <div className="settings-tabs">
            <Link to="/settings/details">
              <button className="settings-btn">My Details</button>
            </Link>
            <Link to="/settings/profile">
              <button className="settings-btn">Profile</button>
            </Link>
            <Link to="/settings/password">
              <button className="settings-btn">Password</button>
            </Link>
            <Link to="/settings/email">
              <button className="settings-btn">Email</button>
            </Link>
            <Link to="/settings/notification">
              <button className="settings-btn">Notification</button>
            </Link>
          </div>
        </div>
        <div>
          <SettingsButtons />
        </div>
      </div>
    </div>
  );
};

export default Settings;
