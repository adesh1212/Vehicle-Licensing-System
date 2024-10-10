import React, { useState } from "react";
import axios from "axios";
import { FaCar, FaUser, FaIdCard, FaCog, FaCalendarAlt } from "react-icons/fa"; // Importing icons

const VehicleRegistration = () => {
  const [vehicle, setVehicle] = useState({
    make: "",
    model: "",
    year: "",
    engineNumber: "",
    owner: "",
  });

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/vehicles/register",
        vehicle,
      );

      if (response.status === 201) {
        alert("Vehicle registered successfully!");
      } else {
        alert("Failed to register vehicle");
      }
    } catch (error) {
      console.error("Error registering vehicle:", error);
      alert("Error during registration");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 border">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Vehicle Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaIdCard className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="make"
              placeholder="Vehicle Make"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative">
            <FaCog className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="model"
              placeholder="Vehicle Model"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="year"
              placeholder="Year"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative">
            <FaIdCard className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="engineNumber"
              placeholder="Engine Number"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="owner"
              placeholder="Owner ID"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              Register Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleRegistration;
