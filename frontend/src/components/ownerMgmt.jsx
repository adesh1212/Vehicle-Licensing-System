// src/components/OwnerManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const OwnerManagement = () => {
  const [newOwner, setNewOwner] = useState({
    name: "",
    address: "",
    contact: "",
  });


  const handleChange = (e) => {
    setNewOwner({ ...newOwner, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/owners/register",
        newOwner
      );
      setNewOwner({ name: "", address: "", contact: "" });
      toast.success("Owner added successfully!"); // Clear form
      fetchOwners(); // Refresh owner list
    } catch (error) {
      console.error("Error creating owner:", error);
      toast.error(error); 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Owner Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Owner Name"
          value={newOwner.name}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Owner Address"
          value={newOwner.address}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Owner Contact"
          value={newOwner.contact}
          onChange={handleChange}
          className="border rounded-lg p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white rounded-lg p-2">
          Add Owner
        </button>
      </form>
    </div>
  );
};

export default OwnerManagement;
