// routes/vehicleRoutes.js
const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");
const Owner = require("../models/Owner"); // Import the Owner model
const { v4: uuidv4 } = require("uuid"); // Import uuidv4

// Register a new vehicle
router.post("/register", async (req, res) => {
  const { owner, make, model, year, engineNumber } = req.body;

  try {
      // Check if the owner exists
      console.log(typeof(owner));
      const existingOwner = await Owner.findOne({
        id: owner,
      });
      console.log(existingOwner)
    if (!existingOwner) {
      return res.status(400).json({ message: "Owner does not exist" });
    }

    const vehicle = new Vehicle({
      id: uuidv4(), // Generate a unique ID using uuidv4
      owner, // Owner's ID from the request body
      make,
      model,
      year,
      engineNumber,
    });

    await vehicle.save();
    res.status(201).json(vehicle); // Return the created vehicle with status 201
  } catch (error) {
    res
      .status(500)
      .json({ message: "Vehicle registration failed", error: error.message });
  }
});

// Get all vehicles with owner details
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find(); // Fetch all vehicles
    res.json(vehicles); // Return the list of vehicles
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch vehicles", error: error.message });
  }
});

module.exports = router;
