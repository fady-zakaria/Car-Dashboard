import React from "react";
import "./dashboardcards.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      <div className="single-card">
        <div className="single-card-contents">
          <img alt="energy" src="assets/images/energy.png" />
          <p>Energy</p>
          <div className="circularbar">
            <CircularProgressbar
              value={45}
              text={`${45}%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                textColor: "white",
                pathColor: "white",
                trailColor: "#B37EFC",
              })}
            />
          </div>
        </div>
      </div>
      <div className="single-card" style={{ background: "#FFFFFF" }}>
        <div className="single-card-contents">
          <img alt="energy" src="assets/images/range.png" />
          <p style={{ color: "black" }}>Range</p>
          <div className="circularbar">
            <CircularProgressbar
              value={57}
              text={`${157}k%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                textColor: "black",
                pathColor: "#FF7E86",
                trailColor: " #F4F5F9",
              })}
            />
          </div>
        </div>
      </div>

      <div className="single-card" style={{ background: "#FFFFFF" }}>
        <div className="single-card-contents">
          <img alt="energy" src="assets/images/break.png" />
          <p style={{ color: "black" }}>Break fluid</p>
          <div className="circularbar">
            <CircularProgressbar
              value={9}
              text={`${9}%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                textColor: "black",
                pathColor: "#A162F7",
                trailColor: " #F4F5F9",
              })}
            />
          </div>
        </div>
      </div>
      <div className="single-card" style={{ background: "#FFFFFF" }}>
        <div className="single-card-contents">
          <img alt="energy" src="assets/images/tire.png" />
          <p style={{ color: "black" }}>Tire Wear</p>
          <div className="circularbar">
            <CircularProgressbar
              value={25}
              text={`${25}%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "butt",
                textColor: "black",
                pathColor: "#F6CC0D",
                trailColor: " #F4F5F9",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
