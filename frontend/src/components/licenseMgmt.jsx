// src/components/LicenseManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const LicenseManagement = () => {
  const [newLicense, setNewLicense] = useState({
    owner: "",
    vehicle: "",
    licenseNumber: "",
    licenseType: "",
    expirationDate: "",
  });

  const handleChange = (e) => {
    setNewLicense({ ...newLicense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/licenses/create", newLicense);
      setNewLicense({
        owner: "",
        vehicle: "",
        licenseNumber: "",
        licenseType: "",
        expirationDate: "",
      }); // Clear form
      fetchLicenses(); // Refresh license list
    } catch (error) {
      console.error("Error creating license:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">License Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="owner"
          placeholder="Owner ID"
          value={newLicense.owner}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle ID"
          value={newLicense.vehicle}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <input
          type="text"
          name="licenseNumber"
          placeholder="License Number"
          value={newLicense.licenseNumber}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <input
          type="text"
          name="licenseType"
          placeholder="License Type"
          value={newLicense.licenseType}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <input
          type="date"
          name="expirationDate"
          value={newLicense.expirationDate}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white rounded-lg p-2">
          Add License
        </button>
      </form>
    </div>
  );
};

export default LicenseManagement;
