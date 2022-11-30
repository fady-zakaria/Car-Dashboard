import React from "react";
import "./bookingcarcard.css";

const BookingCarCard = (props) => {
  const { carName, likes, imgUrl, rentPrice, Model, people } = props.car;
  return (
    <div className="car-item">
      <div className="car-item-wrap">
        <div className="car-item-top">
          <div className="car-item-title">
            <h3>{carName}</h3>
            {likes ? (
              <img src="assets/images/like-filled.png" />
            ) : (
              <img src="assets/images/like-empty.png" />
            )}
          </div>
          <p>{Model}</p>
        </div>
        <div className="car-img">
          <img alt="car" src={imgUrl} />
        </div>

        <div className="car-item-bottom">
          <div className="car-item-icons">
            <div className="car-item-icon">
              <img src="assets/images/icon15.png" />
              <span>{people}</span>
            </div>

            <div className="car-item-icon">
              <img src="assets/images/icon17.png" />
              <span>Manual</span>
            </div>
          </div>
          <div className="car-item-price">
            <span>${rentPrice}/d</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCarCard;
