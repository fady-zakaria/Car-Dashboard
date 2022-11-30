import React, { useState } from "react";
import { bookingCarsData } from "../../data";
import BookingCarCard from "../BookingCarCard.js/BookingCarCard";
import "./booking.css";

const Booking = () => {
  let [filterStatus, setfilterStatus] = useState("all");
  let [filtermodel, setfiltermodel] = useState("all");

  let filteredCars = bookingCarsData.filter((car) => {
    if (filtermodel === "toyota") {
      return car.Model === "toyata";
    } else if (filtermodel === "porshe") {
      return car.Model === "porshe";
    } else if (filterStatus === "New") {
      return car.status === "New";
    } else if (filterStatus === "Used") {
      return car.status === "Used";
    } else return car;
  });

  const handleSelectStatus = (e) => {
    setfilterStatus(e.target.value);
  };
  const handleSelectModel = (e) => {
    setfiltermodel(e.target.value);
  };

  return (
    <div className="booking">
      <div className="booking-wrapper">
        <div>
          <h2 className="booking-title">Booking</h2>
          <div className="filter-wrapper">
            <div className="filters-container">
              <select className="filter-widget" onChange={handleSelectStatus}>
                <option value="All">All</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
              <select className="filter-widget" onChange={handleSelectModel}>
                <option value="All">All</option>
                <option value="toyota">Toyota</option>
                <option value="porshe">Porshe</option>
              </select>
            </div>
            <div className="filter-icons">
              <img src="assets/images/icon9.png" />
              <img src="assets/images/icon10.png" />
            </div>
          </div>
          <div className="booking-cars">
            {filteredCars.map((car) => (
              <BookingCarCard car={car} key={car.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
