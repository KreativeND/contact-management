import React from "react";
import LineChart from "../components/LineChart";
import Map from "../components/Map";

const Charts: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Charts and Maps</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cases Over Time</h2>
        <LineChart />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Global COVID-19 Map</h2>
        <Map />
      </div>
    </div>
  );
};

export default Charts;
