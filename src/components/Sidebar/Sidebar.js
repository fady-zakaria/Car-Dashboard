import React from "react";
import "./sidebar.css";
import { SidebarContent } from "../../data";
import { SidebarContentBT } from "../../data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="contents">
        <div className="top">
          <div className="logo">
            <img
              className="logo-Img"
              alt="logo"
              src="\assets\images\logo.png"
            />
            <p className="logo-Text">Motiv.</p>
          </div>

          <div className="top-contents">
            {SidebarContent.length !== 0 &&
              SidebarContent.map((tab) => (
                <>
                  <Link to={tab.link}>
                    <div key={tab.id} className="tab">
                      {tab.image}
                      <p className="tab-text">{tab.name}</p>
                    </div>
                  </Link>
                </>
              ))}
          </div>
        </div>
        <div className="bottom">
          {SidebarContentBT.length !== 0 &&
            SidebarContentBT.map((tab) => (
              <>
                <Link to={tab.link}>
                  <div key={tab.id} className="tab">
                    {tab.image}
                    <p className="tab-text">{tab.name}</p>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
