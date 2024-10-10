import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentForm from "./payment"; // Import the PaymentForm
import { toast } from "react-toastify";

const LicenseManagement = () => {
  const [newLicense, setNewLicense] = useState({
    owner: "",
    vehicle: "",
    licenseNumber: "",
    licenseType: "",
    expirationDate: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [amount] = useState(10.0); // Set the amount to charge

  const handleChange = (e) => {
    setNewLicense({ ...newLicense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentForm(true); // Show the payment form
  };

  const handlePaymentSuccess = async (paymentIntent) => {
    try {
      // After successful payment, send license data to the backend
      console.log(paymentIntent);
      await axios.post("http://localhost:8000/licenses/create", {
        ...newLicense,
        paymentId: paymentIntent.id,
      });
      setPaymentSuccess(true);
      toast.success("License added successfully!"); 
      setShowPaymentForm(false); // Hide payment form
      // Optionally reset form
      setNewLicense({
        owner: "",
        vehicle: "",
        licenseNumber: "",
        licenseType: "",
        expirationDate: "",
      });
    } catch (error) {
      console.error("Error creating license:", error);
       toast.error("Failed to add license");
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

      {showPaymentForm && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
          <PaymentForm amount={amount} onSuccess={handlePaymentSuccess} />
        </div>
      )}
    </div>
  );
};

export default LicenseManagement;
