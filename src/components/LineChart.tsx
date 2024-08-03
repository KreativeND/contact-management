// src/components/LineChart.tsx

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchHistoricalData } from "../api/covidAPI";
import { useQuery } from "@tanstack/react-query";

// Register components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// Sample data
const LineChart = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['historicalData'], queryFn: fetchHistoricalData })

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  // Prepare the data for the chart
  const chartData = {
    labels: Object.keys(data.cases), // Dates
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases), // Number of cases
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
      {
        label: "Deaths",
        data: Object.values(data.deaths), // Number of deaths
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: true,
      },
      {
        label: "Recovered",
        data: Object.values(data.recovered), // Number of recoveries
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>COVID-19 Historical Data</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
