import React from "react";
import vehicleImage from "../assets/vehicle.jpeg"; // Replace with your actual image path
import ownerImage from "../assets/owner.jpg"; // Replace with your actual image path
import licenseImage from "../assets/license.png"; // Replace with your actual image path

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Welcome to Vehicle Licensing System
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop solution for managing vehicle registrations, owners, and
          licenses.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src={vehicleImage}
            alt="Vehicle Registration"
            className="h-48 w-full object-contain rounded-t-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">Vehicle Registration</h2>
          <p className="text-gray-500 text-center mt-2">
            Easily register your vehicle and keep track of all relevant
            information.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src={ownerImage}
            alt="Owner Management"
            className="h-48 w-full object-contain rounded-t-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">Owner Management</h2>
          <p className="text-gray-500 text-center mt-2">
            Manage vehicle owners efficiently and maintain accurate records.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src={licenseImage}
            alt="License Management"
            className="h-48 w-full object-contain rounded-t-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">License Management</h2>
          <p className="text-gray-500 text-center mt-2">
            Track and manage licenses to ensure compliance with regulations.
          </p>
        </div>
      </section>

      <footer className="mt-10 text-center">
        <p className="text-gray-600">
          &copy; 2024 Vehicle Licensing System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
