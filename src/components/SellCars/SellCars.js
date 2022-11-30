import React from "react";
import TrackingHistory from "../Charts/TrackingHistory";
import "./sellcars.css";

const SellCars = () => {
  return (
    <div className="sellcars">
      <div className="sellcars-wrapper">
        <h2 className="sellcars-title">Sell Cars</h2>
        <div className="sell-cars-top">
          <div className="sell-car">
            <p>2022 Mercedes Benz</p>
            <img alt="car" src="assets/images/car10.png" />
          </div>
          <div className="track-history">
            <div className="track-history-wrap">
              <p>Tracking History</p>
              <TrackingHistory />
            </div>
          </div>
        </div>
        <div className="sell-cars-bottom">
          <div className="offers">
            <p>Offers</p>
            <div className="filters-container">
              <select className="filter-widget">
                <option value="All">All</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
              <select className="filter-widget">
                <option value="All">All</option>
                <option value="toyota">Toyota</option>
                <option value="porshe">Porshe</option>
              </select>
            </div>
          </div>
          <div className="offer-item">
            <div className="offer-item-wrap"></div>
          </div>
          {/* <div className="offer-item"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SellCars;
