import React from "react";
import "./dashboard.css";
import DashboardCards from "../DashboardCards/DashboardCards";
import MileChart from "../DashboardCards/MileChart";
import CarChart from "../DashboardCards/CarChart";
import RecommendCars from "../DashboardCards/RecommendCars";
import { recommendCarsData } from "../../data";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <DashboardCards />
        <div className="statics">
          <div className="stats">
            <MileChart />
          </div>
          <div className="stats">
            <CarChart />
          </div>
        </div>
        <div className="recomm-cars">
          {recommendCarsData.map((car) => (
            <RecommendCars car={car} key={car.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
