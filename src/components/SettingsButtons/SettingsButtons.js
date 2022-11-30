import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import Profile from "./Profile";
import ProfileUser from "./ProfileUser";

const SettingsButtons = () => {
  const params = useParams();

  return (
    <div>
      {/* <Profile /> */}
      {/* <ProfileUser /> */}
      {/* <p>{params.settingsbtn}</p> */}
      {/* {params.settingsbtn === "profile" && <Profile />} */}
      {params.settingsbtn === "profile" && <ProfileUser />}
    </div>
  );
};

export default SettingsButtons;
