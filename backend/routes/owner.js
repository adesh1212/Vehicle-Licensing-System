// routes/ownerRoutes.js
const express = require("express");
const router = express.Router();
const Owner = require("../models/Owner");
const { v4: uuidv4 } = require("uuid"); // Import uuid

// Create a new owner
router.post("/register", async (req, res) => {
  try {
    const ownerId = uuidv4(); // Generate a new unique ID
    const owner = new Owner({
      id: ownerId, // Assign the generated ID
      ...req.body, // Spread the rest of the body
    });
    await owner.save();
    res.status(201).json(owner); // Return the created owner with status 201
  } catch (error) {
    res
      .status(500)
      .json({ message: "Owner registration failed", error: error.message });
  }
});

// Get all owners
router.get("/", async (req, res) => {
  try {
    const owners = await Owner.find(); // Fetch all owners
    res.json(owners); // Return the list of owners
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch owners", error: error.message });
  }
});

module.exports = router;
