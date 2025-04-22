import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Lucknow", "Mumbai", "Aligarh"],
  datasets: [
    { label: "Electricians", data: [19, 80, 10], backgroundColor: "#FF7F50" },
    { label: "Painter", data: [12, 19, 7], backgroundColor: "#018458" },
    { label: "Carpenter", data: [11, 17, 23], backgroundColor: "#6495ED" },
    { label: "Plumber", data: [13, 29, 7], backgroundColor: "#008B8B" },
    { label: "Welder", data: [32, 40, 17], backgroundColor: "#BDB76B" },
    { label: "Application Repair", data: [12, 34, 17], backgroundColor: "#2F4F4F" },
    { label: "Tailor", data: [22, 17, 29], backgroundColor: "#102E50" },
    { label: "Plumbers", data: [15, 19, 31], backgroundColor: "#DC143C" }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow height control
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Skilled Workers by City"
    }
  }
};

const ChartPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center mt-16">
        WorkWhiz Dashboard
      </h1>
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
        <div className="relative h-[400px] sm:h-[500px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
