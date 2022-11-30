import React from "react";
import "./dashboardcards.css";

const RecommendCars = (props) => {
  const { carName, likes, imgUrl, rentPrice, percentage, colorCard } =
    props.car;
  return (
    <div className="recommend-car-card" style={{ background: `${colorCard}` }}>
      <div className="recommend-car-card-wrap">
        <div className="recommend-car-top">
          <img src="assets/images/icon.png" />
          <h5>{percentage}% Recommended</h5>
        </div>
        <img alt="car" src={imgUrl} />
        <h4>{carName}</h4>
        <div className="recommend-car-bottom">
          <div className="recommend-icons">
            <img src="assets/images/icon 2.png" />
            <span>{likes}K</span>
            <img src="assets/images/icon 3.png" />
            <img src="assets/images/icon 4.png" />
          </div>
          <div className="recommend-price">
            <span>${rentPrice}/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendCars;
