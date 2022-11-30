import React, { useState } from "react";
import "./charts.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import { TrackHistory } from "../../data";

const TrackingHistory = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}km\h</p>
        </div>
      );
    }
  };
  const [focusBar, setFocusBar] = useState(null);
  return (
    <div className="track-chart">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="Chart-Container-edit"
      >
        <BarChart
          data={TrackHistory}
          onMouseMove={(state) => {
            if (state.isTooltipActive) {
              setFocusBar(state.activeTooltipIndex);
            } else {
              setFocusBar(null);
            }
          }}
        >
          <XAxis dataKey="X" stroke="#A4A5A6" />
          <YAxis ticks={[0, 5, 10, 15, 20, 25, 30]} stroke="#808191" />
          <Bar
            dataKey="value"
            fill="rgba(255, 126, 134, 0.1)"
            barSize={20}
            radius={[10, 10, 0, 0]}
          >
            {TrackHistory.map((entry, index) => (
              <Cell
                fill={
                  focusBar === index ? "#FF6370" : "rgba(255, 126, 134, 0.1)"
                }
              />
            ))}
          </Bar>

          {/* <Tooltip cursor={false} content={<CustomTooltip />} /> */}
          <Tooltip wrapperClassName="tooltip__style" cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrackingHistory;
