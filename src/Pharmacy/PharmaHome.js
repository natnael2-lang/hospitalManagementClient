import React from "react";
import { Link } from "react-router-dom";
import PharmImage from './PharmImage.png';

const PharmacyHome = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${PharmImage})` }}>
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h2 className="text-4xl font-bold mb-4">አዲስ ህይወት አጠቃላይ ሆስፒታል</h2>
        <p className="text-lg mb-8">We care about you</p>

        <nav className="space-x-4">
          <Link to="/homeToDo">
            <button className="bg-blue-500 text-white py-2 px-4 rounded  hover:bg-blue-600 transition">To-Do</button>
          </Link>
          <Link to="/prescriptions">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Prescriptions</button>
          </Link>
          <Link to="/profilePharma">
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">My Profile</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default PharmacyHome;