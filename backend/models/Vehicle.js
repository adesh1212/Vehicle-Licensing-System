// models/Vehicle.js
const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Consider making this a unique ID if necessary
  owner: { type: String, required: true }, // Owner's ID
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  engineNumber: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
