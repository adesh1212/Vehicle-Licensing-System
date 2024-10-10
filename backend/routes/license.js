// routes/licenseRoutes.js
const express = require("express");
const router = express.Router();
const License = require("../models/License"); // Import the License model
const Owner = require("../models/Owner");
const Vehicle = require("../models/Vehicle");

// Create a new license
router.post("/create", async (req, res) => {
  const { owner, vehicle, licenseNumber, licenseType, expirationDate } =
    req.body;

  try {
    // Check if the owner exists
      const existingOwner = await Owner.findOne({ id: owner });
      console.log(existingOwner);
    if (!existingOwner) {
      return res.status(400).json({ message: "Owner does not exist" });
      }

    // Check if the license number is unique
    const existingLicense = await License.findOne({ licenseNumber });
    if (existingLicense) {
      return res.status(400).json({ message: "License number already exists" });
    }

    // Check if the vehicle is registered (implement your logic)
    const v = await Vehicle.findOne({ id: vehicle }); // Modify this based on your schema
    if (!v) {
      return res
        .status(400)
        .json({ message: "No registered vehicle found for this owner" });
    }

    // Create the license
    const newLicense = new License({
      owner,
      vehicle,
      licenseNumber,
      licenseType,
      expirationDate,
    });
    await newLicense.save();

    res.status(201).json(newLicense);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating license", error: error.message });
  }
});

// Get all licenses
router.get("/", async (req, res) => {
  try {
    const licenses = await License.find();
    res.json(licenses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching licenses", error: error.message });
  }
});

// Get a license by ID
router.get("/vehicle", async (req, res) => {
  try {
      const license = await License.findOne({ vehicle:req.params.vehicle });
    if (!license) {
      return res.status(404).json({ message: "License not found" });
    }
    res.json(license);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching license", error: error.message });
  }
});

// Update a license
router.put("/vehicle", async (req, res) => {
  try {
    const updatedLicense = await License.findOneAndUpdate(
      { vehicle: req.params.vehicle },
      req.body,
      { new: true }
    );
    if (!updatedLicense) {
      return res.status(404).json({ message: "License not found" });
    }
    res.json(updatedLicense);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating license", error: error.message });
  }
});

// Delete a license
router.delete("/:id", async (req, res) => {
  try {
    const deletedLicense = await License.findOneAndDelete({
      vehicle: req.params.vehicle,
    });
    if (!deletedLicense) {
      return res.status(404).json({ message: "License not found" });
    }
    res.json({ message: "License deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting license", error: error.message });
  }
});

module.exports = router;
