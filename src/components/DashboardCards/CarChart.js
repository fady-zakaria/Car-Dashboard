import React from "react";
import "./dashboardcards.css";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

import { carStatics } from "../../data";

const CarChart = () => {
  return (
    <>
      <h3 className="stats-title">
        <strong>Car</strong> Statistics
      </h3>
      <div className="filter">
        <div className="Miles">
          <span>20 February 2022</span>
        </div>
        <div className="date-car">
          <button>Day</button>
          <button>Week</button>
          <button>Month</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={carStatics}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffd194" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffd194" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#ddd" />

          <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
          <Tooltip wrapperClassName="tooltip__style" cursor={false} />

          <Area
            type="monotone"
            dataKey="day"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default CarChart;
