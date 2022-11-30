import React, { useState } from "react";
import "./dashboardcards.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
} from "recharts";

import { milesStatics } from "../../data";

const MileChart = () => {
  const [focusBar, setFocusBar] = useState(null);
  return (
    <>
      <h3 className="stats-title">
        <strong>Miles</strong> Statistics
      </h3>
      <div className="filter">
        <div className="date">
          <button>Day</button>
          <button>Week</button>
          <button>Month</button>
        </div>
        <div className="Miles">
          <span>256 Miles</span>
        </div>
      </div>

      <ResponsiveContainer width="100%">
        <BarChart
          data={milesStatics}
          onMouseMove={(state) => {
            if (state.isTooltipActive) {
              setFocusBar(state.activeTooltipIndex);
            } else {
              setFocusBar(null);
            }
          }}
        >
          <XAxis dataKey="name" stroke="#808191" />
          <Bar dataKey="mileStats" fill="#F4F5F9" barSize={20}>
            {milesStatics.map((entry, index) => (
              <Cell fill={focusBar === index ? "#2884FF" : "#F4F5F9"} />
            ))}
          </Bar>

          <Tooltip wrapperClassName="tooltip__style" cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default MileChart;
