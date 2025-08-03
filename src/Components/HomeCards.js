import React from "react";
import { FaChartLine, FaFileAlt, FaCog, FaLock } from "react-icons/fa";

const HomeCards = () => {
    return(
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
        <Card icon={<FaChartLine size={40} />} label="View Dashboard" />
        <Card icon={<FaFileAlt size={40} />} label="Generate Report" />
        <Card icon={<FaCog size={40} />} label="Settings" />
        <Card icon={<FaLock size={40} />} label="Logout" />
      </div>
    );
};
const Card = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow hover:shadow-md transition cursor-pointer">
      <div className="text-black mb-4">{icon}</div>
      <p className="text-lg font-medium">{label}</p>
    </div>
  );
};
export default HomeCards;